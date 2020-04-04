import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const teamPage = () => {
  return (
    <Layout pageTitle="Our Team">
      <SEO
        title="Team"
        keywords={['gatsby', 'application', 'react', 'Team']}
      />
      <p>Richard Hernandez, Amet, Magna, Venenatis, Tellus, Egestas</p>
    </Layout>
  )
}

export default teamPage