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
    // ... additional button data
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

            {/* Grid of buttons */}
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
