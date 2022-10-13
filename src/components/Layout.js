import * as React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header>
                <NavBar>
                </NavBar>
            </Header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout