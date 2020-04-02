import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
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
            />
          ))}
        </>
      )
    }} />
  </Layout>
)

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
          path
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
