import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import './main.scss'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Tile from '../components/Tile'
import Seo from '../components/Seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
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
              I am working on this site right now
              <br></br>
              {data.site.siteMetadata.title}
            </p>
          </div>
          <div className='hero-graphic-container'>
            <StaticImage
              className='hero-graphic'
              alt="Orb"
              src="../images/square.jpg"
            />
          </div>
        </div>
      </section>
      <section>
        <h1>Projects</h1>
        <div className='tile-container'>
          <Tile dest="404" platform="Android" title="Vocab Trainer"></Tile>
          <Tile dest="404" platform="iOS" title="Scrabble Online"></Tile>
          <Tile dest="404" platform="iOS" title="Scrabble Online"></Tile>
          <Tile dest="404" platform="iOS" title="Scrabble Online"></Tile>
          <Tile dest="404" platform="iOS" title="Scrabble Online"></Tile>
        </div>
      </section>
    </>
  )
}

export const Head = () => <Seo title="Toxillo"></Seo>

export default IndexPage