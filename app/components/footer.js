"use client"
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Footer = ()=>{
    return(
        <>
        <div><hr className="h-10"></hr></div>
        <div className="text-3xl font-bold px-[15vw] mb-8">Connect with me</div>
    
        <div className="w-full h-[15vw]  px-[15vw] sm:flex sm:gap-[4vw] ">
    
           <Link href="mailto:shubhamsangale20032003@gmail.com?subject=Subject%20Text&body=Message%20Text" target="_blank" className="border-2 rounded-md p-2 w-[70vw] h-[30vw] sm:w-[22vw]  sm:h-[8vw] flex flex-col items-center mb-3 justify-center hover:bg-gray-200 ">
                <div className="text-4xl"><MdOutlineEmail/></div>
                <div>Email</div>
                <div className=" bg-gray-300 px-2 py-1 rounded-md mt-1">shubhamsangale20032003@gmail.com</div>
           </Link>

           <Link  href={" https://wa.me/<+91 83 2937 1200>"} target="_blank" className="border-2 rounded-md p-2 sm:w-[20vw] sm:h-[8vw] flex flex-col items-center justify-center hover:bg-gray-200  w-[70vw] h-[30vw] mb-3">
                <div className="text-4xl"><FaWhatsapp/></div>
                <div>Whatsapp</div>
                <div className="bg-gray-300 px-2 py-1 rounded-md mt-1">8329371200</div>
           </Link>
           <Link  href={"https://www.linkedin.com/in/shubham-sangale-a35a80259/"} target="_blank" className="border-2 rounded-md p-2 sm:w-[20vw] sm:h-[8vw] flex flex-col items-center justify-center hover:bg-gray-200  w-[70vw] h-[30vw] mb-10">
                <div className="text-4xl"><CiLinkedin/></div>
                <div>LinkedIn</div>
                <div className="bg-gray-300 px-2 py-1 rounded-md mt-1">Shubham Sangale</div>
           </Link>
        </div>
        
        </>
    )
}
export default Footer;