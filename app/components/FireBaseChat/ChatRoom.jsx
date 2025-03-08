"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { RealTimeDB, auth, FirestoreDB } from './fireBaseAuth';

import { ref, set, onValue, get } from "firebase/database";
import { getDocs, collection, query } from "firebase/firestore";

import { BsJustify } from "react-icons/bs";
import PopUp from "./PopUp.jsx"

export default function Page() {

    const [text, setText] = useState('');
    const [username, setUsername] = useState('');
    const [pfp, setPFP] = useState("")
    const [id, setId] = useState(0);
    const [messaggi, setMessaggi] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
    const bottomChat = useRef();
    const outsideRef = useRef();

    const messageRef = ref(RealTimeDB, "messaggi/")
    const idRef = ref(RealTimeDB, "ID/");

    useEffect(() => {

        // Controllo se esiste ID, se non esiste lo creo
        get(idRef).then((snapshot) => {
            if (!snapshot.exists()) {
                set(idRef, 0)
            } else {
                setId(Number(snapshot.val()));
            }
        });

        // Aggiorno l'array messaggi con i valori dell'oggetto snapshot che ha il valore dei messagggi/ nel db
        onValue(messageRef, (snapshot) => {
            if (snapshot.exists()) {
                let data = snapshot.val();
                setMessaggi(Object.values(data));
            }
        });
        onValue(idRef, (snapshot) => {
            setId(Number(snapshot.val()));
        });

        const q = query(collection(FirestoreDB, "users"));
        getDocs(q).then(querySnapShot => {
            querySnapShot.forEach((doc) => {
                if (doc.data().email == auth.currentUser.email) {
                    setUsername(doc.data().username)
                    setPFP(doc.data().photoURL)
                }
            })
        })


        // in caso di dubbi guarda: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

        const handleClickOutside = (event) => { // alla funzione in se viene passato event che ci viene fornito dal browser
            if (outsideRef.current && !outsideRef.current.contains(event.target)) { //controllo che il ref non sia vuoto e grazie all'event posso vedere se il target é contenuto nel ref, quindi controllo il ref e uso contains per vedere se il target dell'evento é contenuto
              setShowDrop(false)
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside); // Creo un event listener

        return () => { // nel hook useEffect é buona usanza integrare un return che pulisce tutti gli eventListener
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    useEffect(() => {
        bottomChat.current.scrollIntoView(); //il setRef ha un suo attributo nel html: ref cosi il useRef prende il valore del tag html e puo accedere a diverese proprieta del tag in questo caso ad scrollIntoView
    }, [messaggi]) //eseguo il codice ogni volta che messaggi cambia quindi non a ogni render

    function handleSubmit(e) {
        e.preventDefault();
        if(text !== ''){
            // Prendo l'ID e lo assegno a id
            set(ref(RealTimeDB, `messaggi/${id}/`), {
                testo: text,
                author: auth.currentUser.email,
                authorUsername: username,
                authorPFP: pfp
            }).then(() => {
                set(ref(RealTimeDB, "ID/"), id + 1);
                // Resetto il testo nell'input
                setText('');
            })
            // Incremento l'ID
        }
    };

    return (
        <>
            <main className="flex flex-col h-screen flex-wrap">
                <nav className="flex justify-between p-[10px] bg-violet-950 text-white items-center w-full sticky top-0 h-[10%]">
                    <button className="border-2 border-white rounded-[10px] p-1"><BsJustify size={50} /></button>
                    <h2 className="text-[40px] font-bold">Chat App</h2>
                    <button ref={outsideRef} className='font-bold text-[20px] hover:bg-violet-900 px-[15px] py-[7px] rounded-3xl' onClick={() => setShowDrop(!showDrop)}>DropDown Menu🔽 {showDrop ? <DropDownMenu /> : null} </button>
                    <div className="flex items-center gap-3">
                        <button className='flex items-center gap-3 mr-[15px] bg-violet-800 p-3 rounded-3xl hover:bg-violet-900'><Image src={pfp == "" ? "/user.png" : pfp} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />{username}</button>
                        <button className="border-2 rounded-[20px] px-[21px] py-[7px] mr-[10px] bg-[#000] text-white border-transparent hover:text-black hover:bg-white hover:border-black" onClick={LogOut}>LogOut</button>
                    </div>
                </nav>

                <section className="flex h-[90%]">
                    <div className='w-[15%] overflow-auto flex flex-col items-center'>
                        <h1 className='text-[30px] font-bold'>LE TUE CHAT</h1>
                        <div className='flex-grow'>

                        </div>
                        <div className="mb-4">
                            <button className="px-[15px] py-[7px] border-2 border-black rounded-[10px]" onClick={creaChat}>Aggiungi Chat</button>
                        </div>
                    </div>
                    <div className="flex flex-col w-[85%]">
                        <div className="text-black overflow-auto bg-[rgba(143,143,143,0.36)] flex-grow">
                            {/* Qui uso una map in modo da fare una funzione per ogni elemento dell'array messaggio, e creo una componente per ogni elemento */}
                            {messaggi.map((msg, i) => (
                                <Messaggio testo={msg.testo} author={msg.author} pfp={msg.authorPFP} username={msg.authorUsername} key={i} />
                            ))}
                            <div ref={bottomChat}></div>
                        </div>
                        <footer className="text-white bg-black w-full">
                            <form>
                                <input type="text" className='bg-gray-900 p-[20px] w-[80%] focus:outline-none' placeholder='type you text here...' value={text} onChange={(e) => setText(e.target.value)}></input>
                                <button type="submit" className="w-[20%]" onClick={handleSubmit}>✈️</button>
                            </form>
                        </footer>
                    </div>
                </section>
                {showPopUp ? <PopUp /> : null}
            </main>
        </>
    );

    function Messaggio(props) {
        if (auth.currentUser.email == props.author) {
            return (
                <>
                    <div className='flex justify-end items-center p-3'>
                        <div className="mr-[10px] bg-[#141414] text-white p-2 rounded-lg">
                            {props.username}<br />
                            {props.testo}
                        </div>
                        <Image src={props.pfp} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='flex items-center p-3'>
                        <div className="mr-[10px] bg-[#141414] text-white p-2 rounded-lg">
                            {props.username}<br />
                            {props.testo}
                        </div>
                        <Image src={props.pfp} alt='Profile Pic' className="rounded-[50px]" width={50} height={50} />
                    </div>
                </>
            )
        }
    }

    function LogOut() {
        auth.signOut().catch((error) => {
            console.log('An error occurred:', error);
        });
    }

    function creaChat() {
        if (showPopUp) {
            setShowPopUp(false)
        } else {
            setShowPopUp(true)
        }
        console.log(showPopUp)
    }

    function DropDownMenu() {
        return (
            <>
                <div className='absolute bg-black p-3 rounded-3xl mt-10'>
                    <ul>
                        <li>Chico</li>
                        <li>Chico</li>
                        <li>Chico</li>
                    </ul>
                </div>

            </>
        )
    }
}