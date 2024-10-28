'use client';
import Navbar from '@/components/ui/navbar2'
import React from "react";

export default function competitions() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <p>Put competition information down below</p>
        </div>
    );
}