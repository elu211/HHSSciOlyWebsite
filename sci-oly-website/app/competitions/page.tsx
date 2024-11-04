'use client';
import Navbar from '@/components/ui/navbar2';
import React, { useState } from "react";

interface ButtonData {
    title: string;
    info: string;
}

// Sample data for buttons
const buttonData: ButtonData[] = [
    { title: "Button 1", info: "Information for Button 1" },
    { title: "Button 2", info: "Information for Button 2" },
    { title: "Button 3", info: "Information for Button 3" },
    { title: "Button 4", info: "Information for Button 4" },
    { title: "Button 5", info: "Information for Button 5" },
    { title: "Button 6", info: "Information for Button 6" },
    { title: "Button 7", info: "Information for Button 7" },
    { title: "Button 8", info: "Information for Button 8" },
    { title: "Button 9", info: "Information for Button 9" },
    { title: "Button 10", info: "Information for Button 10" },
    { title: "Button 11", info: "Information for Button 11" },
    { title: "Button 12", info: "Information for Button 12" },
    { title: "Button 13", info: "Information for Button 13" },
    { title: "Button 14", info: "Information for Button 14" },
    { title: "Button 15", info: "Information for Button 15" },
    { title: "Button 16", info: "Information for Button 16" },
    { title: "Button 17", info: "Information for Button 17" },
    { title: "Button 18", info: "Information for Button 18" },
    { title: "Button 19", info: "Information for Button 19" },
    { title: "Button 20", info: "Information for Button 20" },
];

const Competitions: React.FC = () => {
    // State to manage visibility of dropdowns
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <p>Put competition information down below</p>

            {/* Grid of buttons */}
            <div className="grid grid-cols-5 gap-4">
                {buttonData.map((data, index) => (
                    <div key={index} className="relative">
                        <button
                            className="button bg-green-500 text-white py-2 px-4 rounded"
                            onClick={() => toggleDropdown(index)}
                        >
                            {data.title}
                        </button>
                        {visibleIndex === index && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2">
                                {data.info}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competitions;
