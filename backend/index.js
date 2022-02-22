//MODULES
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const crypto = require('crypto')

const { addNewTransaction } = require('./src/db_access/transaction-dao.js')
const { registerUserService } = require('./src/services/registerUserService.js')
const { passwordHash } = require("./src/middleware/passwordHash.js")
const { loginUserService } = require("./src/services/loginUserService.js")
const { authenticateUserService } = require("./src/services/authenticateUserService.js")
//FUNCTIONS

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.get("/transaction/all", ((req, res) => {
    console.log(req.body)
}))

app.post("/transaction/add", ((req, res) => {
    const newTransaction = req.body.newTransaction
    const id = req.body.userId
<<<<<<< HEAD
    console.log(id)
    const token = req.body.token
    // console.log(newTransaction,id,token)
=======
    const token = req.body.token // req.cookies ?
>>>>>>> fd84b8ec52e5ca39b05e56c25fa8b9ee11ee1274
    // if (isTokenValid(token)){
    //     addNewTransaction(id, newTransaction)
    // }
    addNewTransaction(id, newTransaction)
        .then((responseAddtoDB) => {
            if (responseAddtoDB.dbResponse.acknowledged) {
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
        authCode: code
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
            res.send({ message: err.message })
        })
})

app.post("/user/login", ((req, res) => {
    const email = req.body.email
    const password = req.body.password

    loginUserService({ email, password })
        .then((token) => {
            if (!token) {
                console.log("return false")
                res.send({
                    token: "",
                    message: "Bitte authentifiziere deine Email"
                })
                return
            }
            res.send({
                token: token,
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

<<<<<<< HEAD
=======
    console.log(req.body)

>>>>>>> dennis
    const email = req.body.email
    const code = req.body.authCode

    authenticateUserService(email, code)
        .then((response) => {
            if (!response.acknowledged) {
                throw new Error("Es ist ein Fehler aufgetreten. Bitte versuche es noch einmal.")
            }
<<<<<<< HEAD
            res.send({ message: "Du hast dich erfolgreich authentifiziert." })
=======
            res.send({ status: 200, message: "Du hast dich erfolgreich authentifiziert und wirst in wenigen Sekunden weitergeleitet" })
>>>>>>> dennis
        })
        .catch((err) => {
            res.send({ message: err.message })
        })
}))

const PORT = process.env.PORT || 9001
app.listen(PORT, () => console.log(`listening on port ${PORT} `))