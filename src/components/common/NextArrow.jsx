import React from 'react';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';

const NextArrow = ({onClick}) => {
  return (
    <div onClick={onClick} className=" absolute top-[50%] translate-y-[-50%] right-0 text-3xl text-red-500">
      
<FaArrowAltCircleRight />    </div>
  );
};

export default NextArrow;