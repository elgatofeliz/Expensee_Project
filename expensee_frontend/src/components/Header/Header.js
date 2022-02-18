import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
const Header = (props) => {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)
    let history = useNavigate();
    return (
        <header className="Header">
            <nav className="headerNav">
                {props.title === "" ?
                    <img onClick={() => history(-1)} src="img/arrow.png" alt="Menu" /> :
                    <img onClick={toggleSidebar} src="img/burgerMenu.png" alt="menu" />
                }
                <p>{props.title === "" ? "" : props.title}</p>
            </nav>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <img className="closeX" onClick={toggleSidebar} src="img/closeVector.png" />
                <ul className={'nav-menu-items'}>
                    <li>
                        <Link to="/chart">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/addtransaction">
                            Einnahmen
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions">
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
                <img src="img/wavy.png" alt="" />
            </nav>
        </header>
    )
}

export default Header