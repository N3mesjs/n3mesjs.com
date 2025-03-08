"use client"

import { useRef, Dispatch, SetStateAction, RefObject, useState, useEffect } from 'react';

import { auth } from "./FireBaseChat/fireBaseAuth.jsx";
import { onAuthStateChanged } from "firebase/auth";
import SignUp from "./FireBaseChat/SignUp.jsx";
import ChatRoom from "./FireBaseChat/ChatRoom.jsx";
import Image from 'next/image';
import Draggable from 'react-draggable';


import { IconContext } from "react-icons";
import { GoX } from "react-icons/go";
import { BsDashLg } from "react-icons/bs";

interface WindowProps {
    setShowState: Dispatch<SetStateAction<boolean>>;
    setHideState: Dispatch<SetStateAction<boolean>>;
    hideState: boolean;
}

export default function Chat({ setShowState, setHideState, hideState }: WindowProps) {

    const nodeRef = useRef<HTMLDivElement>(null);
    const iconsSize: number = 70;
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (userAuth: any) => {
            setUser(userAuth);
        });
    }, [])

    return (
        <Draggable axis="both" handle=".handle" nodeRef={nodeRef as RefObject<HTMLElement>}>
            <div ref={nodeRef}>
                <div className={`absolute flex flex-col z-10 left-1/2 top-0 -translate-x-1/2 -translate-y-[100%] p-[4em] bg-[#272727] rounded-2xl ${hideState ? "hidden" : ""}`}>
                    <div className='absolute flex top-0 left-0 bg-[#000] w-full justify-between p-2 handle cursor-pointer'>
                        <div className='flex items-center gap-1'>
                            <Image src="/txtIcon.png" alt="Logo" width={30} height={30} draggable={false} quality={100} unoptimized={true} />
                            <h1>AboutMe.txt</h1>
                        </div>
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
                    {user ? <ChatRoom /> : <SignUp />}
                </div>
            </div>
        </Draggable>
    )
}