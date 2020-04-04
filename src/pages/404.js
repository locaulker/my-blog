import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oops! something's wrong...">
    <SEO
      title="404: Page NOT found"
    />
    <Link to={'/'} className="btn btn-outline-primary">
      <i class="fad fa-home-lg-alt"></i>&nbsp;&nbsp;Go Back
    </Link>

  </Layout>
)

export default NotFoundPage
