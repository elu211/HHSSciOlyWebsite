import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import sphere from "@/components/images/100.png";
import Navbar from '@/components/ui/navbar3'
import React from "react";
// import tinos from '@/components/ui/fonts'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
        <div className="flex w-full justify-center items-center">
            <Navbar />
        </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Analytics />
      <div className="relative w-full overflow-clip items-center rounded-xl" style={{height:"600px"}}>
        <Image 
            src= {sphere}
            width="0"
            height="0"
            className="object-none z-0 object-center w-full h-auto rounded-xl"
            priority alt={""}
        />
        <h1 className="absolute top-0 bottom-0 w-50 h-fit text-7xl ml-20 mt-auto mb-auto z-100 text-white text-left" >Welcome to <br/>Homestead <br/>Science Olympiad!</h1  >
      </div>
      
      

      <div className="w-50 object-center m-auto flex items-center flex-col sm:flex-row pt-20" >
        <p  className="top-20 bottom-0 w-full h-fit text-3xl z-10 text-emerald-500 text-left  font-semibold" style={{padding: '5px 200px'}}>
        Homestead Science Olympiad is a school club dedicated to promoting scientific knowledge and <br/><br/>
        skills among students. Our goal is to foster a love for science through fun and engaging activities.<br/><br/>
        At Homestead Science Olympiad, we believe in the power of hands-on learning and strive to create <br/><br/>
        an environment where young minds can explore, experiment, and excel.
        </p>
        <p>

        </p>
      </div>
      <div style={{height:'1000px'}}></div>
      </main>
      <footer className="w-full row-start-3 flex gap-20 p-20 items-center justify-center">
        <p className="text-left p-20">©2024 Elliot Lu, Fisher Zheng, and Aidan Tam</p> 
        <p className="text-right p-20">Made with Next.js 🧡 </p>
      </footer>
    </div>
  );
}
