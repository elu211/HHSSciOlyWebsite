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
    { title: "Anatomy and Physiology", info: "In this event, participants will be assessed on their understanding of the anatomy and physiology for the human Integumentary, Muscular, and Skeletal systems." },
    { title: "Disease Detectives", info: "In this event, participants will use their investigative skills in the scientific study of disease, injury, health, and disability in populations or groups of people." },
    { title: "Ecology", info: "In this event, participants will answer questions involving content knowledge and process skills in the area of ecology and adaptations in featured North American biomes." },
    { title: "Entomology", info: "In this event, students will be asked to identify insects and selected immature insects by order and family, answer questions about insects, and use or construct a dichotomous key." },
    { title: "Microbe Mission", info: "In this event, teams will answer questions, solve problems and analyze data pertaining to microbes. " },
    { title: "Astronomy", info: "In this event, teams will demonstrate an understanding of Stellar Evolution: Star Formation & Exoplanets." },
    { title: "Dynamic Planet", info: "In this event, participants will demonstrate an understanding of the processes involving the cryosphere of the Earth including glaciers and other ice formations and processes." },
    { title: "Fossils", info: "In this event, teams identify and classify fossils and demonstrate their knowledge of ancient life. Tasks will be related to interpretation of past environments and ecosystems, adaptations, evolutionary relationships, and the use of fossils in dating and correlating rock units." },
    { title: "Geologic Mapping", info: "In this event, teams will demonstrate understanding in the construction and use of topographic maps, geologic maps, and cross sections, and their use in forming interpretations regarding subsurface structures and past depositional environments on Earth and other planetary bodies." },
    { title: "Chem Lab", info: "In this event, teams will complete one or more tasks and answer a series of questions involving the science processes of chemistry focused in the areas of Periodicity and Equilibrium." },
    { title: "Forensics", info: "In this event, given a scenario and some possible suspects, students will perform a series of tests. These tests, along with other evidence or test results, will be used to solve a crime." },
    { title: "Materials Science", info: "In this event, teams will complete lab activities and answer a series of questions related to the materials science of ceramics with an emphasis on chemical and crystalline structure, and behavior." },
    { title: "Optics", info: "Teams must participate in an activity involving positioning mirrors to direct a laser beam towards a target and are tested on their knowledge of geometric and physical optics." },
    { title: "Codebusters", info: "In this event, teams will cryptanalyze and decode encrypted messages using cryptanalysis techniques for historical and modern advanced ciphers." },
    { title: "Experimental Design", info: "This event will determine the participant’s ability to design, conduct, and report the findings of an experiment entirely on-site." },
    { title: "Write It Do It", info: "In this event, one participant will write a description of an object and how to build it. The other participant will attempt to construct the object from this description." },
    { title: "Air Trajectory", info: "In this event, prior to the competition, teams will design, construct, and calibrate a single device capable of launching projectiles onto a target and collect data regarding device parameters and performance." },
    { title: "Wind Power", info: "In this event, teams construct a blade assembly device prior to the tournament that is designed to capture wind power and complete a written test on the principles of alternative energy." },
    { title: "Electric Vehicle", info: "NO INFORMATION YET" },
    { title: "Helicopter", info: "In this event, prior to the tournament, teams will construct, collect data on test flights, analyze and optimize a free flight rubber-powered helicopter to achieve maximum time aloft." },
    { title: "Robot Tour", info: "In this event, teams design, build, program and test one Robotic Vehicle to navigate a track to reach a target at a set amount of time as accurately and efficiently as possible." },
    { title: "Tower", info: "In this event, teams will design and build a Tower (Structure) meeting requirements specified in these rules to achieve the highest structural efficiency." },
    { title: "Bungee Drop", info: "In this event, each team will design one elastic cord to conduct two separate drops at a given height(s) and attempt to get a drop mass, placed in a bottle, as close as possible to, but without touching, a landing surface." },
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
                    const numBuildEvents = index >= buttonData.length - 7;

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
