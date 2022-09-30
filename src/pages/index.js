import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import './main.scss'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Tile from '../components/Tile'

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
            </h1>
            <p className='hero-text'>
              I study, I learn, I do stuff that excites me
            </p>
          </div>
          <div className='hero-graphic-container'>
            <StaticImage
              className='hero-graphic'
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/square.jpg"
            />
          </div>
        </div>
      </section>
      <section>
        <h1>Projects</h1>
        <div className='tile-container'>
          <Tile dest="404" platform="Android" title="Vocab Trainer"></Tile>
          {/* <Tile dest="404" platform="iOS" title="Scrabble Online" img="../images/scrabble.png" img_alt="Screenshot of Scrabble Clone"></Tile> */}
        </div>
      </section>
    </>
  )
}

export const Head = () => <title>Toxillo | Work in Progress</title>

export default IndexPage