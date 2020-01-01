import { Link } from "gatsby"
import Parser from "../components/parser"
import React, { Component } from "react"



class PageList extends Component {
  render() {
    const data = this.props.data
    return (
       <div>
            <h1>Pages</h1>
            {data.edges.map(({ node }) => (
              <div key={node.slug}>
                <Link to={node.slug}>
                  <h2>{node.title}</h2>
                </Link>
                <h3><Parser data={node.excerpt}></Parser></h3>
              </div>
            ))}
          </div>
    )
  }
}

export default PageList