"use client"

import { FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { useState, useRef, useEffect, RefObject } from "react";

const MenuNav = ({ navRef }: { navRef: RefObject<HTMLDivElement> }) => {
  return (
    <div className="absolute bg-[hsla(0,0%,9%,1)] rounded-3xl top-1 left-1 h-screen w-[50%] z-40 lg:hidden" ref={navRef}>
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
  const [menu, setMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div>
      <nav>
        <div className="absolute z-50 left-5 top-5 lg:hidden">
          <button onClick={() => setMenu(!menu)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={30} height={30}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </div>

        {menu ? <MenuNav navRef={navRef} /> : null}

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

        <div className="flex justify-end mt-4 mr-4 gap-4">
          <a href="https://www.instagram.com/delsorbo_alessio/" target="_blank" className="flex items-center bg-[hsl(212,79%,46%)] hover:bg-[hsl(212,54%,28%)] font-bold p-3 rounded-2xl gap-2">
            <FaInstagram size={25} />Instagram
          </a>
          <a href="https://github.com/N3mesjs" target="_blank" className="flex items-center bg-[hsl(212,17%,17%)] hover:bg-[hsl(207,17%,12%)] font-bold p-3 rounded-2xl gap-2">
            <FaGithub size={25} />Github
          </a>
        </div>
      </nav>
      <h1 className="absolute text-[40px] text-center top-[150px] left-[50%] translate-x-[-50%]"><span className="font-bold text-[50px] testoFigo">Work</span> in progress...</h1>
    </div>
  );
}