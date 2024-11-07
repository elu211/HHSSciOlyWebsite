'use client';
import React, { useState } from "react";
import Navbar from '@/components/ui/navbar2';
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
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div>
            <p className="text-5xl pl-10 w-full h-full" style={{ height: '50px' }}>Competition Information</p>
            </div>
            <div className="grid grid-cols-5 gap-4 w-full items-center justify-center p-20">
                {buttonData.map((data, index) => (
                    <div key={index} className="flex items-center justify-center px-10">
                        <button
                            className={clsx(
                                'flex h-[120px] grow items-center justify-center gap-5 rounded-md bg-green-500 hover:bg-green-300 text-xl font-medium hover:text-black md:flex-none md:justify-start md:p-1 md:px-20',
                            )}
                            onClick={() => openModal(data.info)}
                        >
                            {data.title}
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-semibold mb-4">Competition Information</h2>
                <p>{selectedInfo}</p>
            </Modal>
        </div>
    );
};

export default Competitions;
