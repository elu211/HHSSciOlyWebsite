import Navbar from '@/components/ui/navbar3';
import Iframe from 'react-iframe';
import React from "react";

export default function calendar() {
    return (
        <div className="overflow-hidden grid  items-top justify-items-center min-h-screen pt-16   font-[family-name:var(--font-geist-sans)]">
            <div className="w-full h-0 flex justify-center items-center">
                <Navbar />
            </div>
            
                
            <div className="w-full min-h-svh pl-20 pr-20 justify-center">
                <p className="text-4xl pl-10 w-full h-auto" style={{height:'100px'}}></p>
                <p className="text-4xl pl-10 w-full h-auto" style={{height:'100px'}}>2024-2025 School Year Calendar:</p>
                <Iframe url="https://calendar.google.com/calendar/embed?src=scienceolympiad.hhs%40gmail.com&ctz=America%2FLos_Angeles" width='100%' height="75%" className="rounded-3xl"></Iframe>
            </div>
        </div>
    );
}