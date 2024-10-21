import Image from 'next/image';
import React from 'react';

const DynamicImage = ({ imageName = 'blank.png'}) => {
  const imagePath = `/components/images/${imageName}`;

  return (
    <div>
        <Image src={imagePath}                     
        width="0"
        height="0"
        className="object-scale-down z-0 object-center w-full h-auto rounded-3xl p-5"
        priority alt={""}
        style={{borderRadius:"10px"}} />
    </div>
  );
};

export default DynamicImage