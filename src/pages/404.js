import * as React from "react"
import { Link } from "gatsby"
import './main.scss'

const pageStyles = {
  color: "#aaa",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 12,
  maxWidth: 600,
}

const paragraphStyles = {
  marginBottom: 48,
}

const linkStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: "700",
  backgroundColor: "#333",
  padding: "10px",
  borderRadius: "5px"
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry, this page isn't available right now as the site is still in development
        <br />
        <br />
        <Link style={linkStyles} to="/">Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
