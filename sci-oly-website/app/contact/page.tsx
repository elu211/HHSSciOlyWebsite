

import Navbar from '@/components/ui/navbar2'
import React from "react";
import {Input} from "@nextui-org/react";

export default function contact() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
                <input type="text"></input>
                <input type="text"></input>
            </div>
        </div>
    );
}