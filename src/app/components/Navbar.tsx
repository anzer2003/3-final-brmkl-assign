'use client';
import Link from "next/link";
import { useState } from "react";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <nav className="bg-sky-950 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold ml-20"> Anzer.
            </a>
            <div className={`${isOpen?'flex':'hidden'}flex-col text-lg md:flex-row font-md`}>
                <Link href="/" className="mx-2 hover:text-sky-500">
                Home
                </Link>
                <Link href="/" className="mx-2 hover:text-sky-500">
                About
                </Link>
                <Link href="/" className="mx-2 hover:text-sky-500">
                Education
                </Link>
                <Link href="/" className="mx-2  hover:text-sky-500">
                Skills
                </Link>
                <Link href="/" className="mx-2  hover:text-sky-500">
                Contact
                </Link>
            </div>
            <div className="md:hidden flex item-centre">
                <button onClick={()=>{
                    setIsOpen(!isOpen)
                }}></button>
                </div>
        </div>
    </nav>
    );
};