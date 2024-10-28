// import { useEffect, useState} from "react";
// import Link from "next/link";
// import logo from "@/app/SciOlyLogo.svg";
// import NavLinks from "./nav-links";
// import Image from "next/image";
// import React from "react";

// const GetOpacity = () => {
//     const threshold = 100;
//     let opacity = 100;
//     const [baropacity, setOpacity] = useState(100);
//     const [visible, setVisible] = useState('visible')
//     let scrollDir = -1;
//     useEffect(() => {
    
//         let previousScrollYPosition = window.scrollY;

//         const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
//         Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

//         const isScrollingUp = (currentScrollYPosition: number) =>
//         currentScrollYPosition > previousScrollYPosition &&
//         !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
//         !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

//         const updateScrollDirection = () => {
//         const currentScrollYPosition = window.scrollY;
//         if (scrolledMoreThanThreshold(currentScrollYPosition)) {
//             if (isScrollingUp(currentScrollYPosition)){
//                 scrollDir = 1;
//             }
//             else if (!(isScrollingUp(currentScrollYPosition))){
//                 scrollDir = -1;
//             }
//             if (scrollDir > 0 && (currentScrollYPosition - previousScrollYPosition > threshold)) {
//                     if (opacity > 0){
//                         opacity -= 10;
//                         setVisible('visible');
//                     }
//                     else{
//                         setVisible('hidden');
//                     }
//                 };
//             if (scrollDir < 0) {
//                 setVisible('visible');
//                 opacity = 100;
//                 };
//             // console.log(opacity);
//             setOpacity(opacity);
//             previousScrollYPosition =
//             currentScrollYPosition > 0 ? currentScrollYPosition : 0;
//             // console.log(scrollDir);
//         }
//         };
//         const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

//         window.addEventListener("scroll", onScroll);
//         // console.log(baropacity);
        
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     return <nav className={`fixed top-0 w-full z-10 pt-30 transition-colors duration-300 "bg-white"
//     }`} style={{opacity: `${baropacity/100}`}}>

//     <div className={"flex justify-center items-center"}>
//     <div className= "w-full bg-white border-none" >    
//         <div className="flex justify-center items-center">
//         <Image 
//             className="dark:invert pt-2"
//             src= {logo}
//             width="0"
//             height="0"
//             sizes="100vw"
//             style={{ width: '100px', height: 'auto'}}
//             priority alt={""}/>
//         <Link href="/"
//             className="text-4xl pl-5"
//         >
//         <p style={{fontFamily: 'tinos'}}>HHS Science Olypiad</p>
//         </Link>
//         </div>
//     </div>
//     </div>
//     <div className={`w-full bg-white flex justify-center items-center`}>
//       <NavLinks/>
//     </div>
//     </nav>
    
//     };

// export default GetOpacity;
