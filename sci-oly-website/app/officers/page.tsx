'use client';
import Navbar from '@/components/ui/navbar2';
import React from "react";
import Image from 'next/image';
import water from '@/components/images/Water.png';
import UserIntro from '@/components/ui/userintro';

export default function officers() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">      
                <div className="relative w-full overflow-clip rounded-xl" style={{height:"500px"}}>
                    <Image 
                        src= {water}
                        width="0"
                        height="0"
                        className="object-none z-0 object-left w-full h-auto rounded-xl"
                        priority alt={""}
                    />
                    <h1 className="absolute top-0 bottom-0 w-50 h-fit text-5xl ml-20 mt-auto mb-auto z-100 text-white text-left" >HHS Science Olympiad <br/><br/>Team Officers</h1  >
                </div>
                <div className="relative flex w-full overflow-clip rounded-2xl p-5">
                    <p className="w-full font-semibold text-4xl text-center bg-blue-200 p-5 rounded-2xl">Team Captains</p>
                </div>
                <div className="relative flex w-full overflow-clip justify-center pl-32 pr-32 gap-32">

                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                </div>
                <div className="relative flex w-full overflow-clip justify-center pl-32 pr-32 gap-32">
                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    <UserIntro
                        imagepath='blank.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    
                </div>
            </main>
            <footer className="w-full row-start-3 flex gap-20 p-20 items-center justify-center">
                <p className="text-left p-20">©2024 Elliot Lu, Fisher Zheng, and Aidan Tam</p>
                <p className="text-left p-20">HHS SciOly Logo ©2024 Homestead Science Olympiad</p>
            </footer>
        </div>
    );
}