import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Layout from "../components/layout";


const Page= (props)=>{
    const StaticPage = props.data.wordpressPage
    return (
      <>
        <Layout>
        <h1><Parser data={StaticPage.title}/></h1>
        <Parser data={StaticPage.content}/>
        </Layout>
      </>
    )
}
export default Page
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }`

