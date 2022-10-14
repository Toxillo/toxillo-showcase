import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { heroContainer, hero, heroTitle, heroGraphicContainer, heroGraphic, tileContainer, buttonsContainer, buttonContainer, icon, buttonLink, heroSubtitle } from './main.module.scss'
import Tile from '../components/Tile'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
// import Button from '../components/Button'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "dddd, MMMM Do YYYY")
          slug
          title
          preview_image_alt
          platform
          preview_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }}`)
  return (
    <Layout>
      <section>
        <div className={heroContainer}>
          <div className={hero}>
            <h1 className={heroTitle}>
              Hi, I'm Leon.
            </h1>
            <p className={heroSubtitle}>
              I am working on this site right now
            </p>
          </div>
          <div className={heroGraphicContainer}>
            <StaticImage
              className={heroGraphic}
              alt="Orb"
              src="../images/square.jpg"
            />
          </div>
        </div>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <div className={tileContainer}>
          {
            data.allMdx.nodes.map((node, index) => (
              <Tile key={index} data={node.frontmatter}></Tile>
            ))
          }
        </div>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, possimus voluptate! Aliquid dolorum amet quis quos rerum voluptatem culpa animi. Pariatur iure quo fuga minima sequi dolores ex laborum accusantium.
        </p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <div className={buttonsContainer}>
        <a className={buttonContainer} href="mailto: Lms@gnadenweiler.de">
          <StaticImage className={icon} alt='Icon' src="../images/email.png"/>
          <div className={buttonLink}>Send an Email</div>
        </a>
        <a className={buttonContainer} href="https://www.linkedin.com/in/leonstier">
          <StaticImage className={icon} alt='Icon' src="../images/linkedin.png"/>
          <div className={buttonLink}>LinkedIn</div>
        </a>
        <a className={buttonContainer} href="https://github.com/toxillo">
          <StaticImage className={icon} alt='Icon' src="../images/github.png"/>
          <div className={buttonLink}>Github</div>
        </a>
        <a className={buttonContainer} href="https://www.instagram.com/_toxillo_/">
          <StaticImage className={icon} alt='Icon' src="../images/instagram.png"/>
          <div className={buttonLink}>Instagram</div>
        </a>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Toxillo"></Seo>

export default IndexPage