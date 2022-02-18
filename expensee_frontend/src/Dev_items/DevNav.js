import React from 'react'
import { Link } from "react-router-dom"

const DevNav = () => {
    return (
        <div style={{
            position: "fixed",
            top: "0",
        }}>
            <ul style={{
                border: "2px solid",
                padding: "15px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
            }}>
                <li><Link to={"/"}>Welcome_token?</Link></li>
                <li><Link to={"/welcome"}>Welcome</Link></li>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/chart"}>Chart</Link></li>
                <li><Link to={"/transactions"}>Transactions</Link></li>
                <li><Link to={"/addtransaction"}>Add Transaction</Link></li>
            </ul>
        </div>
    )
}

export default DevNav