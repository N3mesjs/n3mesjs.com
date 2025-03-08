import React, { useState, useEffect } from 'react';

import { database } from './fireBaseAuth';
import { ref, set, onValue, get } from "firebase/database";
import { auth } from "./fireBaseAuth.jsx"

export default function popUp(){

    const [arrayUtenti, setArrayUtenti] = useState([])
    const [email, setEmail] = useState("")
    useEffect(() =>{
    }, [])
    return (
        <>
            <div className="popup flex flex-col text-white bg-[#1f1f1f] p-[20px] rounded-2xl justify-center items-center">
                <h2 className="font-bold text-[30px]">Menu Crezione Chat</h2>
                <form className="flex flex-col">
                    <label htmlFor="chatname" className="mb-[10px]">Nome della chat<br />
                    <input className="focus:outline-sky-600 p-[10px] mb-[20px] text-black" type="text" id="chatname" placeholder="Nome Chat"/>
                    </label>
                    <label className="mb-[10px]">Membri: inserisci l'indirizzo e-mail dei membri che vuoi aggiungere(metti uno spazio tra ogni email)</label>
                    <input className="focus:outline-sky-600 p-[10px] mb-[20px] text-black" type="text" placeholder="E-mail"/>

                </form>
            </div>
        </>
    )
}