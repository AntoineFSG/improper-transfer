import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import postStyles from "../css/post.module.scss"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SlideShow from "../components/slideShow";
import Head from "../components/head"
import SEO from "../components/seo"

const Post= (props)=>{

    const StaticPage = props.data.wordpressPost
    let featuredImg = undefined
    if(!StaticPage.content){StaticPage.content=StaticPage.excerpt}
    let acf = undefined
    let acfArr= []
    

    if (StaticPage.featured_media) {
        featuredImg = StaticPage.featured_media.localFile.childImageSharp.fluid
    }
    if (StaticPage.acf){
        acf = StaticPage.acf
        
        Object.entries(acf).forEach((inline) =>{
          if (inline!==false){
              acfArr.push(inline[1])
          }else{return}
        })
        
    }
    let inlineArr=acfArr.slice(0,11);
    console.log(inlineArr)
    let slideArr=acfArr.slice(12,23);

    console.log(slideArr[0])
    return (
    <Layout>
      <Head pageTitle={StaticPage.title}/>
      <SEO title={StaticPage.title} />
        
      <div className={postStyles.post}>
        <h1><Parser data={StaticPage.title}/></h1>
        {slideArr[0]!=null && <SlideShow slides={slideArr}/>}
        <div className={postStyles.content}>
          <div className={postStyles.imageContainer}>
          {featuredImg && <Img alt= {StaticPage.slug} fluid={featuredImg} />}
          </div>
          <div className={postStyles.article}>
          <Parser data={StaticPage.content}/>
          </div>
        </div>
        {inlineArr[0]!==null && <Gallery acfArr={inlineArr}/>}
      </div>
    </Layout>
    )
}
export default Post
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      slug
      excerpt
      acf{
        inline_image_1{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_2{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_3{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_4{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_5{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_6{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_7{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_8{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_9{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_10{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_11{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        inline_image_12{
          alt_text
          title
          description
          id
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
        
        slider_image_1{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_2{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_3{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_4{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_5{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_6{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_7{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_8{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_9{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_10{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_11{
          localFile{
            id
            childImageSharp{
              fluid(maxHeight: 550){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
      }
      
      
      featured_media {
        localFile {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                        
                    }
                }
            }
        }
    }
  }`

