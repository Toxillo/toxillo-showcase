import * as React from 'react'

const Header = ({ children }) => {
    return (
        <header className='main-header'>
            {children}
        </header>
    )
}

export default Header