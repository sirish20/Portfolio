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
      <div className='py-[2vw] w-full flex items-center sm:py-[1vw] justify-between px-[2vw] bg-gray-900'>
        <div className='text-xl font-semibold text-gray-400 flex items-center'>
          <img src="favicon.ico" width={30} height={30} className='text-xs' />
          <span className='ml-2 font-mono  text-cyan-400 tracking-widest'>
            Shubh<span className="text-gray-300">.Dev</span>
          </span>
        </div>
        
        <div className='flex items-center font-[Orbitron]'>
          <Link href="/" className="text-xl mr-[2vw] ml-[2vw] group relative">
            <RiHome4Line className="inline sm:hidden text-cyan-400 hover:text-cyan-200 transition duration-300" />
            <p className="hidden sm:inline font-mono text-gray-300 group-hover:text-cyan-400 transition duration-300">
              Home
            </p>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="/About" className="text-xl mr-[2vw] ml-[2vw] group relative">
            <IoInformationCircleOutline className="inline sm:hidden text-cyan-400 hover:text-cyan-200 transition duration-300" />
            <p className="hidden sm:inline font-mono text-gray-300 group-hover:text-cyan-400 transition duration-300">
              About Me
            </p>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="https://www.linkedin.com/in/shubham-sangale-a35a80259/" target="_blank" className="text-xl mr-[2vw] ml-[2vw] group relative">
            <CiLinkedin className="inline sm:hidden text-cyan-400 hover:text-cyan-200 transition duration-300" />
            <p className="hidden sm:inline font-mono text-gray-300 group-hover:text-cyan-400 transition duration-300">
              LinkedIn
            </p>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link href="https://drive.google.com/file/d/16gCWhS_tO52oHbKNDIP9LoT3OH-l-wcx/view?usp=sharing" target="_blank" className="text-xl mr-[2vw] ml-[2vw] group relative">
            <IoCloudDownloadOutline className="inline sm:hidden text-cyan-400 hover:text-cyan-200 transition duration-300" />
            <p className="hidden sm:inline font-mono text-gray-300 group-hover:text-cyan-400 transition duration-300">
              Resume
            </p>
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </>
    
  )
}

export default Navbar;