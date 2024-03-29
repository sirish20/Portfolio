"use client"
import React from "react";
import { MdWavingHand } from "react-icons/md";
const P1=()=>{
  return (
     <>
     <div className="sm:flex h-full ">
        <div className="Part1    pl-[16vw] py-[12vw] ">
             <div className="flex items-center justify-start"><MdWavingHand className="text-[6vw] sm:text-[4vw]"/><h1 className="text-[6vw] sm:text-[4vw] font-extrabold ml-[1vw] text-black  font-sans ">Hi,I'm Shubham</h1></div>
            <p className="text-xl  mt-[2vw] text-gray-700 "> An Engineering student with a love for Competitive Coding, Data Structures and Algorithms and Web Development. </p>
        </div>
        <div className="Part2  pr-[5vw] sm:py-[8vw] pl-[5vw] sm:pl-0">
            <div>
                <img src="shubham5.jpg" height={200} width={500} className="rounded-lg hover:shadow-lg "></img>
            </div>
        </div>
     </div>

     <div className="pl-[4vw] mt-[4vw] sm:mt-[0]  sm:pl-[16vw] text-lg font-semibold flex items-center sm:gap-[2vw] gap-[1vw] ">
            <p className="hidden sm:inline-block">Tech stack : </p> 
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6BaPUhJMAROwqU2rlBJwLYs2i0y6J5OSkA&usqp=CAU" height={50} width={50}></img>
                
            </div>
            <div >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" height={36} width={36}></img>
               
            </div>
            <div >
                <img src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?fit=587%2C330&ssl=1" height={70} width={70}></img>
               
            </div>
            <div >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height={40} width={40}></img>
                
            </div>
            <div >
                <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" height={40} width={40}></img>
                
            </div>
            <div >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" height={40} width={40}></img>
                
            </div>
            <div >
                <img src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue-thumbnail.png" height={40} width={40}></img>
                
            </div>
            <div >
                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png" height={35} width={35}></img>
                
            </div>
            <div >
                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" height={35} width={35}></img>
                
            </div>
    </div>
     </>
  )
}
export default P1;