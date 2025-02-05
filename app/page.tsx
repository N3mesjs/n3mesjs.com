import { FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <div className="absolute flex top-3 left-[50%] translate-x-[-50%]">
          <div className="flex justify-center  items-center bg-[#161616] rounded-full p-[10px]">
            <Link href="/"><h1 className="text-[20px] font-bold mr-5 title rounded-full p-2">N3mesjs</h1></Link>
            <Link href="/">
              <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>Home</span><hr /></div>
            </Link>
            <Link href="/about">
              <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>About</span><hr /></div>
            </Link>
            <Link href="/project">
              <div className="flex flex-col p-3 rounded-full items-center nav-link "><span>My Projects</span><hr /></div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end mt-4 mr-4 gap-4">
            <a href="https://www.instagram.com/delsorbo_alessio/" target="_blank" className="flex items-center bg-[hsl(212,79%,46%)] hover:bg-[hsl(212,54%,28%)] font-bold p-3 rounded-2xl gap-2">
              <FaInstagram size={25} />Instagram
            </a>
            <a href="https://github.com/N3mesjs" target="_blank" className="flex items-center bg-[hsl(212,17%,17%)] hover:bg-[hsl(207,17%,12%)] font-bold p-3 rounded-2xl gap-2">
              <FaGithub size={25} />Github
            </a>
        </div>
      </nav>
      <h1 className="absolute text-[40px] text-center top-[150px] left-[50%] translate-x-[-50%]"><span className="font-bold text-[50px] testoFigo">Work</span> in progress...</h1>
      <iframe src="https://player.twitch.tv/?channel=n3mesjs&parent=localhost" height={378} width={620} allowFullScreen={true}></iframe>
    </div>
  );
}
