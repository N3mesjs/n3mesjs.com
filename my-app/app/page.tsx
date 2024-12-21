import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="absolute flex w-full justify-center top-3">
          <div className="flex justify-center  items-center bg-[#161616] rounded-full p-[20px]">
            <a href="/"><h1 className="text-[20px] font-bold mr-5 title rounded-full p-2">N3mesjs</h1></a>
            <a href="/">
              <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>Home</span><hr /></div>
            </a>
            <a href="/about">
            <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>About</span><hr /></div>
            </a>
            <a href="/project">
            <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>My Projects</span><hr /></div>
            </a>
          </div>
      </div>

      <nav className="flex items-center justify-end mt-4 mr-4">
        <a href=""><button className="flex items-center bg-[hsl(212,79%,46%)] font-bold p-3 rounded-2xl gap-2"><FaInstagram size={25} />Instagram</button></a>
      </nav>

      <main></main>
    </>
  );
}
