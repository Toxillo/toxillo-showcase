import { Link } from "gatsby"
import * as React from 'react'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li id="main-nav__heading" className="main-nav__item">
                    <Link to="index.html">Home</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="index.html">Home</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="index.html">Home</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="index.html">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar