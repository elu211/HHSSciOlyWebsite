'use client';
import Navbar from '@/components/ui/navbar2';
import Image from 'next/image';
import water from '@/components/images/Water.png';
import placeholder from '@/components/images/blank.png';
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
                        imagepath='water.png'
                        oName="Officer"
                        description="Blank">
                        </UserIntro>
                    <div className="rounded-2xl w-1/4 bg-green-300 ">
                        <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
                        <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto" style={{height:"300px", borderRadius:"20px"}}>
                            <Image 
                                src= {placeholder}
                                width="0"
                                height="0"
                                className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
                                priority alt={""}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                        <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">Officer Name</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl">Decription</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
                    </div>
                    <div className="rounded-2xl w-1/4 bg-green-300 ">
                        <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
                        <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto" style={{height:"300px", borderRadius:"20px"}}>
                            <Image 
                                src= {placeholder}
                                width="0"
                                height="0"
                                className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
                                priority alt={""}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                        <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">Officer Name</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl">Decription</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
                    </div>
                </div>
                <div className="relative flex w-full overflow-clip justify-center pl-32 pr-32 gap-32">
                    <div className="rounded-2xl w-1/4 bg-green-300 ">
                        <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
                        <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto" style={{height:"300px", borderRadius:"20px"}}>
                            <Image 
                                src= {placeholder}
                                width="0"
                                height="0"
                                className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
                                priority alt={""}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                        <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">Officer Name</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl">Decription</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
                    </div>
                    <div className="rounded-2xl w-1/4 bg-green-300 ">
                        <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
                        <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto" style={{height:"300px", borderRadius:"20px"}}>
                            <Image 
                                src= {placeholder}
                                width="0"
                                height="0"
                                className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
                                priority alt={""}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                        <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">Officer Name</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl">Decription</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
                    </div>
                    <div className="rounded-2xl w-1/4 bg-green-300 ">
                        <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
                        <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto" style={{height:"300px", borderRadius:"20px"}}>
                            <Image 
                                src= {placeholder}
                                width="0"
                                height="0"
                                className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
                                priority alt={""}
                                style={{borderRadius:"10px"}}
                            />
                        </div>
                        <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">Officer Name</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl">Decription</p>
                        <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
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