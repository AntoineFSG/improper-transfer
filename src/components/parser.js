import React, { Component } from "react"


class Parser extends Component {
    render() {
      const data = this.props.data;
      function createMarkup() {
        return {__html: data};
      }

      return (
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      )
    }
  }
  
  export default Parser