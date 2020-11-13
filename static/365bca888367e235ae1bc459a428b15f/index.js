import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(query)
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

const query = graphql`
  query PortfolioAndSkills {
    allSkillsJson {
      edges {
        node {
          description
          title
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          description
          fileName
          title
        }
      }
    }
  }
`

export default IndexPage
