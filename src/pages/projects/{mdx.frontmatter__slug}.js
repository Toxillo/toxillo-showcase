import * as React from 'react'
import { graphql } from 'gatsby'
import { mainContent } from './projects.module.scss'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
          <div className={mainContent}>
            {children}
          </div>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost