import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from "../components/Post"
import { Row, Col } from 'reactstrap'
import Sidebar from "../components/Sidebar"


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
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <Row>
      <Col md="8">
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
      </Col>
      <Col md="4">
        <Sidebar />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
