'use client';
import Navbar from '@/components/ui/navbar2'

export default function about() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-16 pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="w-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="w-full justify-center items-center pl-96    ">
                <p  className=" w-full h-fit text-4xl z-10 text-emerald-500 text-left font-bold">
                    What Is Science Olympiad?<br/><br/>
                </p>
                <p  className="w-full h-fit text-3xl z-10 text-black text-left font">
                
                    Science Olympiad is an international non-profit organization devoted to improving the quality of science education, <br/>
                    increasing student interest in science and providing recognition for outstanding achievement in science education by <br/>
                    both students and teachers. These goals are accomplished through classroom activities, research, training workshops and <br/>
                    the encouragement of intramural, district, regional, state and national tournaments. Science Olympiad tournaments are <br/>
                    rigorous academic interscholastic competitions that consist of a series of team events, which students prepare for <br/>
                    during the year. These challenging and motivational events are well balanced between the various science disciplines of <br/>
                    biology, earth science, chemistry, physics and technology. There is also a balance between events requiring knowledge of<br/>
                    science concepts, process skills and science applications. In addition, during the day there are open house activities that<br/>
                    consist of science and mathematics demonstrations, activities and career counseling sessions conducted by professors and <br/>
                    scientists at the host institution occurring concurrently with the events.<br/>
                    <br/>

                    Many states and regions have organized physics, biology or chemistry competitions, but few have combined all disciplines in<br/>
                    one large Science Olympiad. The excitement of many students from all science areas competing and cheering one another on to<br/>
                    greater learning caused one school district to coin the phrase "intellete". When they searched for a place to house their <br/>
                    newly won Science Olympiad State Championship trophy, the only location available was outside the principal's office in the<br/>
                    "athlete" showcase, so they convinced the school board to build an "intellete" showcase. One of the goals of the Science <br/>
                    Olympiad is to elevate science education and learning to a level of enthusiasm and support that is normally reserved only <br/>
                    for varsity sports programs.
                </p>
            </div>
        </div>
    );
}