import React, {Component} from 'react'
import Img from 'gatsby-image'
import galleryStyles from '../css/gallery.module.scss'


class Gallery extends Component {
    render() {
        let acfArr= this.props.acfArr
      return (
        <div className={galleryStyles.imagesContainer}>
          {acfArr.map((image) => (
               <div style={{width:'100%', height:'100%'}}>{image && <Img className={galleryStyles.inlineImage} key={Math.floor(Math.random()*1233)} fluid={image.localFile.childImageSharp.fluid}/>}</div>
               
          ))}
        </div>
      )
    }
  }
export default Gallery
