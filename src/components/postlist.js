import { Link} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import React, { Component } from "react"
import postListStyles from "../css/postList.module.scss"



class PostList extends Component {
  render() {
    const data = this.props.data

    return (
      <>
        <div className={postListStyles.mainPostContainer}>
        {data.edges.map(({ node }) => (
          <div className={postListStyles.postContainer}key={node.slug}>
            <Link to={node.slug}>
              {node.featured_media && <Img fluid={node.featured_media.localFile.childImageSharp.fluid}/>}
              <h2>{node.title}</h2>
            </Link>
            <h3><Parser data={node.excerpt}></Parser></h3>
          </div>
        ))}
        </div>
      </>
    )
  }
}

export default PostList


