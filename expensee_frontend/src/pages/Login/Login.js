import React, { useState } from 'react'
import { submitUserForm } from '../../api/postUserApi.js'
const { submitForm } = require("../../api/postUserApi.js")

// props.changeUserData
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")

    const [token, setToken] = useState("")

    async function requestLogin(event) {
        event.preventDefault()

        if (!email.includes("@") || !email.includes(".")) {
            setResponse("Die Email muss vollständig sein")
            return;
        }
        if (password === "") {
            setResponse("Bitte gültiges Password eingeben")
            return;
        }
        const userData = {
            email: email,
            password: password
        }
        const backendResponse = await submitUserForm("login", userData) // Das ist der weg raus aus dem Frontend
        if (backendResponse.token) {
            setToken(backendResponse.token)
            setResponse(backendResponse.message)
        }
        setResponse(backendResponse.message)// hier kommt der weg wieder rein
        // app.post("/user/login", ((req, res) => {
        //    console.log(req.body)
        // andere serverlogik
        //   res.send({ message: "Success", success: true })
        //}))

        console.log(response)
        return;
        // const recievedToken = response.data.token
        // props.setToken(recievedToken)
        // Cookies.set('token',recievedToken)
    }

    return (
        <main className="Login">
            <h1>Expensee</h1>
            <p>Login mit Email</p>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputStyle"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Passwort"
                className="inputStyle"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="buttonBase"
                onClick={requestLogin}>
                Abschicken
            </button>
            <p>{response}</p>
            <article className="wavyImage" />
        </main>
    )
}

export default Login

// import Cookies from 'js-cookie'
// Cookies.set('name', 'value')
// Cookies.get('name') // => 'value'
// Cookies.remove('name')