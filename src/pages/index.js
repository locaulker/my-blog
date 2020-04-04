import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from "../components/Post"


const IndexQuery = graphql`
query{
  allMarkdownRemark(sort: {
    fields: [frontmatter___date], order:DESC
  }) {
    edges{
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM. Do, YYYY")
          author
          tags
          path
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

const IndexPage = () => (
  <Layout pageTitle="MyBlog" >
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

    <StaticQuery query={IndexQuery} render={data => {
      return (
        <>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              path={node.frontmatter.path}
              date={node.frontmatter.date}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
              tags={node.frontmatter.tags}
            />
          ))}
        </>
      )
    }} />

  </Layout>
)

export default IndexPage
