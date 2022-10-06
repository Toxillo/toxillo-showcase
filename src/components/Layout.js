import * as React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Layout = ({ pageTitle, children }) => {
    if (pageTitle == null) {
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
    } else return (
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