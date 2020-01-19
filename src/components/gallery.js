import React, {Component} from 'react'
import galleryStyles from '../css/gallery.module.scss'
import GalleryItem from "../components/galleryItem.js"


class Gallery extends Component {
    render() {
        let acfArr= this.props.acfArr
      return (
        <div className={galleryStyles.imagesContainer}>
        <h1 className={galleryStyles.galleryH1}>GALLERY</h1>
          {acfArr.map((image) => (
              <div>
                {image &&<GalleryItem title={image.title} alt={image.alt_text} key={image.localFile.id} fluid={image.localFile.childImageSharp.fluid}/>}
              </div>
          ))}
        </div>
      )
    }
  }
export default Gallery
