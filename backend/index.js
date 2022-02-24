//MODULES
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const crypto = require('crypto')
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { addNewTransaction } = require('./src/db_access/transaction-dao.js')
const { registerUserService } = require('./src/services/registerUserService.js')
const { passwordHash } = require("./src/middleware/passwordHash.js")
const { loginUserService } = require("./src/services/loginUserService.js")
const { authenticateUserService } = require("./src/services/authenticateUserService.js")
const { allUserDataDB } = require('./src/db_access/getAllUserData-dao')
const { verifyToken } = require('./src/middleware/verifyToken.js')
const { nextTick } = require("process")
const { readSync } = require("fs")
//FUNCTIONS
//cors.SupportsCredentials = true;
const app = express()
dotenv.config()



const corsOptions = {
    origin: process.env.REQ_ORIGIN,
    methods: "GET, POST",
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.get("/user/authenticationCheck", ((req, res) => {
    console.log("COOKIES: ", req.cookies)
    if (!req.cookies.Token) {
        console.log("AuthCheck: Kein Cookie gefunden")
        res.send(false)
        return
    }
    const tokenVerified = verifyToken(req.cookies.Token)
    if (!tokenVerified) {
        console.log("AuthCheck: Token nicht verifiziert")
        res.send(false)
        return
    }
    console.log("Verified Token", tokenVerified)
    res.send(true)
    return
}))

app.get("/allUserData", ((req, res) => {
    console.log("allUserData ROUTE")
    console.log(req.cookies.Token)
    if (!req.cookies.Token) {
        res.send({ message: "kein Token" })
        return
    }
    const output = verifyToken(req.cookies.Token)
    allUserDataDB(output)
        .then((data) =>
            //res.send({ user: data })
            res.send({ userData: data })
        )
        .catch((err) => console.log("Error in Database Connection", err))
}))

app.post("/transaction/add", ((req, res) => {

    const newTransaction = req.body.newTransaction
    const id = req.body.userId
    // if (isTokenValid(token)){
    //     addNewTransaction(id, newTransaction)
    // }
    console.log(id)
    addNewTransaction(id, newTransaction)
        .then((responseAddtoDB) => {
            console.log(responseAddtoDB.dbResponse)
            if (responseAddtoDB.dbResponse.modifiedCount) {
                res.send({
                    status: "acknowledged",
                    message: "acknowledged!"
                })
            }
            else {
                res.send({
                    status: "not acknowledged",
                    message: "not acknowledged!"
                })
            }
        })
}))

app.post("/user/register", (req, res) => {

    const code = Math.ceil(Math.random() * 1000000)
    const newUser = {
        email: req.body.email,
        passwordHash: passwordHash(req.body.password),
        isAuth: false,
        authCode: code,
        EASS: {
            Einkommen: 0,
            Ausgeben: 0,
            Sparen: 0,
            Sonstiges: 0,
        },
        sumEASS: 0,
        transactions: []
    }
    console.log(newUser)
    registerUserService(newUser)
        .then((response) => {
            if (!response.acknowledged) {
                res.send({
                    status: "failed",
                    message: "Es ist ein Fehler aufgetreten. Bitte probiere es noch einmal!"
                })
            }
            res.send({
                status: "success",
                message: `Du hast dich erfolgreich registriert und wirst in einigen Sekunden zum Login weitergeleitet!`
            })
        })
        .catch((err) => {
            res.send({ status: err.status, message: err.message })
        })
})

app.post("/user/login", ((req, res) => {
    const email = req.body.email
    const password = req.body.password

    loginUserService({ email, password })
        .then((token) => {
            console.log("Es wurde der folgende Token generiert: ", token)
            if (!token) {
                console.log("return false")
                res.send({
                    token: "",
                    message: "Bitte authentifiziere deine Email"
                })
                return
            }
            res.send({
                status: 200,
                token: token,
                _id: token._id,
                message: "Erfolgreich eingeloggt."
            })
        })
        .catch((err) => {
            console.log("err on login:", err)
            res.send({ message: err.message })
            // const errorMessage = err
            // res.send(errorMessage)
            // res.send({ message: 'Bitte versuche es noch einmal!' })
        })
}))

app.post("/user/authenticate", ((req, res) => {

    const email = req.body.email
    const code = req.body.authCode

    authenticateUserService(email, code)
        .then((response) => {
            console.log(response)
            if (response.length === 212) {
                res.send({ status: 200, token: response, message: "Du hast dich erfolgreich authentifiziert und wirst in wenigen Sekunden weitergeleitet" })
                return
            }
            throw new Error("Es ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
        })
        .catch((err) => {
            res.send({ message: err.message })
        })
}))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on port ${PORT} `))