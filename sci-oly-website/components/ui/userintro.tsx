import Image from 'next/image';
import placeholder from '/components/images/water.png';
import DynamicImage from '@/components/ui/getImage';


const userintro = ({imagepath = 'blank.png', oName='Officer Name', description='Description'}) => {
    const fullPath = `/components/images/${imagepath}`;
    return (
        <div className="rounded-2xl w-1/4 bg-green-300 ">
            <p className="w-full text-xl text-center p-4 rounded-2xl"></p>
            <div className="object-center  relative w-2/3 items-center overflow-clip l-50 r-50 m-auto rounded-3xl" style={{height:"300px", borderRadius:"20px"}}>
                <DynamicImage imageName='blank.png'/>
            </div>
            <p className="w-full font-semibold text-2xl text-center p-2 rounded-2xl">{oName}</p>
            <p className="w-full text-xl text-center p-2 rounded-2xl">{description}</p>
            <p className="w-full text-xl text-center p-2 rounded-2xl"></p>
        </div>
    );
};

export default userintro;