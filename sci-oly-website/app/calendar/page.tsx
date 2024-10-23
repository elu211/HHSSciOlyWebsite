'use client';
import Navbar from '@/components/ui/navbar2'

export default function calendar() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <p>2024-2025 School Year Calendar:</p>
            <iframe src="https://calendar.google.com/calendar/embed?src=scienceolympiad.hhs%40gmail.com&ctz=America%2FLos_Angeles" width="800" height="600"  scrolling="no"></iframe>
        </div>
    );
}