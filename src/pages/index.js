import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './main.scss'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const IndexPage = () => {

  return (
    <>
      <Header>
        <NavBar>
        </NavBar>
      </Header>
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero'>
            <h1 className='hero-title'>
              Hi, I'm Leon.
              <br></br>
              Student and professional amateur developer
            </h1>
            <p className='hero-text'></p>
          </div>
          <div className='hero__graphic-container'>
            <StaticImage
              className='hero-graphic'
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/square.jpg"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage