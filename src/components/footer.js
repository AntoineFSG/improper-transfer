import React from "react"
import footerStyles from "../css/footer.module.scss"

 const Footer = (props) =>{ 

    
    return (
  <footer className={footerStyles.footer}>
    <div>
  
      © {new Date().getFullYear()} {props.siteMetadata.author}
    </div>
  </footer>
)}
export default Footer