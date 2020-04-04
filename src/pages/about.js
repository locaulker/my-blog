import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const aboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <SEO
        title="About Us"
        keywords={['gatsby', 'application', 'react', 'Tags']}
      />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo perferendis magnam sequi fugit voluptatum neque dolores quas modi sapiente fugiat labore eaque quae sunt deserunt, omnis maxime obcaecati et dolorum eos architecto dignissimos itaque! Veniam quaerat officiis repudiandae ratione fugit. Voluptatem dolores veniam eum? Necessitatibus in provident doloremque laudantium rem.</p>
    </Layout>
  )
}

export default aboutPage
