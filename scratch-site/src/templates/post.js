import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import postStyles from "../css/post.module.scss"
import Layout from "../components/layout";

const Post= (props)=>{
    const StaticPage = props.data.wordpressPost
    let featuredImg = undefined
    let inlineImage = undefined
    if (StaticPage.featured_media) {
        featuredImg = StaticPage.featured_media.localFile.childImageSharp.fluid
    }
    if (StaticPage.acf){
        inlineImage = StaticPage.acf.inline_image_1.localFile.childImageSharp.fluid
    }
    return (
    <Layout>
      <div className={postStyles.post}>
        {featuredImg && <Img className={postStyles.featured_image} alt= {StaticPage.slug} fluid={featuredImg} />}
        <h1><Parser data={StaticPage.title}/></h1>
        <div className={postStyles.content}>
        <Parser data={StaticPage.content}/>
        {inlineImage && <Img className={postStyles.inline_image} alt= {StaticPage.slug} fluid={inlineImage} />}
        </div>

      </div>
    </Layout>
    )
}
export default Post
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
      acf {
        inline_image_1 {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      featured_media {
        localFile {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                        
                    }
                }
            }
        }
    }
  }`

