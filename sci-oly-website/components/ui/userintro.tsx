import Image from 'next/image';
import React from "react";


const userintro = ({imagepath = 'blank.png', oName='Officer Name', description='Description'}) => {
    const fullPath = `/${imagepath}`;
    return (
        <div className="rounded-2xl w-1/4 bg-green-300 ">
            <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
            <div className="object-center  w-2/3 items-center overflow-clip l-50 r-50 m-auto rounded-3xl" style={{height:"300px", borderRadius:"20px"}}>
                <Image 
                        src= {fullPath}
                        width="0"
                        height="0"
                        className="z-0 object-center w-full h-auto"
                        priority alt={""}
                    unoptimized
                    />
            </div>
            <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">{oName}</p>
            <p className="w-full text-xl text-center p-2 rounded-2xl">{description}</p>
            <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
        </div>
    );
};

export default userintro;