import React, {useState} from 'react';
import Img from 'gatsby-image';
import slideShowStyles from '../css/slideShow.module.scss'

const SlideShow = (props)=>{
  const [index, setIndex] = useState(0)
  const slides= props.slides;
  //Minus 1 for array offset from 0
  const length = slides.length - 1
  const handleNext = () =>{
    if(slides[index+1]!=null){
    index === length ? setIndex(0) : setIndex(index + 1)}
    else{return}
  }
  const handlePrevious = () =>{if(slides[index-1]!=null){
    index === 0 ? setIndex(length) : setIndex(index - 1)}
    else{return}}
  const node = slides[index]
  return (
    <div className={slideShowStyles.slideWrapper}>
         <div className={slideShowStyles.imageContainer}>
            <Img className={slideShowStyles.slideImage} 
            style={{ maxHeight: "550px" }}
            imgStyle={{ objectFit: "contain" }}
            key={node.localFile.id} fluid={node.localFile.childImageSharp.fluid} 
            />
          </div>
        <div className={slideShowStyles.buttonsContainer}>
          <button className={slideShowStyles.previous} onClick={() => handlePrevious()}><span>&#60;</span></button> 
          <button className={slideShowStyles.next} onClick={() => handleNext()}><span>&#62;</span></button>
        </div>
    </div>
  )
}    
export default SlideShow;