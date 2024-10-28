'use client';
import Navbar from '@/components/ui/navbar2'
import Link from 'next/link';
import React from "react";

export default function links() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="w-full justify-center items-center pl-96    ">
                <p  className=" w-full h-fit text-4xl z-10 p-10 text-emerald-500 text-left font-bold">
                    Official Science Olympiad Website:<br/>
                </p>
                <Link href="https://www.soinc.org/" className="pl-20 w-full h-fit text-3xl z-10 text-black text-left font">
                    https://www.soinc.org/
                </Link>

                <p  className=" w-full h-fit text-4xl z-10 p-10 text-emerald-500 text-left font-bold">
                    Get a copy of the 2024-2025 Rules:<br/>
                </p>
                <Link href="https://www.soinc.org/form/2025-rules-c" className=" pl-20 w-full h-fit text-3xl z-10 text-black text-left font">
                    https://www.soinc.org/form/2025-rules-c
                </Link>

                <p  className=" w-full h-fit text-4xl z-10 p-10 text-emerald-500 text-left font-bold">
                    Homestead Science Olympiad Instagram:<br/>
                </p>
                <Link href="https://www.instagram.com/homesteadscioly/" className="pl-20 w-full h-fit text-3xl z-10 text-black text-left font">
                    https://www.instagram.com/homesteadscioly/
                </Link>
            </div>  
        </div>
    );
}