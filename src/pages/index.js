import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { heroSection, heroContainer, hero, heroTitle, heroGraphicContainer, heroGraphic, tileContainer} from './main.module.scss'
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
      <section className={heroSection}>
        <div className={heroContainer}>
          <div className={hero}>
            <h1 className={heroTitle}>
              Hi, I'm Leon.
            </h1>
            <p>
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
      <section id='projects'>
        <h1>Projects</h1>
        <div className={tileContainer}>
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