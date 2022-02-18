import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ReactDOM from 'react'
const { submitUserForm } = require("../../api/postUserApi.js")

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validatePw, setValidatePw] = useState("")
    const [response, setResponse] = useState("")
    const [emailError, setEmailError] = useState(false)

    const navigate = useNavigate()

    async function requestRegister(event) {
        event.preventDefault()
        console.log(event)

        if (!email.includes("@") || !email.includes(".")) {
            setResponse("Bitte gib eine gültige Email ein")
            return
        }
        if (password.length < 4 && !password.includes()) {
            setResponse("Bitte gib mindestens 4 Buchstaben ein")
            return
        }
        if (password !== validatePw) {
            setResponse("Passwort stimmt nicht überein")
            return
        }
        const registerData = {
            email: email,
            password: password
        }
        const backendResponse = await submitUserForm("register", registerData)

        if (backendResponse.status === "success") {
            setResponse(backendResponse.message)
            setTimeout(() => { return navigate("/login") }, 5000)
        }

        if (backendResponse.message === "emailExists") {
            console.log(backendResponse)
            setEmailError(true)
            return
        }

        setResponse(backendResponse.message)
        return;
    }

    return (
        <main className="Register">
            <h1>Expensee</h1>
            <p>Account erstellen</p>
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
            <input
                type="password"
                name="password"
                placeholder="Passwort bestätigen"
                className="inputStyle"
                onChange={(e) => setValidatePw(e.target.value)}
            />
            <button className="buttonBase" onClick={requestRegister}>Abschicken</button>
            <p style={{ display: emailError ? "block" : "none", textAlign: "center" }}>Diese Email ist schon vergeben. <Link to="/login"><h3 style={{ color: "red" }}>Weiter zum Login</h3></Link></p>
            <p style={{ textAlign: "center" }}>{response}</p>
            {/* {response.replace('Error:', '')} */}

            <article className="wavyImage" />
        </main >
    )
}

export default Register
