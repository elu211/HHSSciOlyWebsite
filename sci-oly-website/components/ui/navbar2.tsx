'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import logo from "@/app/SciOlyLogo.svg";
import NavLinks from "./nav-links";
import Image from "next/image";


const Navbar = () => {

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);
  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-150); 
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div className='w-full'>
      <div id="navbar" className={`w-full absolute bg-white`} style={{
        top: `${top}px`,
        display: 'block',
        transition: 'top 0.5s',
    }}>
      <div className="flex justify-center items-center bg-white">
        <Image 
            className="dark:invert pt-2"
            src= {logo}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100px', height: 'auto'}}
            priority alt={""}/>
        <Link href="/"
            className="text-4xl pl-5"
        >
        <p style={{fontFamily: 'tinos'}}>Homestead Science Olypiad</p>
        </Link>
        </div>
      <div className={`w-full bg-white flex justify-center items-center`}>
        <NavLinks/>
        </div>
      </div>

    </div>
  );
};
export default Navbar;