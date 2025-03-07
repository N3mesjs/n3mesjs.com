import { useRef, Dispatch, SetStateAction, RefObject } from 'react';
import Draggable from 'react-draggable';

import { IconContext } from "react-icons";
import { GoX } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";
import { FaInstagram, FaGithub } from "react-icons/fa";


interface WindowProps {
    setShowState: Dispatch<SetStateAction<boolean>>;
    setHideState: Dispatch<SetStateAction<boolean>>;
    hideState: boolean;
}

export default function SocialsWindow({ setShowState, setHideState, hideState }: WindowProps) {

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div ref={nodeRef}>
                <div className={`absolute flex flex-col z-10 left-1/2 top-0 -translate-x-1/2 -translate-y-[150%] p-[4em] bg-[#272727] rounded-2xl cursor-pointer ${hideState ? "hidden" : ""}`}>
                    <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between handle cursor-pointer p-2'>
                        <h1>Socials.txt</h1>
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
                    <section className='flex flex-col items-center'>
                        <h1 className='text-[4em] mb-[1em]'>Follow me on my <u>socials</u>!</h1>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/delsorbo_alessio/" target="_blank" className="flex items-center bg-[hsl(212,79%,46%)] hover:bg-[hsl(212,54%,28%)] font-bold p-3 rounded-2xl gap-2">
                                <FaInstagram size={25} />Instagram
                            </a>
                            <a href="https://github.com/N3mesjs" target="_blank" className="flex items-center bg-[hsl(212,17%,17%)] hover:bg-[hsl(207,17%,12%)] font-bold p-3 rounded-2xl gap-2">
                                <FaGithub size={25} />Github
                            </a>
                        </div>
                    </section >
                </div >
            </div>
        </Draggable>
    )
}