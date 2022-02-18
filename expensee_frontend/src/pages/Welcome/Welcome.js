import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <main className="Welcome">
            <h1>Expensee</h1>
            < Link to={"/login"} className="buttonBase">Login mit Email</Link >
            < Link to={"/register"} className="buttonBase">Account erstellen mit Email</Link >
            <article className="wavyImage" />
        </main>
    )
}

export default Welcome