import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitUserForm } from '../../api/postUserApi.js'
import { useCookies } from 'react-cookie';
const { submitForm } = require("../../api/postUserApi.js")

// props.changeUserData
const Login = (props) => {
    console.log(props)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")
    const [code, setCode] = useState("")
    const [authResponse, setAuthResponse] = useState("")

    const [cookies, setCookie, removeCookie] = useCookies(['name']);

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
        console.log(backendResponse)
        if (!backendResponse.token) {
            setToken(backendResponse.token)
            return
        }
        setCookie("Token", backendResponse.token)
        navigate("/chart")
        return
    }

    async function requestAuthentication(event) {
        event.preventDefault()
        const data = {
            email: email,
            authCode: code
        }

        const response = await submitUserForm("authenticate", data)

        setResponse(response.message)

        if (response.status === 200) {
            setTimeout(() => { return navigate("/chart") }, 5000)
        }
        return
    }

    return (
        <main className="Login">
            <h1>Expensee</h1>
            <article style={{ display: loginToken ? "block" : "none" }} className="LoginForm">
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

            <article style={{ display: loginToken ? "none" : "block" }} className="AuthForm">
                <p>Email Bestätigen</p>
                <input
                    type="number"
                    name=""
                    placeholder="Email-code"
                    className="inputStyle"
                    onChange={(e) => setCode(e.target.value)}
                />
                <button
                    className="buttonBase"
                    onClick={requestAuthentication}>
                    Authentifizieren
                </button>
                <p>{response}</p>
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