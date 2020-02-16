/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../css/layout.module.scss"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
  query SiteQuery {
      file(name: {eq: "logo"}) {
        name
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    wordpressSiteMetadata {
      name
    }
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
  `)

  return (
    <div className={layoutStyles.main}>
      <Header logo={data.file.childImageSharp.fluid} pagesData={data.allWordpressPage} wordpressSiteTitle={data.wordpressSiteMetadata.name} siteMetadata={data.site.siteMetadata} />
      <main>{props.children}</main>
      <Footer siteMetadata={data.site.siteMetadata}/>
    </div>
  )
}

export default Layout
