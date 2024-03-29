"use client"
import Link from 'next/link'
import React from 'react'
import { RiHome4Line } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <div className='py-[2vw] w-full flex items-center sm:py-[1vw] justify-between px-[2vw] font-Montserrat'>
          <div className='text-xl font-semibold text-gray-500 flex items-center'><img src="favicon.ico" width={30} height={30} className='text-xs'></img><span className='font-bold ml-2'>Shubh</span>.Dev</div>
          <div className='flex items-center'>
          <Link href="/" className="text-xl mr-[2vw] ml-[2vw] ">
                <RiHome4Line className="inline sm:hidden text-gray-500"/>
                <p className="hidden sm:inline text-gray-400 hover:text-gray-600">Home</p>
          </Link>
          <Link href={"/About"} className="text-xl mr-[2vw] ml-[2vw]">
                <IoInformationCircleOutline className="inline sm:hidden text-gray-600"/>
                <p className="hidden sm:inline text-gray-400 hover:text-gray-500">About Me</p>
          </Link>
          <Link href="https://www.linkedin.com/in/shubham-sangale-a35a80259/"  target="_blank"  className="text-xl mr-[2vw] ml-[2vw]">
                <CiLinkedin className="inline sm:hidden text-gray-600"/>
                <p className="hidden sm:inline text-gray-400 hover:text-gray-500">LinkedIn</p>
          </Link>
          <Link href="https://drive.google.com/file/d/16gCWhS_tO52oHbKNDIP9LoT3OH-l-wcx/view?usp=sharing"  target="_blank" className="text-xl mr-[2vw] ml-[2vw] ">
                <IoCloudDownloadOutline className="inline sm:hidden text-gray-500"/>
                <p className="hidden sm:inline text-gray-400 hover:text-gray-600">Resume</p>
          </Link>
          </div>
    </div>
    </>
  )
}

export default Navbar;