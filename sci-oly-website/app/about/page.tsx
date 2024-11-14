'use client';
import Navbar from '@/components/ui/navbar3';
import React from "react";

export default function about() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-8 pb-20 gap-10  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="w-full justify-center items-center pl-96 pr-96">
                <p  className=" w-full h-fit text-4xl z-10 text-emerald-500 text-left font-bold">
                    What Is Science Olympiad?<br/><br/>
                </p>
                <p  className="w-full h-fit text-xl z-10 text-black text-left font">
                
                    Science Olympiad is an international non-profit organization devoted to improving the quality of science education, <br/>
                    increasing student interest in science and providing recognition for outstanding achievement in science education by <br/>
                    both students and teachers. These goals are accomplished through classroom activities, research, training workshops and <br/>
                    the encouragement of intramural, district, regional, state and national tournaments. Science Olympiad tournaments are <br/>
                    rigorous academic interscholastic competitions that consist of a series of team events, which students prepare for <br/>
                    during the year. These challenging and motivational events are well balanced between the various science disciplines of <br/>
                    biology, earth science, chemistry, physics and technology. There is also a balance between events requiring knowledge of<br/>
                    science concepts, process skills and science applications. In addition, during the day there are open house activities that<br/>
                    consist of science and mathematics demonstrations, activities and career counseling sessions conducted by professors <br/>
                    and scientists at the host institution occurring concurrently with the events.<br/>
                    <br/>

                    Many states and regions have organized physics, biology or chemistry competitions, but few have combined all disciplines <br/>
                    in one large Science Olympiad. The excitement of many students from all science areas competing and cheering one  <br/>
                    another on to greater learning caused one school district to coin the phrase &quot;intellete&quot;. When they searched for a <br/>
                    place to house their newly won Science Olympiad State Championship trophy, the only location available was outside  <br/>
                    the principal&apos;s office in the &quot;athlete&quot; showcase, so they convinced the school board to build an &quot;intellete&quot; showcase.  <br/>
                    One of the goals of the Science Olympiad is to elevate science education and learning to a level of enthusiasm and <br/>
                    support that is normally reserved only for varsity sports programs.
                </p>
            </div>
        </div>
    );
}