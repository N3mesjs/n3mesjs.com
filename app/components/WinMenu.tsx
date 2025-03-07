import { RefObject } from "react";
import Image from "next/image";

interface WinMenuProps {
    winRef: RefObject<HTMLDivElement | null>;
}

export default function WinMenu({ winRef }: WinMenuProps) {
    return (
        <div className="absolute bottom-0 left-[1em] p-[3em] rounded-2xl bg-[#2c2c2c] mb-[4.5rem] flex flex-col justify-center w-[26em]" ref={winRef} onClick={}>
            <div className="flex justify-between items-center w-full mb-4">
                <h1 className="font-bold text-[1.5em]">My Socials</h1>
                <button className="p-2 rounded-xl bg-[#292929] text-[0.9em]">All &gt;</button>
            </div>
            <div className="flex gap-4 flex-wrap mb-[4em]">
                <a className="hover:bg-[#292929] p-2 rounded-xl w-[6em] flex flex-col items-center flex-wrap" href="https://www.instagram.com/delsorbo_alessio/" target="_blank">
                    <Image src="/instaLogo.png" alt="Instagram" width={32} height={32} />
                    <p>Instagram</p>
                </a>
                <a className="hover:bg-[#292929] p-2 rounded-xl w-[6em] flex-wrap flex flex-col items-center" href="https://github.com/N3mesjs" target="_blank">
                    <Image src="/gitLogo.png" alt="Instagram" width={32} height={32} />
                    <p>GitHub</p>
                </a>
                <a className="hover:bg-[#292929] p-2 rounded-xl w-[6em] flex flex-col items-center flex-wrap" href="https://twitch.com/N3mesjs" target="_blank">
                    <Image src="/twitchLogo.png" alt="Instagram" width={32} height={32} />
                    <p>Twitch</p>
                </a>
            </div>
            <div className="absolute bg-[#202325] bottom-0 left-0 rounded-b-2xl w-full py-[1em] px-[2em] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/N3meLogo.jpg" alt="Logo" width={32} height={32} className="rounded-full" /><p>N3mesjs</p>
                </div>
                <div>
                    <Image src="/turnOff.png" alt="Turn Off" width={24} height={24} />
                </div>
            </div>
        </div>
    );
}