import React from "react"
import headerStyles from "../css/header.module.scss"
import {Link, graphql, useStaticQuery} from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`) 
return (
  <div>
    <div className={headerStyles.header}>
      <div className={headerStyles.homecontainer}><Link to="/">
        <h1>
          {data.site.siteMetadata.title}
        </h1></Link>
      </div>
      <div className={headerStyles.navbarcontainer}>
      <Link to="/">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </div>
    </div>
)}
export default Header;
