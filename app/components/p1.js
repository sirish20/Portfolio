"use client"
import React from "react";
import { MdWavingHand } from "react-icons/md";


const P1=()=>{
  return (
    <>
    
  <div className="relative h-screen w-full overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 h-full w-full object-cover -z-10"
    >
      <source src="/video01.mp4" type="video/mp4" />
    </video>

    
    <div className="sm:flex h-full mb-10"> 
  <div className="Part1 pl-[16vw] py-[12vw] w-[70%]">
    <div className="flex items-center justify-start">
      <MdWavingHand className="text-[6vw] sm:text-[4vw] text-cyan-400 animate-pulse" /> 
      <h1 className="text-[6vw] sm:text-[4vw] font-extrabold ml-[1vw] text-cyan-400 font-[Orbitron] tracking-widest">
        Hi, I'm Shubham
      </h1>
    </div>
    <p className="text-xl mt-[2vw] text-gray-300 font-[Orbitron] tracking-wide hover:text-cyan-200 transition duration-300">
    A final year student have interest in solving DSA questions and competitive coding. Have knowledge of MERN stack and currently learning machine learning. Looking forward to connect with people from whom I can learn new things and grow in life.
    </p>
  </div>
  
  <div className="Part2 pr-[5vw] sm:py-[8vw] pl-[5vw] sm:pl-0">
    <div>
      <img
        src="shubham5.jpg"
        height={200}
        width={500}
        className="rounded-lg hover:shadow-cyan-800/50 transition-all duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>

</div>

    <div className="pl-[4vw] pt-10 sm:mt-[0] sm:pl-[16vw] text-lg font-semibold flex items-center sm:gap-[2vw] gap-[1vw] bg-gray-800">
      <p className="hidden sm:inline-block text-gray-200">TECH STACK :</p>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
          height={50}
          width={50}
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          height={36}
          width={36}
        />
      </div>
      <div>
        <img
          src="https://i0.wp.com/blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png?fit=587%2C330&ssl=1"
          height={70}
          width={70}
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          height={40}
          width={40}
        />
      </div>
      <div>
        <img
          src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
          height={40}
          width={40}
        />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
          height={40}
          width={40}
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
          height={35}
          width={35}
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
          height={35}
          width={35}
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
          height={35}
          width={35}
        />
      </div>
      <div>
        <img
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png"
          height={35}
          width={35}
        />
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
          height={40}
          width={40}
        />
      </div>
      
    </div>
   
  
</>


  
  )
}
export default P1;