import Navbar from '@/components/ui/navbar3'
import React from "react";
import RankTable from '@/components/ui/ranking-table';

export default function team() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-8 pb-20 gap-10  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full h-auto flex justify-center items-center">
                <Navbar />
            </div>
            <div className="p-20 rounded-3xl w-full h-full flex justify-center items-start">
                <RankTable/>
            </div>    
        </div>
    );
}