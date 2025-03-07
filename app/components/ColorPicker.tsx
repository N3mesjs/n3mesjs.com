import { useState, ChangeEvent, useRef, Dispatch, SetStateAction, RefObject } from 'react';
import Draggable from 'react-draggable';

import { IconContext } from "react-icons";
import { GoX } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";


interface WindowProps {
    setShowState: Dispatch<SetStateAction<boolean>>;
    setHideState: Dispatch<SetStateAction<boolean>>;
    hideState: boolean;
}

export default function ColorPicker ({ setShowState, setHideState, hideState }: WindowProps)  {

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