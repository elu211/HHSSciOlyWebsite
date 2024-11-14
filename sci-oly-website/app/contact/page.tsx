"use client";

import Navbar from '@/components/ui/navbar3'
import React from "react";
import { useState } from 'react';
import {Input, Textarea, Button} from "@nextui-org/react";

export default function contact() {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const sendEmail = () => {
        const mailto = `mailto:scienceolympiad.hhs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen pt-8 pb-20 gap-10  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="container mx-auto mt-10 px-80">
                <div className="pb-5">
                    <h1 className="text-4xl mb-1 font-bold">Contact Us Here:</h1>
                    <p>If you have any questions or concerns that are not listed on the website, send us an email here!</p>
                </div>
                <Input className="mb-5" type="text" label="Subject Header" value={subject} onChange={(e) => setSubject(e.target.value)}></Input>
                <Textarea className="mb-5" type="text" label="Email Body" minRows={15} maxRows={25} value={body} onChange={(e) => setBody(e.target.value)}></Textarea>
                <Button className="mr-0 bg-green-400" size="lg" onClick={sendEmail}>Send</Button>
            </div>
        </div>
    );
}