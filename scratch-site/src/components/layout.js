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
  query SiteTitleQuery {
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
      <Header data={data.allWordpressPage} siteTitle={data.wordpressSiteMetadata.name} />
      <content>{props.children}</content>
       <Footer/>
    </div>
  )
}

export default Layout
