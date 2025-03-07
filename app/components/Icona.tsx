import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface IconaProps {
    setHideState: Dispatch<SetStateAction<boolean>>;
    Immagine: string;
    Title: string;
}


export default function Icona({ setHideState, Immagine, Title }: IconaProps) {
    return (
        <button className='hover:bg-[#5252529f] p-2 rounded-xl' onClick={() => setHideState(false)}>
            <div className="flex items-center">
                <Image src={Immagine} alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                <p>{Title}</p>
            </div>
        </button>
    );
}