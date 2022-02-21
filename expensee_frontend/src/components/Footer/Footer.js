import { Link } from "react-router-dom"
import React from 'react'

const Footer = (props) => {
    return (
        <footer className="Footer">
            <nav>
                <div>
                    <Link to="/addtransaction">
                        {props.title ?
                            <img src='img/walletYellow.png' alt="Menu" /> :
                            <img src='img/walletWhite.png' alt="menu" />
                        }
                        <p>Einnahmen</p>
                    </Link>
                </div>
                <div>
                    <Link to="/chart">
                        {props.titleChart ?
                            <img src='img/yellowHome.png' alt="menu" /> :
                            <img src='img/whiteHome.png' alt="Menu" />
                        }
                    </Link>
                </div>
                <div>
                    <Link to="/transactions">
                        {props.titleTrans ?
                            <img src='img/iconSendMoneyYellow.png' alt="menu" /> :
                            <img src='img/sendMoneyWhite.png' alt="Menu" />
                        }
                        <p>Transaktionen</p>
                    </Link>
                </div>
            </nav>
        </footer>
    )


}

export default Footer