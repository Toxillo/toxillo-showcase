import { Link } from 'gatsby'
import * as React from 'react'
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li id="main-nav__heading" className="main-nav__item">
                    <Link to="404">Me</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="404">About</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="404">Projects</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="404">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar