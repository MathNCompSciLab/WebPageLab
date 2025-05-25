"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function MenuMovil() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className='bg-gray-200 h-16 fixed w-full z-1000 md:hidden '>

        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-gray-200 relative top-4 left-4 z-100 ">
            <Image src="/iconmenu.svg" alt='menu' width={40} height={40} className="object-cover" />
        </button>

        </div>
        {
            (isOpen) && (
                <nav className="md:hidden flex flex-col bg-blue-500/70 p-4 fixed top-16 left-0 w-full z-100 h-full/2 text-lg gap-10 text-white" >
                    <button onClick={() => setIsOpen(!isOpen)} className='text-left'>

                    <Link href="/">
                        <div className=" p-1 ">Inicio</div>
                    </Link>
                    <Link href="/Integrantes">
                        <div className="p-1 bg-blue-900/50 ">Integrantes</div>
                    </Link>
                    <Link href="/proyectos">
                        <div className="p-1 ">Proyectos</div>
                    </Link>
                    <Link href="/articulos">
                        <div className="p-1 bg-blue-900/50">Articulos</div>
                    </Link>
                    <Link href="/oportunidades">
                        <div className="p-1 ">Oportunidades</div>
                    </Link>
                    <Link href="/docencia">
                        <div className="p-1 bg-blue-900/50">Docencia</div>
                    </Link>
                    <Link href="/seminario">
                        <div className="p-1 ">Seminarios</div>
                    </Link>
                    <Link href="/preguntas">
                        <div className="p-1 bg-blue-900/50">Preguntas</div>
                    </Link>
                    </button>
                </nav>
            )
        }
        </>
    );
}
