import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import footerStyles from "../css/footer.module.scss"

 const Footer = () =>{ 
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`) 
    
    return (
  <footer className={footerStyles.footer}>
    <div>
      © {new Date().getFullYear()} {data.site.siteMetadata.author}
    </div>
  </footer>
)}
export default Footer