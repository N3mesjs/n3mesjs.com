import { useRef, Dispatch, SetStateAction, RefObject } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';


import { IconContext } from "react-icons";
import { GoX } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

import { FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

interface WindowProps {
    setShowState: Dispatch<SetStateAction<boolean>>;
    setHideState: Dispatch<SetStateAction<boolean>>;
    hideState: boolean;
}

export default function AboutMeWindow({ setShowState, setHideState, hideState }: WindowProps) {

    const nodeRef = useRef<HTMLDivElement>(null);
    const iconsSize: number = 70;

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div ref={nodeRef}>
                <div className={`absolute flex flex-col z-10 left-1/2 top-0 -translate-x-1/2 -translate-y-[100%] p-[4em] bg-[#272727] rounded-2xl z-[${Z}] ${hideState ? "hidden" : ""}`}>
                    <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between p-2 handle cursor-pointer'>
                        <div className='flex items-center gap-1'>
                            <Image src="/txtIcon.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                            <h1>AboutMe.txt</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='hover:bg-[#2b2b2b]' onClick={() => setHideState(true)}>
                                <IconContext.Provider value={{ color: "white" }}>
                                    <BsDashLg size="30" />
                                </IconContext.Provider>
                            </button>
                            <button className='hover:bg-red-700' onClick={() => { setShowState(false) }}>
                                <IconContext.Provider value={{ color: "white" }}>
                                    <GoX size="30" />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                    <section>
                        <p className="text-[4em] text-center max-lg:text-[2em] mt-6">
                            Alessio, but call me <span className="font-bold testoFigo">N3mesjs</span>
                            <br />
                            I&apos;m a <u>Full Stack</u> developer
                        </p>
                        <p className="text-[#535353] text-[20px] mt-4 text-center max-lg:text-[20px]">Working to contribute for a better world</p>
                    </section>
                    <section className="mt-[4em] flex flex-col items-center mb-[3em]">
                        <h2 className="text-[3em] mb-[1em] max-lg:text-[1.5em]">Explore my <u>knowledge</u></h2>
                        <div className="w-[400px] overflow-hidden flex">
                            <div className="flex divIcone gap-4">
                                <IoLogoJavascript size={iconsSize} />
                                <IoLogoCss3 size={iconsSize} />
                                <IoLogoHtml5 size={iconsSize} />
                                <IoLogoReact size={iconsSize} />
                                <IoLogoNodejs size={iconsSize} />
                                <SiNextdotjs size={iconsSize} />
                                <SiVite size={iconsSize} />
                                <TbBrandCSharp size={iconsSize} />
                                <FaJava size={iconsSize} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Draggable>
    )
}