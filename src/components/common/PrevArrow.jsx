import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Slider from "react-slick";

const PrevArrow = ({onClick}) => {
    
  return (
   <div onClick={onClick} className=' absolute z-10 top-[50%]  translate-y-[-50%] left-0 text-3xl text-red-500'>
    <FaArrowAltCircleLeft />
   </div>
  )
}

export default PrevArrow