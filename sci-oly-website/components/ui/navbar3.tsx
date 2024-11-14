'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import logo from "@/app/SciOlyLogo.svg";
import NavLinks from "./nav-links";
import NavButtons from './nav-buttons';
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
    <div className='w-full' style={{
      position: 'relative',
      // border: '1px solid blue',
      height:'auto'
      }}>
      <div id="navbar" className={`bg-white`} style={{
        top: `${top}px`,
        display: 'block',
        transition: 'top 0.5s',
        // border: '1px solid red',
    }}>
        <div className={'flex justify-between pt-2'}>
          <div className={`bg-white flex justify-self-start items-center pt-2 px-5`}>
            <Image 
                className="dark:invert pt-2"
                src= {logo}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '75px', height: 'auto'}}
                priority alt={""}/>
            <Link href="/"
                className="text-4xl pl-5"
            >
            <p className="text-xl" style={{fontFamily: 'tinos'}}>Homestead<br></br>Science Olympiad</p>
            </Link>
          </div>
          <div className={`bg-white flex justify-center items-center`}>
            <NavLinks/>
            <NavButtons />
          </div>
          <div className={`bg-white flex justify-self-end items-center px-5`}>
              <button className={'px-2'}>Login</button>
              <button className={'px-2'}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;