'use client';
import React, { useState } from "react";
import Navbar from '@/components/ui/navbar3';
import clsx from 'clsx';
import Modal from "./modal";

interface ButtonData {
    title: string;
    info: string;
}

const buttonData: ButtonData[] = [
    { title: "Competition 1", info: "Information for Competition 1" },
    { title: "Competition 2", info: "Information for Competition 2" },
    { title: "Competition 3", info: "Information for Competition 3" },
    { title: "Competition 4", info: "Information for Competition 4" },
    { title: "Competition 5", info: "Information for Competition 5" },
    { title: "Competition 6", info: "Information for Competition 6" },
    { title: "Competition 7", info: "Information for Competition 7" },
    { title: "Competition 8", info: "Information for Competition 8" },
    { title: "Competition 9", info: "Information for Competition 9" },
    { title: "Competition 10", info: "Information for Competition 10" },
    { title: "Competition 11", info: "Information for Competition 11" },
    { title: "Competition 12", info: "Information for Competition 12" },
    { title: "Competition 13", info: "Information for Competition 13" },
    { title: "Competition 14", info: "Information for Competition 14" },
    { title: "Competition 15", info: "Information for Competition 15" },
    { title: "Competition 16", info: "Information for Competition 16" },
    { title: "Competition 17", info: "Information for Competition 17" },
    { title: "Competition 18", info: "Information for Competition 18" },
    { title: "Competition 19", info: "Information for Competition 19" },
    { title: "Competition 20", info: "Information for Competition 20" },
    { title: "Competition 21", info: "Information for Competition 21" },
    { title: "Competition 22", info: "Information for Competition 22" },
    { title: "Competition 23", info: "Information for Competition 23" },
];

const Competitions: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

    const openModal = (info: string) => {
        setSelectedInfo(info);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInfo(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 font-[family-name:var(--font-geist-sans)]">
            {/* Navbar */}
            <div className="w-full flex justify-center items-center p-4">
                <Navbar />
            </div>

            {/* Header */}
            <div className="text-center pt-10 pb-4">
                <h1 className="text-4xl font-bold text-gray-800">Competition Information</h1>
            </div>

            {/* Legend */}
            <div className="absolute top-32 left-6 flex flex-col items-start bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                    <div className="w-5 h-5 bg-green-500 rounded-sm mr-3"></div>
                    <span className="text-lg font-semibold text-gray-700">Regular Competitions</span>
                </div>
                <div className="flex items-center mb-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-sm mr-3"></div>
                    <span className="text-lg font-semibold text-gray-700">Build Events</span>
                </div>
            </div>

            {/* Competition Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-12">
                {buttonData.map((data, index) => {
                    const numBuildEvents = index >= buttonData.length - 8;

                    return (
                        <div key={index} className="flex items-center justify-center px-6 py-4">
                            <button
                                className={clsx(
                                    "flex h-[100px] w-[300px] items-center justify-center gap-1 px-2 rounded-md text-lg font-medium text-white transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105",
                                    numBuildEvents ? 'bg-blue-500 hover:bg-blue-400' : 'bg-green-500 hover:bg-green-400'
                                )}
                                onClick={() => openModal(data.info)}
                            >
                                {data.title}
                            </button>
                        </div>
                    );
                })}
            </div>
            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-semibold mb-4">Competition Information</h2>
                <p className="text-lg">{selectedInfo}</p>
            </Modal>
        </div>
    );
};

export default Competitions;
