import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"
import pageStyles from "../css/page.module.scss"


const Page= (props)=>{
    const StaticPage = props.data.wordpressPage
    return (
      <>
        <Layout>
        <Head pageTitle={StaticPage.title}/>
        <SEO title={StaticPage.title} />
        <div className={pageStyles.page}>
        <h1><Parser data={StaticPage.title}/></h1>
        <div className={pageStyles.content}>
        <Parser data={StaticPage.content}/>
        </div>
        </div>
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

