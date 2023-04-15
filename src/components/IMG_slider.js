import React from 'react'
import { useState } from 'react'

const IMG_slider =({slides})=> {
const [currentIndex,setCurrentIndex] = useState(0)

const sliderStyles = {
    height:'100%',
    position:'relative'
}

const slideStyles = {
    width : '100%',
    height: '100%',
    borderRadius:'10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
}

const leftArrowStyle ={
    position: 'absolute',
    top: '50%',
    transform:'translate(0, -50%)',
    left:'32px',
    fontSize:'45px',
    color: '#fff',
    zIndex:1,
    cursor:'pointer'
}

const rightArrowStyle ={
    position: 'absolute',
    top: '50%',
    transform:'translate(0, -50%)',
    right:'32px',
    fontSize:'45px',
    color: '#fff',
    zIndex:1,
    cursor:'pointer'
}
    
const goToPrevious = () =>{
    const isFirstSlide = currentIndex ===0;
    const newIndex = isFirstSlide ? slides.length -1 :currentIndex -1;
    setCurrentIndex(newIndex)
};

const goToNext = () =>{
    const isLastSlide = currentIndex ===slides.length -1;
    const newIndex = isLastSlide ? 0 :currentIndex + 1; 
    setCurrentIndex(newIndex)
}

  return (
    <div style={sliderStyles}>
        <div style ={leftArrowStyle} onClick={goToPrevious}>◀</div>
        <div style ={rightArrowStyle} onClick={goToNext}>▶</div>
        <div style={slideStyles} >
         
        </div>
    </div>
    
  )
}

export default IMG_slider