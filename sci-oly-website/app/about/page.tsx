'use client';
import Navbar from '@/components/ui/navbar3';
import React from "react";
import Image from "next/image";
import pic from "@/components/images/about.png";

export default function about() {
    return (
        <div className="overflow-y-auto min-h-screen pt-8 pb-20 gap-12  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="relative overflow-clip w-screen flex items-center rounded-xl mt-8" style={{height:"500px"}}>
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
                <h1 className="absolute top-0 bottom-0 w-50 h-fit text-7xl ml-20 mt-auto mb-auto z-20 text-white text-left" >About Us</h1>
            </div>
            <div className="items-start justify-items-center ">
            <div className="justify-center items-center pt-8" style={{width:'1000px'}}>
                <br/>
                <p  className=" w-full h-fit text-4xl z-10 text-emerald-500 text-left font-bold">
                    What Is Science Olympiad?
                </p>
                <p  className="w-full h-fit text-xl z-10 text-black text-left font leading-10 pt-5">
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Science Olympiad is the premier team STEM competition in the US, with 6,300 teams participating in 425 tournaments across all 50 states, including our team here at Homestead. 
                Science Olympiad is divided into two divisions: Division B (middle school level) and Division C (high school level). Our team participates in Division C.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whether biology, earth science, chemistry, physics, or technology, Science Olympiad is the place for you! 
                Consisting of 22 events in Division C ranging from Astronomy to Wind Power, Science Olympiad’s diverse selection of events across various STEM topics ensures there is an event that fits you! 
                Some events are written tests for you to take, while others have hands-on experiences requiring you to build or make something for an event. 
                More information about specific events is available on the Competitions page.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A typical Science Olympiad season consists of various invitationals, with Regional, State, and National championships in the latter half of the season! 
                Invitationals can be Satellite or In-Person, Satellite means it is done online at your school, and In-Person means it is done at a specific location. 
                You compete with other teams in each Invitational and can win awards with great performance! 
                With enough dedication and hard work, a team can advance from Regionals to States or even Nationals, winning countless medals along the way.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Joining Science Olympiad opens the door to countless opportunities in various STEM subjects. 
                Whether you’re interested in diseases or robots, we want you to participate in this journey. We hope to see you on our team in the future!


                </p>
            </div>
            </div>
        </div>
    );
}