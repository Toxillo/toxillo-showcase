import * as React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Layout = ({ pageTitle, children }) => {
    if (pageTitle == null) {
        return (
            <div>
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
        <div>
            <Header>
                <NavBar>
                </NavBar>
            </Header>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout