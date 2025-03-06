"use client"

import Image from 'next/image';
import { useRef } from 'react';

// React Icons
import { IconContext } from "react-icons";
import { FaInstagram, FaGithub, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FiXSquare } from "react-icons/fi";

export default function Windows() {
    const nodeRef = useRef<any>(null);

    const handleAboutMe = () => {}

    return (
        <>
            <div className='w-screen h-screen z-0 overflow-hidden'>
                <Image src="/wallpaper.png" alt="Background" fill={true} draggable={false} quality={100} unoptimized={true} />
            </div>

            <div className='absolute flex flex-col top-1 left-1'>
                <button onClick={handleAboutMe}>
                    <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                        <Image src="/txtIcon.png" alt="Logo" width={100} height={100} draggable={false} quality={100} unoptimized={true} />
                        <p>AboutMe.txt</p>
                    </div>
                </button>
            </div>

            <div className='absolute flex z-10 bottom-0 w-screen bg-[#2727279f] m-2 rounded-2xl justify-center items-center'>
                <button className='hover:bg-[#5252529f] p-1 rounded-xl'><Image src="/winlogo.png" alt="Logo" width="30" height="30" draggable={false} quality={100} unoptimized={true} /></button>
            </div>
            {<AboutMeWindow /> : ""}
        </>
    )
}


const AboutMeWindow = () => {
    const iconsSize: number = 70;
    return (
        <div className='absolute flex flex-col z-10 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] p-4 bg-[#272727] rounded-2xl'>
            <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between p-2'>
                <h1>AboutMe.txt</h1>
                <button><IconContext.Provider value={{ color: "white" }}>
                          <FiXSquare size="30"/>
                        </IconContext.Provider>
                </button>
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
    )
}