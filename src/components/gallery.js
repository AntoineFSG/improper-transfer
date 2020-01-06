import React, {Component} from 'react'
import galleryStyles from '../css/gallery.module.scss'
import GalleryItem from "../components/galleryItem.js"


class Gallery extends Component {
    render() {
        let acfArr= this.props.acfArr
      return (
        <div className={galleryStyles.imagesContainer}>
          {acfArr.map((image) => (
              <div>
                {image &&<GalleryItem key={Math.floor(Math.random()*333)+'GALLERY'+acfArr.indexOf(image)} fluid={image.localFile.childImageSharp.fluid}/>}
              </div>
          ))}
        </div>
      )
    }
  }
export default Gallery
