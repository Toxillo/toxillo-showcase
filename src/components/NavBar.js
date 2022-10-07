import { Link } from 'gatsby'
import * as React from 'react'
import { mainNavItems, mainNavItem } from './navbar.module.scss'

const NavBar = () => {
    return (
        <nav>
            <ul className={mainNavItems}>
                <li id="main-nav-heading" className={mainNavItem}>
                    <Link to="/">Me</Link>
                </li>
                <li className={mainNavItem}>
                    <Link to="/404">About</Link>
                </li>
                <li className={mainNavItem}>
                    <Link to="/#projects">Projects</Link>
                </li>
                <li className={mainNavItem}>
                    <Link to="/404">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar