"use client"
import React from "react";
import { IoLinkSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Project=()=>{
  return (
    <>
     <div className=" sm:flex sm:mb-[5vw] mb-20 ">
        <div className="p1  sm:w-[50%]  sm:pl-[3vw] py-[3vw] pr-[1vw]"> 
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">IMDb Clone</h1>
             <div className="flex items-center justify-start gap-[1vw] mb-[1vw] text-sm">
                 <span className="bg-indigo-100 px-3 py-1 rounded-md text-indigo-600">React</span>
                 <span className="bg-cyan-100 px-3 py-1 rounded-md  text-cyan-600">Next.js</span>
                 <span className="bg-lime-100 px-3 py-1 rounded-md  text-lime-600">Tailwind</span>
             </div>
             <p className="text-lg sm:mb-[1vw] mb-4 text-gray-600 font-mono">
             Built a sleek and responsive IMDb clone using Next.js, React.js, and Tailwind CSS, seamlessly integrating API functionality. This project showcases my proficiency in front-end development, emphasizing a clean UI and seamless user experience while leveraging APIs for real-time data retrieval.</p>
             <div className="flex items-center justify-between  text-sm mb-6 sm:mb-0">
               <Link href="https://im-db-clone-wf5l.vercel.app/" target="_blank" className="bg-gray-700 px-2 py-1 rounded-md text-white flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/IMDb-clone" target="_blank" className="bg-gray-700 px-2 py-1 rounded-md text-white flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
             </div>
        </div>
        <div className="p2 relative">
             <div className="w-[300px] h-[250px]   absolute z-20 bg-gray-100 translate-x-[18vw] translate-y-[6vw] transfrom -rotate-2 shadow-lg rounded-xl">
                <img src="Screenshot (88).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Home page
                   <p className="text-xs pt-1 text-gray-500">"Globally most trusted site for films and series information, reviews and ratings."</p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   absolute z-10 bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom -rotate-6 shadow-lg rounded-xl">
              <img src="Screenshot (92).png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Recommended for you
                   <p className="text-xs pt-1 text-gray-500">"Alone we can do so little; together we can do so much." </p>
                 </div>
              </div>

             <div className="w-[300px] h-[250px]   bg-gray-100 translate-x-[4vw] translate-y-[2vw] transfrom -rotate-12 shadow-lg rounded-xl"><img src="Screenshot (90).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Top Rated 
                   <p className="text-xs pt-1 text-gray-500">"Must watch these all movies once in life time."</p>
                 </div>
              </div>
        </div>
     </div>
     <div className="w-full  outline-dashed">

     </div>
     

     <div className=" sm:flex mb-[5vw] mt-40 sm:mt-40">
        
        <div className="p2 w-[50%] relative mb-8 sm:mb-0">
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[4vw] translate-y-[6vw] transfrom rotate-2 shadow-lg rounded-xl absolute z-20">
             <img src="Screenshot (79).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl">
                  </img>
                <div className="px-5 font-semibold text-xl text-gray-700">Home page
                   <p className="text-xs pt-1 text-gray-500">"Unlock the Magic of Every Occasion with Event Crackers."</p>
              </div>
             </div>

             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[10vw] translate-y-[4vw] transfrom rotate-6 shadow-lg rounded-xl absolute z-10 ">
             <img src="Screenshot (87).png" className="w-full h-[70%]  object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Events We Arranged
                   <p className="text-xs pt-1 text-gray-500">"Alone we can do so little; together we can do so much." </p>
                 </div>
             </div>
             
             <div className="w-[300px] h-[250px]  bg-gray-100 translate-x-[18vw] translate-y-[2vw] transfrom rotate-12 shadow-lg rounded-xl z-5 ">
             <img src="Screenshot (81).png" className="w-full h-[70%] object-cover overflow-hidden  rounded-t-xl"></img>
             <div className="px-5 font-semibold text-xl text-gray-700">Our Team
                   <p className="text-xs pt-1 text-gray-500">"Event Crackers-Eveything is here all the time. "</p>
                 </div>
             </div>
        </div>
        <div className="p1  sm:w-[50%]  pl-[3vw] py-[3vw] pr-[1vw]">
             <h1 className="text-3xl font-bold sm:mb-[2vw] mb-5">Event Crackers</h1>
             <div className="flex items-center justify-start gap-[1vw] sm:mb-[1vw] text-sm mb-4">
                 <span className="bg-red-100 px-2 py-1 rounded-md text-red-600">HTML</span>
                 <span className="bg-green-100 px-2 py-1 rounded-md  text-green-600">CSS</span>
                 <span className="bg-yellow-100 px-2 py-1 rounded-md  text-yellow-600">JavaScript</span>
             </div>
             <p className="text-lg sm:mb-[1vw] mb-3 text-gray-600 font-mono">
Developed a dynamic event management web app for a company specializing in weddings, birthdays, and concerts. Utilized HTML, CSS, and JavaScript to create an intuitive interface for event planning and organization. The project showcases my skills in front-end development and <span className="font-semibold">animations.</span></p>
             <div className="flex items-center justify-between  text-sm">
             <Link href="https://event-crackers.vercel.app/" target="_blank" className="bg-gray-700 px-2 py-1 rounded-md text-white flex items-center justify-center gap-1"><p>View Live</p> <IoLinkSharp className="text-lg"/></Link>
               <Link href="https://github.com/sirish20/Event-Crackers" target="_blank"  className="bg-gray-700 px-2 py-1 rounded-md text-white flex items-center justify-center gap-1"><p>Source Code</p> <FaGithub className="text-lg"/></Link>
             </div>
        </div>
     </div>
     
    </>
  )
}
export default Project;