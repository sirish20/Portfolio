"use client"
import React from "react";
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";

const Project=()=>{
  return (
    <>
     

     <div className=" sm:flex mb-[5vw] mt-40 sm:mt-40">
        
        <div className="p2 w-[50%] relative mb-8 sm:mb-0">
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[4vw] translate-y-[6vw] transfrom rotate-2 shadow-lg rounded-xl absolute z-20">
             <img src="tn04.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Home page
                   <p className="text-xs pt-1 text-gray-500">View all properties and can filter them.</p>
              </div>
             </div>

             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom rotate-6 shadow-lg rounded-xl absolute z-10 ">
             <img src="tn05.png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Events We Arranged
                   <p className="text-xs pt-1 text-gray-500">Alone we can do so little; together we can do so much.</p>
                 </div>
             </div>
             
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[18vw] translate-y-[2vw] transfrom rotate-12 shadow-lg rounded-xl z-5 ">
             <img src="tn06.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Our Team
                   <p className="text-xs pt-1 text-gray-500">authentications and s-Eveything is here all the time. </p>
                 </div>
             </div>
        </div>
        <div className="p1  sm:w-[50%]  pl-[3vw] py-[3vw] pr-[1vw]">
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">TravelNest</h1>
             <div className="flex items-center justify-start gap-[1vw] sm:mb-[1vw] text-sm mb-4">
                 <span className="bg-red-200 px-2 py-1 rounded-md text-red-700">HTML</span>
                 <span className="bg-green-200 px-2 py-1 rounded-md  text-green-700">CSS</span>
                 <span className="bg-yellow-200 px-2 py-1 rounded-md  text-yellow-700">JavaScript</span>
                 <span className="bg-neutral-300 px-2 py-1 rounded-md text-neutral-800">Node.js</span>
                 <span className="bg-blue-200 px-2 py-1 rounded-md  text-blue-700">Express.js</span>
                 <span className="bg-amber-200 px-2 py-1 rounded-md  text-amber-700">MongoDB</span>
             </div>
             <p className="text-lg sm:mb-[1vw] mb-3 text-gray-300 font-mono">
Fullstack application where user can list, view, filter, rate, comment on properties.Have proper authentication and authorisation, also user can see location of property on map.</p>
             <div className="flex items-center justify-between  text-sm">
             <Link href="https://final-project-1-qko4.onrender.com/" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/TravelNest" target="_blank"  className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
             </div>
        </div>
     </div>

     <div className="w-full  outline-dashed"></div>

     <div className=" sm:flex sm:mb-[5vw] mb-20 mt-40">
        <div className="p1  sm:w-[50%]  sm:pl-[3vw] py-[3vw] pr-[1vw]"> 
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">Focus</h1>
             <div className="flex items-center justify-start gap-[1vw] mb-[1vw] text-sm">
                 <span className="bg-amber-200 px-3 py-1 rounded-md text-amber-700">Browser Extension</span>
                 <span className="bg-red-200 px-2 py-1 rounded-md text-red-700">HTML</span>
                 <span className="bg-green-200 px-2 py-1 rounded-md  text-green-700">CSS</span>
                 <span className="bg-blue-200 px-2 py-1 rounded-md  text-blue-700">JavaScript</span>
             </div>
             <p className="text-lg sm:mb-[1vw] mb-4 text-gray-300 font-mono">
             <p>1. Avoid distractions on YouTube.</p> 
             <p>2. Pauses player when we switch tabs.</p>
             <p>3. Simultaneously use YouTube and any other application.</p> </p>
             <div className="flex items-center justify-between  text-sm mb-6 sm:mb-0">
               <Link href="https://chromewebstore.google.com/detail/focus/eolhgjifbhhfifoneflijhlmmbbkdhbp" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/Focus" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
               <Link href="https://www.youtube.com/watch?v=d1Wd_W0QUx4&t=1s" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>Video</p> <IoLogoYoutube className="text-lg"/></Link>
             </div>
        </div>
        <div className="p2 relative">
             <div className="w-[300px] h-[250px]   absolute z-20 bg-gray-100 translate-x-[18vw] translate-y-[6vw] transfrom -rotate-2 shadow-lg rounded-xl">
                <img src="focus01.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Function 01
                   <p className="text-xs pt-1 text-gray-500">Code on VScode  while watching tutorial on YouTube.</p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   absolute z-10 bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom -rotate-6 shadow-lg rounded-xl">
              <img src="focus02.png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Function 02
                   <p className="text-xs pt-1 text-gray-500">5 stars reated on; together we can do so much. </p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   bg-gray-100 translate-x-[4vw] translate-y-[2vw] transfrom -rotate-12 shadow-lg rounded-xl"><img src="focus01.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Function 03 
                   <p className="text-xs pt-1 text-gray-500">hide all the vies once in life time.</p>
                 </div>
              </div>
        </div>
     </div>

     <div className="w-full  outline-dashed"></div>
     

     <div className=" sm:flex mt-[0vh] sm:mt-40 mb-[5vh]">
        
        <div className="p2 w-[50%] relative mb-8 sm:mb-0">
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[4vw] translate-y-[6vw] transfrom rotate-2 shadow-lg rounded-xl absolute z-20">
             <img src="obys01.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Home page
                   <p className="text-xs pt-1 text-gray-500">Its not only a website its an experience...</p>
              </div>
             </div>

             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom rotate-6 shadow-lg rounded-xl absolute z-10 ">
             <img src="obys02.png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Events We Arranged
                   <p className="text-xs pt-1 text-gray-500">Alone we can do so little; together we can do so much.</p>
                 </div>
             </div>
             
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[18vw] translate-y-[2vw] transfrom rotate-12 shadow-lg rounded-xl z-5 ">
             <img src="obys03.png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Our Team
                   <p className="text-xs pt-1 text-gray-500">Event Crackers-Eveything is here all the time. </p>
                 </div>
             </div>
        </div>
        <div className="p1  sm:w-[50%]  pl-[3vw] py-[3vw] pr-[1vw]">
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">Obys</h1>
             <div className="flex items-center justify-start gap-[1vw] sm:mb-[1vw] text-sm mb-4">
                 <span className="bg-red-200 px-2 py-1 rounded-md text-red-700">HTML</span>
                 <span className="bg-green-200 px-2 py-1 rounded-md  text-green-700">CSS</span>
                 <span className="bg-yellow-200 px-2 py-1 rounded-md  text-yellow-700">JavaScript</span>
                 <span className="bg-neutral-300 px-2 py-1 rounded-md text-neutral-800">GSAP</span>
             </div>
             <p className="text-lg sm:mb-[1vw] text-gray-300 font-mono">
               Animated Webpage for reknown design company Obys</p>
             <div className="flex items-center justify-between  text-sm mt-[15vh]">
             <Link href="https://obys-gilt.vercel.app/" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/OBYS" target="_blank"  className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
             </div>
        </div>
     </div>

     <div className="w-full  outline-dashed"></div>

     <div className=" sm:flex  mt-[10vh] pb-10">
        <div className="p1  sm:w-[50%]  sm:pl-[3vw] py-[3vw] pr-[1vw]"> 
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">IMDb Clone</h1>
             <div className="flex items-center justify-start gap-[1vw] mb-[1vw] text-sm">
                 <span className="bg-indigo-200 px-3 py-1 rounded-md text-indigo-700">React</span>
                 <span className="bg-cyan-200 px-3 py-1 rounded-md  text-cyan-700">Next.js</span>
                 <span className="bg-lime-200 px-3 py-1 rounded-md  text-lime-700">Tailwind</span>
             </div>
             <p className="text-lg sm:mb-[1vw] mb-4 text-gray-300 font-mono">
             Using online API showcase the movie list and each data in details.</p>
             <div className="flex items-center justify-between  text-sm mb-6 sm:mb-0 mt-[13vh]">
               <Link href="https://im-db-clone-wf5l.vercel.app/" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/IMDb-clone" target="_blank" className="bg-gray-200 px-2 py-1 rounded-md text-black flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
             </div>
        </div>
        <div className="p2 relative">
             <div className="w-[300px] h-[250px]   absolute z-20 bg-gray-100 translate-x-[18vw] translate-y-[6vw] transfrom -rotate-2 shadow-lg rounded-xl">
                <img src="Screenshot (88).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Home page
                   <p className="text-xs pt-1 text-gray-500">Globally most trusted site for films and series information, reviews and ratings.</p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   absolute z-10 bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom -rotate-6 shadow-lg rounded-xl">
              <img src="Screenshot (92).png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Recommended for you
                   <p className="text-xs pt-1 text-gray-500">Alone we can do so little; together we can do so much. </p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   bg-gray-100 translate-x-[4vw] translate-y-[2vw] transfrom -rotate-12 shadow-lg rounded-xl"><img src="Screenshot (90).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Top Rated 
                   <p className="text-xs pt-1 text-gray-500">Must watch these all movies once in life time.</p>
                 </div>
              </div>
        </div>
     </div>
    </>
  )
}
export default Project;