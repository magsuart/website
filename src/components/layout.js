import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(query)

  return (
    <main>
      {children}
    </main>
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
