"use client"
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import sphere from "@/components/images/100.png";
import pic from "@/components/images/homepage.png";
import discord from '@/components/images/discord.png';
import instagram from '@/components/images/instagram.png';
import linktree from '@/components/images/linktree.png';
import Navbar from '@/components/ui/navbar3'
import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
// import tinos from '@/components/ui/fonts'

export default function Home() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = () => {
      const mailto = `mailto:scienceolympiad.hhs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-8 pb-20 gap-12  font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full justify-center items-center">
            <Navbar />
        </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Analytics />
      <div className="relative overflow-clip w-screen flex items-center rounded-xl" style={{height:"500px"}}>
        <div className="w-full absolute inset-0 w-full h-full bg-green-800 rounded-xl z-0"></div>
        <div className="relative z-10 w-full flex justify-center">
          <Image 
              src= {pic}
              width="0"
              height="0"
              className="object-cover h-full rounded-xl"
              priority alt={""}
          />
        </div>
        <h1 className="absolute top-0 bottom-0 w-50 h-fit text-7xl ml-20 mt-auto mb-auto z-20 text-white text-left" >Welcome to <br/>Homestead <br/>Science Olympiad!</h1  >
      </div>
      
      

      <div className="object-center m-auto flex flex-col pb-10" style={{width:'1000px'}}>
        <p  className="w-full h-fit text-5xl z-10 text-emerald-500 text-center font-bold pt-5">
          About Us
        </p>
        <p  className="top-20 bottom-0 w-full h-fit text-2xl z-10 text-left leading-loose pt-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Homestead Science Olympiad is a school club dedicated to promoting scientific knowledge and
        skills among students. Our goal is to foster a love for science through fun and engaging activities.
        At Homestead Science Olympiad, we believe in the power of hands-on learning and strive to create
        an environment where young minds can explore, experiment, and excel.
        </p>
        <div className="flex justify-end pt-2">
          <a href="/about" rel="noopener noreferrer">
          <button className="flex h-[60px] w-[175px] items-center justify-center gap-1 rounded-md text-2xl font-medium text-white transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 bg-green-500 hover:bg-green-400">Learn More</button>
          </a>
        </div>

        <p  className="w-full h-fit text-5xl z-10 text-emerald-500 text-center font-bold pt-10">
          Socials
        </p>
        <div className="w-full flex flex-row justify-between pt-8">
          <a href="https://discord.gg/r85hA9RTy3" target="_blank" rel="noopener noreferrer">
          <button className="flex flex-col h-[400px] w-[300px] items-center justify-center gap-1 rounded-md text-2xl font-medium transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 border border-black">
            <Image 
              src={discord}
              width="200"
              height="200"
              className=""
              priority alt={""}
            />
            <p className="text-4xl pt-5">Discord</p>
            <p className="text-base pt-1">https://discord.gg/r85hA9RTy3</p>
            <p className="text-2xl pt-5"><u>Click Here</u></p>
          </button>
          </a>
          <a href="https://www.instagram.com/homesteadscioly/" target="_blank" rel="noopener noreferrer">
          <button className="flex flex-col h-[400px] w-[300px] items-center justify-center gap-1 rounded-md text-2xl font-medium transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 border border-black">
            <Image 
              src={instagram}
              width="150"
              height="200"
              className=""
              priority alt={""}
            />
            <p className="text-4xl pt-5">Instagram</p>
            <p className="text-base pt-1">@homesteadscioly</p>
            <p className="text-2xl pt-5"><u>Click Here</u></p>
          </button>
          </a>
          <a href="https://linktr.ee/homesteadscioly" target="_blank" rel="noopener noreferrer">
          <button className="flex flex-col h-[400px] w-[300px] items-center justify-center gap-1 rounded-md text-2xl font-medium transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 border border-black">
            <Image 
              src={linktree}
              width="130"
              height="200"
              className=""
              priority alt={""}
            />
            <p className="text-4xl pt-5">Other Links</p>
            <p className="text-base pt-1">@homesteadscioly</p>
            <p className="text-2xl pt-5"><u>Click Here</u></p>
          </button>
          </a>
        </div>

        <p  className="w-full h-fit text-5xl z-10 text-emerald-500 text-center font-bold pt-20">
          Contact
        </p>
        <div className="container mx-auto">
          <div className="pb-5 text-xl text-center pt-5">
              <p>
                If you have any questions or concerns that are not listed on the website, send us an email here! <br/>
                Or use this email address: scienceolympiad.hhs@gmail.com
              </p>
          </div>
          <Input className="mb-5" type="text" label="Subject Header" value={subject} onChange={(e) => setSubject(e.target.value)}></Input>
          <Textarea className="mb-5" type="text" label="Email Body" minRows={15} maxRows={25} value={body} onChange={(e) => setBody(e.target.value)}></Textarea>
          <div className="flex justify-end"><Button className="mr-0 bg-green-400" size="lg" onClick={sendEmail}>Send</Button></div>
        </div>
      </div>
      </main>
      <footer className="w-full row-start-3 flex gap-20 p-20 items-center justify-center">
        <p className="text-left p-20">©2024 Elliot Lu, Fisher Zheng, and Aidan Tam</p> 
        <p className="text-right p-20">Made with Next.js 🧡 </p>
      </footer>
    </div>
  );
}
