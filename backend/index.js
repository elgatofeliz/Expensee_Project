//MODULES
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const crypto = require('crypto')

const { addNewTransaction } = require('./src/db_access/transaction-dao.js')
const { registerUserService } = require('./src/services/registerUserService.js')
const { passwordHash } = require("./src/middleware/passwordHash.js")
const { loginUserService } = require("./src/services/loginUserService.js")
//FUNCTIONS

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.get("/transaction/all", ((req, res) => {

}))

app.post("/transaction/add", ((req, res) => {
    const newTransaction = req.body.newTransaction
    const id = req.body.userId
    console.log(id)
    const token = req.body.token
    // console.log(newTransaction,id,token)
    // if (isTokenValid(token)){
    //     addNewTransaction(id, newTransaction)
    // }
    addNewTransaction(id, newTransaction)
    .then((responseAddtoDB)=>{
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
            })        }
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
        .then((response) => {
            if (!response.token) {
                res.send({
                    token: false,
                    message: "Bitte authentifiziere deine Email"
                })
                console.log("false")
                return
            }
            res.send({
                token: token,
                message: "Erfolgreich eingeloggt."
            })
            console.log("token")
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
    const code = req.body.code

}))

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`listening on port ${PORT} `))