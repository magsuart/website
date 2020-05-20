import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = () => {

  const {
    allSkillsJson,
    allPortfolioJson,
    allFile
  } = useStaticQuery(query)

  console.log(allFile)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>I'm Magsu.art</h1>
      <p>Freelance Creative & Professional Digital artist.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

        {allSkillsJson.edges.map(edge => {
          return <div key={edge.node.id}><h2>{edge.node.title}</h2><p>{edge.node.description}</p></div>
        })}
        <hr/>
        {allPortfolioJson.edges.map(edge => {
          return <div key={edge.node.id}><h2>{edge.node.title}</h2><p>{edge.node.description}</p></div>
        })}
        <hr/>
        {allFile.edges.map(edge => {
          return <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} alt={edge.node.base}/>
        })}

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
          id
          description
          title
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          id
          description
          fileName
          title
        }
      }
    }
    allFile(filter: {relativeDirectory: {eq: "images/portfolio"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          base
        }
      }
    }
  }
`

export default IndexPage
