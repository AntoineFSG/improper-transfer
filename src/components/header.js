import { Link } from "gatsby"
import React from "react"
import headerStyles from "../css/header.module.scss"
import Img from "gatsby-image"


const Header = (props) => {
  const pagesData = props.pagesData
  const siteMetadata= props.siteMetadata
  const logo = props.logo
  return (
      <div className={headerStyles.header}>
        <div className={headerStyles.homecontainer}><Link to="/">
          <Img className={headerStyles.logo} alt={siteMetadata.title} fluid={logo}/></Link>
        </div>
        <div className={headerStyles.navbarcontainer}>
        {pagesData.edges.map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug}>
                  <h2>{node.title}</h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    )
}

export default Header

