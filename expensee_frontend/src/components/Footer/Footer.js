import { Link } from "react-router-dom"
import React from 'react'

const Footer = () => {
    return (
        <footer className="Footer">
            <nav>
                <div>
                    <Link to="/addtransaction">
                        <img src="img/walletWhite.png" alt="wallet" />
                        <p>Einnahmen</p>
                    </Link>
                </div>
                <div>
                    <Link to="/chart">
                        <img src="img/whiteHome.png" alt="home" />
                    </Link>
                </div>
                <div>
                    <Link to="/transactions">
                        <img src="img/sendMoneyWhite.png" alt="send" />
                        <p>Transaktionen</p>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer