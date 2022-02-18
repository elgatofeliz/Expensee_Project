//MODULES
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const crypto = require('crypto')

const { addNewTransaction } = require('./src/db_access/transaction-dao.js')
const { registerUserService } = require('./src/services/registerUserService.js')
const { passwordHash } = require("./src/middleware/passwordHash.js")
const { loginUserService } = require("./src/services/login-user")
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
    const token = req.body.token
    // if (isTokenValid(token)){
    //     addNewTransaction(id, newTransaction)
    // }
    addNewTransaction(id, newTransaction)
}))

app.post("/user/login", ((req, res) => {
    const email = req.body.email
    const password = req.body.password

    loginUserService({ email, password })
        .then((token) => {
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

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`listening on port ${PORT} `))