import { Inter } from 'next/font/google'; 
import { Lusitana } from 'next/font/google';
// import { Times_New_Roman } from 'next/font/google';
export const noto = Inter({subsets: ['latin']});

export const lusitana = Lusitana( {
    subsets: ['latin'],
    weight: ['400', '700']
} );

export const times = Lusitana( {
    subsets: ['latin'],
    weight: ['400', '700']
} );