"use client"

import Image from 'next/image';
import { useState, ChangeEvent, useRef, Dispatch, SetStateAction, RefObject } from 'react';
import Draggable from 'react-draggable';

// React Icons
import { IconContext } from "react-icons";
import { FaInstagram, FaGithub, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GoX } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

// Definisco l'interfaccia per le props dei componenti Window
interface WindowProps {
    setShowState: Dispatch<SetStateAction<boolean>>;
    setHideState: Dispatch<SetStateAction<boolean>>;
    hideState: boolean;
}

export default function Windows() {
    const [showAboutMe, setShowAboutMe] = useState<boolean>(false);
    const [showSocials, setShowSocials] = useState<boolean>(false);
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

    const [hideAboutMe, setHideAboutMe] = useState<boolean>(false);
    const [hideSocials, setHideSocials] = useState<boolean>(false);
    const [hideColorPicker, setHideColorPicker] = useState<boolean>(false);

    return (
        <>
            <div className='w-screen h-screen z-0 overflow-hidden'>
                <Image src="/wallpaper1.jpg" alt="Background" fill={true} draggable={false} quality={100} unoptimized={true} />
            </div>
            <div className='absolute flex flex-col top-1 left-1'>
                <button onDoubleClick={() => setShowAboutMe(true)}>
                    <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                        <Image src="/txtIcon.png" alt="Logo" width={70} height={70} draggable={false} quality={100} unoptimized={true} />
                        <p>AboutMe.txt</p>
                    </div>
                </button>

                <button onDoubleClick={() => setShowSocials(true)}>
                    <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                        <Image src="/txtIcon.png" alt="Logo" width={70} height={70} draggable={false} quality={100} unoptimized={true} />
                        <p>Socials.txt</p>
                    </div>
                </button>

                <button onDoubleClick={() => setShowColorPicker(true)}>
                    <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                        <Image src="/color-picker.png" alt="Logo" width={70} height={70} draggable={false} quality={100} unoptimized={true} />
                        <p>colorpicker.jsx</p>
                    </div>
                </button>
            </div>
            <div className='absolute flex z-10 bottom-0 w-screen bg-[#2727279f] m-2 rounded-2xl justify-center items-center gap-3'>
                <button className='hover:bg-[#5252529f] p-1 rounded-xl'>
                    <Image src="/micLogo.png" alt="Logo" width={64} height={64} draggable={false} quality={100} unoptimized={true} />
                </button>

                {showAboutMe ? (
                    <button className='hover:bg-[#5252529f] p-2 rounded-xl' onClick={() => setHideAboutMe(false)}>
                        <div className="flex items-center">
                            <Image src="/txtIcon.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                            <p>AboutMe.txt</p>
                        </div>
                    </button>
                ) : null}

                {showSocials ? (
                    <button className='hover:bg-[#5252529f] p-2 rounded-xl' onClick={() => setHideSocials(false)}>
                        <div className="flex items-center">
                            <Image src="/txtIcon.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                            <p>Socials.txt</p>
                        </div>
                    </button>
                ) : null}

                {showColorPicker ? (
                    <button className='hover:bg-[#5252529f] p-2 rounded-xl' onClick={() => setHideColorPicker(false)}>
                        <div className="flex items-center">
                            <Image src="/color-picker.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                            <p>colorpicker.jsx</p>
                        </div>
                    </button>
                ) : null}
            </div>

            {showAboutMe ? <AboutMeWindow setShowState={setShowAboutMe} setHideState={setHideAboutMe} hideState={hideAboutMe} /> : null}
            {showSocials ? <SocialsWindow setShowState={setShowSocials} setHideState={setHideSocials} hideState={hideSocials} /> : null}
            {showColorPicker ? <ColorPicker setShowState={setShowColorPicker} setHideState={setHideColorPicker} hideState={hideColorPicker} /> : null}
        </>
    )
}

const ColorPicker = ({ setShowState, setHideState, hideState }: WindowProps) => {

    const [color, setColor] = useState("#FFFFFF");
    const nodeRef = useRef<HTMLDivElement>(null);

    const cambiaColore = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div className={`absolute flex flex-col z-10 top-0 left-0 p-[4em] bg-[#272727] rounded-2xl ${hideState ? "hidden" : ""}`} ref={nodeRef}>
                <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between p-2 handle cursor-pointer'>
                    <h1>colorpicker.jsx</h1>
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
                    <h1 className="text-[30px] font-bold">Color Picker</h1>
                    <div className="w-[300px] p-[30px] rounded-lg mb-2" style={{ backgroundColor: color }}>
                        <p style={color == "#000000" ? { color: "white" } : { color: "black" }} className="text-black" id="testo">Colore Selezionato: <span className="font-bold">{color}</span></p>
                    </div>  {/* Ricorda nello style le prime parentesi sono per il codice JS e le seconde perche devi passare un oggetto che sarebbe il CSS*/}
                    <input type="color" value={color} onChange={cambiaColore} />
                </section >
            </div >
        </Draggable>
    );
}

const SocialsWindow = ({ setShowState, setHideState, hideState }: WindowProps) => {

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div className={`absolute flex flex-col z-10 top-0 left-0 p-[4em] bg-[#272727] rounded-2xl cursor-pointer ${hideState ? "hidden" : ""}`} ref={nodeRef}>
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
        </Draggable>
    )
}

const AboutMeWindow = ({ setShowState, setHideState, hideState }: WindowProps) => {

    const nodeRef = useRef<HTMLDivElement>(null);
    const iconsSize: number = 70;

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div className={`absolute flex flex-col z-10 top-0 left-0 p-[4em] bg-[#272727] rounded-2xl cursor-pointer ${hideState ? "hidden" : ""}`} ref={nodeRef}>
                <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between p-2 handle cursor-pointer'>
                    <h1>AboutMe.txt</h1>
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
                    <h2 className="text-[3em] mb-3 max-lg:text-[1.5em]">Explore my <u>knowledge</u></h2>
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
        </Draggable>
    )
}