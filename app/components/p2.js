"use client"
import Link from "next/link";
import React from "react";
const P2=()=>{
  return (
     <div className="sm:flex p-[10vw] gap-24 px-[15vw] ">
        <div><hr className="h-2 "></hr></div>
        <Link href={"https://www.codechef.com/users/sirish_kumar"} target="_blank" className="Box3 p-3  hover:shadow-xl mt-5 sm:mt-0 rounded-md border-2">
            <div className="p1">
                <img src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg" height={300} width={300}></img>
            </div>
            <div className="p2 flex flex-col gap-2">
                <h1 className="w-full mx-auto text-xl font-bold px-[33%] mb-2">Codechef</h1>
                <p className="flex items-center gap-3 px-2"><div className="bg-orange-800 rounded-full w-2 h-2"></div>3 stars.(Rating: 1654)</p>
                <p className="flex items-center gap-3 px-2"><div className="bg-orange-800 rounded-full w-2 h-2"></div>Solved 300+ questions.</p>
            </div>
        </Link>

        

        <Link href={"https://leetcode.com/sirish_kumar/"} target="_blank" className="Box2 p-3  hover:shadow-xl mt-5 sm:mt-0 rounded-md border-2">
            <div className="p1">
                <img src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" height={300} width={300}></img>
            </div>
            <div className="p2 flex flex-col gap-2">
                <h1 className="w-full mx-auto text-xl font-bold px-[33%] mb-2">Leetcode</h1>
                <p className="flex items-center gap-3 px-2"><div className="bg-yellow-500 rounded-full w-2 h-2"></div>Rating:1620 (Top 19%) </p>
                <p className="flex items-center gap-3 px-2"><div className="bg-yellow-500 rounded-full w-2 h-2"></div>Solved 100+ questions.</p>
            </div>
        </Link>

        <Link href={"https://auth.geeksforgeeks.org/user/shubhamsangale211"} target="_blank" className="Box1 p-3  hover:shadow-xl rounded-md border-2">
            <div className="p1">
                <img src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64" height={300} width={300}></img>
            </div>
            <div className="p2 flex flex-col gap-2">
                <h1 className="w-full mx-auto text-xl font-bold px-[25%] mb-2">GeeksForGeeks</h1>
                <p className="flex items-center gap-3 px-2"><div className="bg-green-500 rounded-full w-2 h-2"></div>Completed DSA cource.</p>
                <p className="flex items-center gap-3 px-2"><div className="bg-green-500 rounded-full w-2 h-2"></div>Solved 100+ questions.</p>

            </div>
        </Link>
     </div>
  )
}
export default P2;