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
          {node.featured_media && <Img fluid={node.featured_media.localFile.childImageSharp.fluid}/>}
            <Link className={postListStyles.overLay} to={node.slug}>
              <h2 className={postListStyles.title}><Parser data={node.title}/></h2>
              <p><Parser data={node.excerpt}/></p>
            </Link>
           
          </div>
        ))}
        </div>
      </>
    )
  }
}

export default PostList


