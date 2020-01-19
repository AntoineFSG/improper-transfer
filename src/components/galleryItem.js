import React, { useState } from "react"
import Img from 'gatsby-image'
import Modal from "../components/modal"
import galleryItemStyles from '../css/galleryItem.module.scss'


const GalleryItem=(props)=>{
    const fluid = props.fluid;
    const alt = props.alt;
    const title= props.title;
    const [show, setShow] = useState(false);
    const showModal = e => {
        setShow(!show);
      };
    
    return (
        <div className={galleryItemStyles.imgContainer} onClick={e => {
            showModal(e);
       }}>
            <p className={galleryItemStyles.title}>{title}</p>
            <Img fluid={fluid} alt={alt}/>
            <Modal show={show}>
                <Img fluid={fluid}/>
            </Modal>
        </div>
    )
    
}
export default GalleryItem;