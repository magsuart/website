import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(query)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <footer>
        © <a href="https://sirmorel.fr">Sirmorel</a> {new Date().getFullYear()}, All rights reserved
      </footer>
    </div>
  )
}

/*const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`*/

export default Layout
