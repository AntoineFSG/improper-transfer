import React, {useState} from 'react';
import Img from 'gatsby-image';
import slideShowStyles from '../css/slideShow.module.scss'

const SlideShow = (props)=>{
  const [index, setIndex] = useState(0)
  const slides= props.slides;
  //Minus 1 for array offset from 0
  const length = slides.length - 1
  console.log('Sliiiiiiide'+slides[0])
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const node = slides[index]
  return (
    <div className={slideShowStyles.slideShow}>
        <button className={slideShowStyles.previous} onClick={() => handlePrevious()}>&#60;</button>
        <div className={slideShowStyles.slidesContainer} style={{height: `550px`, width:'650px'}}>
            <Img className={slideShowStyles.slideImage} 
            key={node.localFile.id} fluid={node.localFile.childImageSharp.fluid} 
            style={{
            height: '100%'
            }}
            />
        </div>
        <button className={slideShowStyles.next} onClick={() => handleNext()}>&#62;</button>
      
    </div>
  )
}
export default SlideShow;