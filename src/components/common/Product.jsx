import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Container from './Container'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { TbGitCompare } from 'react-icons/tb'

const Product = ({ productName, productPrice, productImg,}) => {
  return (
    <Container>
      <div className="group rounded-2xl shadow-xl">
   
        <Image
          className={'m-auto w-fit object-contain'}
          src={productImg}
        />

        {/* Hover Section */}
        <div className="bg-[#F5F5F5] opacity-0 group-hover:opacity-100 transition duration-300">
          <h3 className="flex items-center justify-between p-2">
            Add to Wish List <FaHeart />
          </h3>

          <h3 className="flex items-center justify-between p-2">
            Compare <TbGitCompare />
          </h3>

          <h3 className="flex items-center justify-between p-2">
            Add To Cart <FaShoppingCart />
          </h3>
        </div>

        <div className="flex items-center justify-between px-[12px] pb-5 pt-5">
          <h4 className="text-gray-500 font-semibold text-xl">
            ${productPrice}
          </h4>

          <h3 className="text-center pt-2 font-bold text-[15px]">
            {productName}
          </h3>
         
          
        </div>

      </div>
    </Container>
  )
}

export default Product