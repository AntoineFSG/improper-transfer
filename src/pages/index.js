import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        edges {
          node {
            featured_media {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 700) {
                          ...GatsbyImageSharpFluid_tracedSVG
                                }
                }
              }
            }
            id
            title
            slug
            excerpt
          }
        }
      }
    }
    `)
  const pages = data.allWordpressPage
  const posts = data.allWordpressPost

  return(
  <Layout data={pages}>
    <Head pageTitle="Home"/>
    <SEO title="Home of Improper design" />
    <h1 style={{marginTop:60}}>The work of  Ian McGillivray</h1>
    <PostList data={posts}/>
  </Layout>
)}

export default IndexPage
