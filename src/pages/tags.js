import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const tagsPage = () => {
  return (
    <Layout pageTitle="All Tags">
      <SEO
        title="All Tags"
        keywords={['gatsby', 'application', 'react', 'Tags']}
      />
      <p>gatsby, react, html, css, MySQL, PHP</p>
    </Layout>
  )
}

export default tagsPage