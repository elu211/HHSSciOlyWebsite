'use client';
import Navbar from '@/components/ui/navbar2'

export default function tryouts() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <p>Tryouts have closed for this year. Sign up next year!</p>
        </div>
    );
}