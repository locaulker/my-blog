const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const authors = require('./src/util/authors')
const _ = require('lodash')


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve('src/templates/single-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js')
  }

  return graphql(`
    {
      allMarkdownRemark{
        edges{
          node{
            frontmatter {
              author
              tags
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges

    // Create single blog post pages
    posts.forEach(({ node }) => (
      createPage({
        path: node.frontmatter.path,
        component: templates.singlePost,
        context: {
          // slug to template single-post.js
          slug: node.frontmatter.path,

          // find author imageUrl from authors and pass it to single-post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
        }
      })
    ))

    // Get all tags
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach(tag => (
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    ))
    tags = _.uniq(tags)

    // Create tag page
    createPage({
      path: '/tags',
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts
      }
    })
  })
}