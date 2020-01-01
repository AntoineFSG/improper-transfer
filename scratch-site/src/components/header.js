import { Link } from "gatsby"
import React from "react"
import headerStyles from "../css/header.module.scss"


const Header = (props) => {
  const data = props.data
  return (
      <div className={headerStyles.header}>
        <div className={headerStyles.homecontainer}><Link to="/">
          <h1>
            {props.siteTitle}
          </h1></Link>
        </div>
        <div className={headerStyles.navbarcontainer}>
        {data.edges.map(({ node }) => (
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

