import React from "react"
import { graphql} from "gatsby"
import Parser from "../components/parser"
import Img from "gatsby-image"
import postStyles from "../css/post.module.scss"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SlideShow from "../components/slideShow";


const Post= (props)=>{

    const StaticPage = props.data.wordpressPost
    let featuredImg = undefined
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
        console.log(acfArr)
        
    }
    let inlineArr=acfArr.slice(0,4);
    let slideArr=acfArr.slice(5,9);
    console.log(inlineArr)
    return (
    <Layout>
      <div className={postStyles.post}>
        {featuredImg && <Img className={postStyles.featured_image} alt= {StaticPage.slug} fluid={featuredImg} />}
        <h1><Parser data={StaticPage.title}/></h1>
        <div className={postStyles.content}>
        <Parser data={StaticPage.content}/>
        <SlideShow slides={slideArr}/>
        {acf && <Gallery acfArr={inlineArr}/>}
        </div>

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
      acf{
        inline_image_1{
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
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_2{
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_3{
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_4{
          localFile{
            id
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        slider_image_5{
          localFile{
            id
            childImageSharp{
              fluid{
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

