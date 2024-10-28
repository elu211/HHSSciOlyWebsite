import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { tinos } from '@/components/ui/fonts';
// import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Homestead Science Olympiad",
  description: "Website created by Elliot Lu, Fisher Zheng, and Aidan Tam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-scroll overflow-x-hidden">
      <head>
        <link rel="icon" type="image/png" href="favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}>
      <p
        className={`${tinos.className} antialiased`}
      >
      </p>
        {children}
      </body>
    </html>
  );
}
