"use client"
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Footer = ()=>{
    return(
     <>
     <div className="relative bg-cover bg-center py-12 mt-0" style={{ backgroundImage: "url('/bgimg.jpg')" }}>
       <div className="absolute inset-0 bg-black opacity-50"></div>
       
       <div className="container mx-auto text-center text-white relative z-10">
         <div className="text-3xl font-bold mb-8">Connect with me</div>
   
         <div className="w-full h-[15vw] px-[15vw] sm:flex sm:gap-[4vw] flex-wrap justify-center">
           <Link 
             href="mailto:shubhamsangale20032003@gmail.com?subject=Subject%20Text&body=Message%20Text" 
             target="_blank" 
             className="border-2 rounded-md p-4 w-[70vw] h-[30vw] sm:w-[22vw] sm:h-[8vw] flex flex-col items-center mb-3 justify-center hover:bg-red-500 transition duration-300"
           >
             <div className="text-4xl">
               <MdOutlineEmail />
             </div>
             <div className="text-lg font-semibold">Email</div>
             <div className="bg-red-500 px-2 py-1 rounded-md mt-1">{'shubhamsangale20032003@gmail.com'}</div>
           </Link>
   
           
   
           <Link 
             href={"https://www.linkedin.com/in/shubham-sangale-a35a80259/"} 
             target="_blank" 
             className="border-2 rounded-md p-4 sm:w-[20vw] sm:h-[8vw] flex flex-col items-center justify-center hover:bg-blue-900 w-[70vw] h-[30vw] mb-10 transition duration-300"
           >
             <div className="text-4xl">
               <CiLinkedin />
             </div>
             <div className="text-lg font-semibold">LinkedIn</div>
             <div className="bg-blue-900 px-2 py-1 rounded-md mt-1">Shubham Sangale</div>
           </Link>
         </div>
       </div>
     </div>
   </>
   
    )
}
export default Footer;