"use client"

import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, FirestoreDB } from "./fireBaseAuth.jsx"

import { doc, setDoc, getDocs, collection, query } from "firebase/firestore";

import Image from 'next/image'


import React, { useState, useEffect } from "react"

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState(false);
    const [errUsername, setErrUsername] = useState(false);


    async function GoogleSignUp() {
        const result = await signInWithPopup(auth, provider)
        const docRef = doc(FirestoreDB, "users", result.user.uid); //Doc e come il ref, serve a indicare il path del database e in questo caso richiede un id univoco da dare al documento
        await setDoc(docRef, {                                     //Si puo usare collection e firestore si occupera di assegnare un id univoco
            email: result.user.email,
            username: result.user.displayName,
            photoURL: result.user.photoURL,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrEmail(false);
        setErrUsername(false);

        const queue = query(collection(FirestoreDB, "users"));
        const querySnapshot = await getDocs(queue);
        querySnapshot.forEach((doc) => {
            if (doc.data().email == email) {
                setErrEmail(true)
            } else if (doc.data().username == username) {
                setErrUsername(true)
            }
        })
        if (!errEmail || !errUsername) {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const docRef = doc(FirestoreDB, "users", result.user.uid);
            await setDoc(docRef, {
                email: result.user.email,
                username: username,
                photoURL: UserImage.src
            });
        }
    }


    return (
        <>
            <main className="flex items-center justify-center h-screen bg-[#383838]">
                <div className="p-[20px] rounded-lg bg-[#272727] text-white flex flex-col items-center justify-center w-[400px]">
                    <h1 className="text-[20px] font-bold mb-[20px]">SignIn</h1>
                    <button onClick={GoogleSignUp} className="flex items-center justify-center bg-[#ffffff] px-[20px] py-[10px] text-[#333] rounded-[10px] w-[250px] mb-4"><Image src="/google.png" alt='google image' className="rounded-[10px] mr-[10px]" width={20} height={20} />SignUp with Google</button>
                    <hr className="border-[1px] w-[150px] mb-4" />
                    <form className="flex flex-col justify-center text-black" onSubmit={handleSubmit}>
                        <input className="inpt" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                        <input className="inpt" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" />
                        <input className="inpt" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                        <div className="flex justify-center">
                            <button type="submit" className="w-[150px] rounded-[20px] py-[7px] px-[15px] bg-white">SignUp</button>
                        </div>
                    </form>
                    {errEmail ? <p className="text-red font-bold">Un account con questa email esiste giá!</p> : <p></p>}
                    {errUsername ? <p className="text-red font-bold">Un account con questo username esiste giá!</p> : <p></p>}
                </div>

            </main>
        </>
    )
}
