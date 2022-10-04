import { graphql, Link, useStaticQuery} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Tile = () => {

    const data = useStaticQuery(graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
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
    }`)

    const image = getImage(data.mdx.frontmatter.preview_image)
    return (
        <Link className='tile' to={"projects/" + data.mdx.frontmatter.slug}>
            <span>{data.mdx.frontmatter.platform}</span>
            <h2>{data.mdx.frontmatter.title}</h2>
            <div className='tile-graphic-container'>
                <GatsbyImage image={image} alt={data.mdx.frontmatter.preview_image_alt} />
            </div>
        </Link>
    )
}

export default Tile