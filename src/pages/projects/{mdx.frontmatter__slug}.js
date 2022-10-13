import * as React from 'react'
import { graphql } from 'gatsby'
import { mainContent } from './projects.module.scss'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import { MDXImage } from '../../components/MDXComponents.js'

const shortcodes = { MDXImage }

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <div className={mainContent}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
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