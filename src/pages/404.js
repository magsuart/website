import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <main>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p><Link to="/">Return to home page</Link></p>
  </main>
)

export default NotFoundPage
