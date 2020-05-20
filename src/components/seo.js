import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import MagsuIcon from "../images/magsuart-icon.png"

function SEO({ titleParam, descriptionParam }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    title,
    lang,
    description,
    siteUrl,
    keywords,
  } = site.siteMetadata

  const seo = {
    title: titleParam || title,
    description: descriptionParam || description,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet>
      <title>{seo.title}</title>

      <html lang={lang} />
      <meta property="og:locale" content={lang} />
      <meta property="og:type" content="website" />

      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.title} />

      <link rel="canonical" href={seo.url} />
      <meta property="og:url" content={seo.url} />

      <meta name="description" content={seo.description} />
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
