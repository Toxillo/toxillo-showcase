import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import './main.scss'
import Tile from '../components/Tile'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

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
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero'>
            <h1 className='hero-title'>
              Hi, I'm Leon.
            </h1>
            <p className='hero-text'>
              I am working on this site right now
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
      <section id='projects'>
        <h1>Projects</h1>
        <div className='tile-container'>
          {
            data.allMdx.nodes.map((node, index) => (
              <Tile key={index} data={node.frontmatter}></Tile>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Toxillo"></Seo>

export default IndexPage