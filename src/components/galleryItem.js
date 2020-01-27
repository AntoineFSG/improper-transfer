import React, { useState } from "react"
import Img from 'gatsby-image'
import Modal from "../components/modal"
import galleryItemStyles from '../css/galleryItem.module.scss'


const GalleryItem=(props)=>{
    const fluid = props.fluid;
    const alt = props.alt;
    const title= props.title;
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(!show);
      };
    const handleClick=(e)=>{
        e.preventDefault();
        showModal();
    }
    const handleKeyPress=(e)=>{
        if (e.key === "Tab"){return}else{showModal();}
    }
    return (
        <div tabindex="0" role="button" className={galleryItemStyles.imgContainer} onClick={handleClick} onKeyDown={handleKeyPress}>
            <p className={galleryItemStyles.title}>{title}</p>
            <Img fluid={fluid} alt={alt}/>
            <Modal show={show} handleClick={handleClick}>
                <Img fluid={fluid} alt={alt}/>
            </Modal>
        </div>
    )
    
}
export default GalleryItem;