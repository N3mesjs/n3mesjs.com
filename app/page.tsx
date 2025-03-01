"use client"
import { FaInstagram, FaGithub, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


import Link from 'next/link';
import { useState, useRef, useEffect, RefObject } from "react";

const MenuNav = ({ navRef }: { navRef: RefObject<HTMLDivElement | null> }) => {
  return (
    <div className="absolute bg-[hsla(0,0%,9%,1)] rounded-3xl top-1 left-1 h-screen w-[50%] z-10 lg:hidden menu-nav" ref={navRef}>
      <div className="p-3 mt-12 flex flex-col">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/project">
          My Projects
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  const [opacita, setOpacita] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconsSize: number = 70;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }

      if (navRef.current && !navRef.current.contains(event.target as Node) && buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        setMenu(false);
        setOpacita(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const handleButtonClick = (e: React.MouseEvent) => {
    setMenu(!menu);
    setOpacita(!opacita);
    console.log("Button clicked, menu will be:", !menu);
  };

  return (
    <>
      <div className="fixed z-30 left-5 top-5 lg:hidden">
        <button ref={buttonRef} onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={30} height={30}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </button>
      </div>

      {menu ? <MenuNav navRef={navRef} /> : null}

      <main className={opacita ? "opacity-50" : "opacity-100"}>
        <div>
          <nav>
            <div className="absolute flex top-3 left-[50%] translate-x-[-50%] max-lg:hidden">
              <div className="flex justify-center items-center bg-[#161616] rounded-full p-[10px]">
                <Link href="/"><h1 className="text-[20px] font-bold mr-5 title rounded-full p-2">N3mesjs</h1></Link>
                <Link href="/">
                  <div className="flex flex-col p-3 rounded-full items-center nav-link"><span>Home</span><hr /></div>
                </Link>
                <Link href="/about">
                  <div className="flex flex-col p-3 rounded-full items-center nav-link"><span>About</span><hr /></div>
                </Link>
                <Link href="/project">
                  <div className="flex flex-col p-3 rounded-full items-center nav-link"><span>My Projects</span><hr /></div>
                </Link>
              </div>
            </div>
            <div className="absolute flex top-3 left-[100%] translate-x-[-110%] gap-4 bg-[#161616] rounded-full p-3">
              <a href="https://www.instagram.com/delsorbo_alessio/" target="_blank" className="flex items-center bg-[hsl(212,79%,46%)] hover:bg-[hsl(212,54%,28%)] font-bold p-3 rounded-2xl gap-2">
                <FaInstagram size={25} />Instagram
              </a>
              <a href="https://github.com/N3mesjs" target="_blank" className="flex items-center bg-[hsl(212,17%,17%)] hover:bg-[hsl(207,17%,12%)] font-bold p-3 rounded-2xl gap-2">
                <FaGithub size={25} />Github
              </a>
            </div>
          </nav>
          {/* <h1 className="absolute text-[40px] text-center top-[150px] left-[50%] translate-x-[-50%]"><span className="font-bold text-[50px] testoFigo">Work</span> in progress...</h1> */}
          <div className="w-[1350px] m-auto flex flex-col items-center mt-[15em] max-lg:w-[400px]">
            <section>
              <p className="text-[4em] text-center max-lg:text-[2em]">Alessio, but call me <span className="font-bold testoFigo">N3mesjs</span><br />
                I'm a <u>Full Stack</u> developer
              </p>
              <p className="text-[#535353] text-[20px] mt-4 text-center max-lg:text-[20px]">Working to contribute for a better world</p>
            </section>
            <section className="mt-[4em] flex flex-col items-center">
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
        </div>
      </main>
    </>
  );
}