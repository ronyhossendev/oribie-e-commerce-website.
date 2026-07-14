import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/image";
import logo from "/src/assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaBars, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Header = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <Container>
          <Flex className={"justify-between py-5"}>
            <div className="">
              <div className="">
                <Link to={"/"}>
                <Image src={logo} alt={"logo"} />
                </Link>
              </div>
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-5">
                <li className="font-openSans  text-[14px] text-[#767676] font-bold text-[14px] hover:text-black hover:font-bold duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-openSans text-[14px] text-[#767676] font-normal hover:text-black hover:font-bold duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="font-openSans text-[14px] text-[#767676] font-normal hover:text-black hover:font-bold duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="font-openSans text-[14px] text-[#767676] font-normal hover:text-black hover:font-bold duration-300">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className={"py-8 border-y border-2 border-[#979797] bg-[#F5F5F3]"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex gap-x-3 items-center">
              <FaBars />
              Shop by Category
            </div>
            <div className="relative">
              <input
                className="w-120 py-2 px-3 bg-white rounded-md focus:outline-none"
                placeholder="Search Products"
              />
              <CiSearch  className=" text-2xl absolute right-5 top-1/2 -translate-y-1/2"/>

            </div>
            <div className="flex items-center gap-x-4">
             <div className="flex items-center">
               <FaUser />
              <FaCaretDown />
             </div>
             <FaShoppingCart 
             className="cursor-pointer"
  onClick={() => navigate("/cart")}
             />



            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
