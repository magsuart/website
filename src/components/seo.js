/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import MagsuIcon from "../images/magsuart-icon.png"

function SEO({ title, description }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  console.log(site.siteMetadata)

  const {
    defaultTitle,
    lang,
    defaultDescription,
    siteUrl,
    keywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet defaultTitle={seo.title} titleTemplate={`${seo.title} · %s`}>

      <html lang={lang} />
      <meta property="og:locale" content={lang} />
      <meta property="og:type" content="website" />

      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.title} />

      <link rel="canonical" href={seo.url} />
      <meta property="og:url" content={seo.url} />

      <meta name="description" content={seo.url} />
      <meta property="og:description" content={seo.description} />

      <meta name="image" content={`${siteUrl}${MagsuIcon}`} />
      <meta property="og:image" content={`${siteUrl}${MagsuIcon}`} />
      <meta property="og:image:alt" content="Magsu.art Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      {/* <meta name="docsearch:version" content="2.0" /> */}
      {/* <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      /> */}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        lang
        description
        siteUrl
        keywords
      }
    }
  }
`

export default SEO
