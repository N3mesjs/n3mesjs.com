"use client"

import Image from 'next/image';
import React, { useState, useEffect, useRef, MouseEventHandler, Dispatch, SetStateAction, RefObject } from 'react';

import ColorPicker from './components/ColorPicker';
import AboutMeWindow from './components/AboutMeWindow';
import Icona from './components/Icona';
import WindowsMenu from './components/WinMenu';
import ContextMenu from './components/ContextMenu';

export default function Windows() {
    const [showAboutMe, setShowAboutMe] = useState<boolean>(false);
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
    const [hideAboutMe, setHideAboutMe] = useState<boolean>(false);
    const [hideColorPicker, setHideColorPicker] = useState<boolean>(false);

    const [showWinMenu, setShowWinMenu] = useState<boolean>(false);

    const [iconeOrdine, setIconeOrdine] = useState<string[]>([]);
    const [listaIcone, setListaIcone] = useState<any>([]);

    const [rightMenu, setRightMenu] = useState<boolean>(false);
    const [menuX, setMenuX] = useState<number>(0);
    const [menuY, setMenuY] = useState<number>(0);

    const winRef = useRef<HTMLDivElement | null>(null);
    const winButton = useRef<HTMLButtonElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    // Quando una finestra viene aperta, aggiungi la chiave all'array (se non presente)
    useEffect(() => {
        if (showAboutMe && !iconeOrdine.includes('about')) {
            setIconeOrdine(prev => [...prev, 'about']);
        } else if (!showAboutMe && iconeOrdine.includes('about')) {
            setIconeOrdine(prev => prev.filter(key => key !== 'about'));
        }
    }, [showAboutMe]);

    useEffect(() => {
        if (showColorPicker && !iconeOrdine.includes('colorpicker')) {
            setIconeOrdine(prev => [...prev, 'colorpicker']);
        } else if (!showColorPicker && iconeOrdine.includes('colorpicker')) {
            setIconeOrdine(prev => prev.filter(key => key !== 'colorpicker'));
        }
    }, [showColorPicker]);


    // Ora costruisci l'array di icone in base all'ordine registrato
    // potrei non usare useEffect e fare direttamente la mappatura dato che deriva da iconeOrdine, e quindi react si occupa di fare il render a ogni suo cambiamento
    useEffect(() => {
        setListaIcone(iconeOrdine.map(key => {
            if (key === 'about')
                return <Icona key="about" setHideState={setHideAboutMe} Immagine="txtIcon.png" Title="AboutMe.txt" />;
            else if (key === 'colorpicker')
                return <Icona key="colorpicker" setHideState={setHideColorPicker} Immagine="color-picker.png" Title="colorpicker.tsx" />;
            else return null
        }));
    }, [iconeOrdine]);

    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if ((winRef.current && !winRef.current.contains(e.target as Node)) || (winButton.current && winButton.current.contains(e.target as Node))) {
                setShowWinMenu(false);
            }
        }

        if (showWinMenu) {
            addEventListener('mousedown', handleMouseDown);
        }

        document.addEventListener('contextmenu', event => {
            event.preventDefault();
        });

        return () => {
            removeEventListener('mousedown', handleMouseDown);
        }
    });

    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
                setRightMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleRightClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setMenuX(e.pageX);
        setMenuY(e.pageY);
        setRightMenu(true);
    }


    return (
        <>
            <div className='w-screen h-screen'>
                <Image src="/wallpaper.jpg" alt="Background" fill={true} draggable={false} quality={100} unoptimized={true} className='object-cover' />
            </div>
            <div className='w-full h-screen'>
                <div className='absolute flex flex-col top-1 left-1'>
                    <button onDoubleClick={() => setShowAboutMe(true)} onContextMenu={handleRightClick}>
                        <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                            <Image src="/txtIcon.png" alt="Logo" width={70} height={70} draggable={false} quality={100} unoptimized={true} />
                            <p>AboutMe.txt</p>
                        </div>
                    </button>

                    <button onDoubleClick={() => setShowColorPicker(true)} onContextMenu={handleRightClick}>
                        <div className='flex flex-col items-center p-2 hover:bg-[#2727279f] rounded-2xl m-2'>
                            <Image src="/color-picker.png" alt="Logo" width={70} height={70} draggable={false} quality={100} unoptimized={true} />
                            <p>colorpicker.tsx</p>
                        </div>
                    </button>
                </div>

                <div className='absolute bottom-[0.7em] w-[99%] bg-[#2727279f] rounded-2xl left-1/2 -translate-x-1/2'>
                    <div className='flex justify-start items-center gap-4'>
                        {/* Inserendo e.stopPropagation() in un handler onMouseDown sul bottone, 
                        l'evento mousedown non si propaga al listener globale. In questo modo, 
                        quando fai click il bottone esegue il suo onClick senza che il listener globale lo intercetti. 
                        Quindi, l'evento non viene "sovrapposto" e il toggle del menu funziona come previsto. */}

                        <button className='hover:bg-[#5252529f] p-2 rounded-xl' onClick={(e) => setShowWinMenu(prev => !prev)} onMouseDown={(e) => e.stopPropagation()} ref={winButton}>
                            <Image src="/winLogo.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                        </button>
                        {listaIcone}
                        {/* In React, se una variabile contiene un array di elementi JSX, puoi semplicemente inserirlo in una porzione di JSX (usando le parentesi graffe) 
                        e React si occuperà di renderizzarne ciascun elemento nell'array. 
                        Quindi, se listaIcone è un array di componenti, scrivendo {listaIcone} verranno renderizzati tutti gli elementi al suo interno senza ulteriori accorgimenti. */}
                    </div>
                </div>

                {showAboutMe ? <AboutMeWindow setShowState={setShowAboutMe} setHideState={setHideAboutMe} hideState={hideAboutMe} /> : null}
                {showColorPicker ? <ColorPicker setShowState={setShowColorPicker} setHideState={setHideColorPicker} hideState={hideColorPicker} /> : null}
                {showWinMenu ? <WindowsMenu winRef={winRef} /> : null}
                {rightMenu ? <ContextMenu x={menuX} y={menuY} reference={divRef} /> : null}
            </div>
        </>
    )
}
