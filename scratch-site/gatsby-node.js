/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const posts = await graphql(`
    {
        allWordpressPage {
          edges {
            node {
              id
              slug
              status
              template
            }
          }
        }
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              template
              format
            }
          }
        }
      }
    `)
    console.log(JSON.stringify(posts, null, 4))
    // Check for any errors
  if (posts.errors) {
    throw new Error(posts.errors)
  }
    // Access query postss via object destructuring
    const { allWordpressPage, allWordpressPost } = posts.data
    
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    // We want to create a detailed page for each
    // post node. We'll just use the WordPress Slug for the slug.
    // The Post ID is prefixed with 'POST_'
    
  
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        id: edge.node.id
      },
    })
  }),
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: edge.node.id
      },
    })
  })
  }