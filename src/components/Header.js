import * as React from 'react'
import './Header.scss'

const Header = ({ children }) => {
    return (
        <header className='main-header'>
            {children}
        </header>
    )
}

export default Header