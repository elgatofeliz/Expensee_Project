import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitUserForm } from '../../api/postUserApi.js'
const { submitForm } = require("../../api/postUserApi.js")

// props.changeUserData
const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")
    const [code, setCode] = useState("")

    const [token, setToken] = useState(true)

    const navigate = useNavigate()

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
        console.log(backendResponse.token)
        setToken(backendResponse.token)
        setResponse(backendResponse.message)

        if (!token) {
            return
        }
        navigate("/chart")
        return;
        // const recievedToken = response.data.token
        // props.setToken(recievedToken)
        // Cookies.set('token',recievedToken)
    }

    async function requestAuth(event) {
        event.preventDefault()

        const response = await submitUserForm("authenticate",)
    }

    return (
        <main className="Login">
            <h1>Expensee</h1>
            <article style={{ display: token ? "block" : "none" }} className="LoginForm">
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
            </article>

            <article style={{ display: token ? "none" : "block" }} className="AuthForm">
                <p>Email Bestätigen</p>
                <input
                    type="number"
                    name=""
                    placeholder="Email-code"
                    className="inputStyle"
                />
                <button
                    className="buttonBase"
                    onClick={requestAuth}>
                    Authentifizieren
                </button>
            </article>
            <article className="wavyImage" />
        </main>
    )
}

export default Login

// import Cookies from 'js-cookie'
// Cookies.set('name', 'value')
// Cookies.get('name') // => 'value'
// Cookies.remove('name')