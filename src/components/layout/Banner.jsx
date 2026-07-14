import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from '../common/Image';
import banner from '/src/assets/banner.png';
import NextArrow from '../common/NextArrow';
import PrevArrow from '../common/PrevArrow';

const Banner = () => {
   var settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,

  };
  return (
    <div>
        <Slider {...settings}>
      <div className="w-full">
        <Image src={banner} className={'w-full'}/>
      </div>
      <div className="w-full">
        <Image src={banner} className={'w-full'}/>
      </div>
      <div className="w-full">
        <Image src={banner} className={'w-full'}/>
      </div>
    </Slider>
    </div>
  )
}

export default Banner