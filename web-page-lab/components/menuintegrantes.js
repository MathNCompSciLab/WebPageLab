"use client"
import { useState, useRef, useEffect } from 'react';
import "../src/app/globals.css";
import Link from 'next/link';

export default function Menu()
{
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen11, setIsOpen11] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen121, setIsOpen121] = useState(false);
    const [isOpen122, setIsOpen122] = useState(false);
    const [isOpen123, setIsOpen123] = useState(false);


    const dropdownRef = useRef(null);


    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
    
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    return(
      <div>
          <button onClick={() => setIsOpen1(!isOpen1)}>Integrantes</button>

      {isOpen1 && (
        <div className='menu-desplegable'>
          <button onClick={() => setIsOpen11(!isOpen11)}>profesores</button>
            {isOpen11 && (
            <div className='menu-desplegable'>
            <Link href="#">M. en C. Rocio</Link>
            <Link href="#">M. en C. Germán Téllez Castillo</Link>
            <Link href="#">Dr. Juan Carlos Chimal Eguía</Link>
            <Link href="#">Dr. Carlos Aguilar Ibañez</Link>

            </div>
            )}
          
          

          <button onClick={() => setIsOpen12(!isOpen12)}>alumnos</button>
            {isOpen12 && (
            <div className='menu-desplegable'>
            <button onClick={() => setIsOpen121(!isOpen121)}>Licenciatura</button>
              {isOpen121 && (
              <div className='menu-desplegable'>
              <Link href="#">Ismael</Link>
              </div>
              )} 

            <button onClick={() => setIsOpen122(!isOpen122)}>Maestria</button>
              {isOpen122 && (
              <div className='menu-desplegable'>
              <Link href="#">Dafne Coconi</Link>
              <Link href="#">Aldair Cortés</Link>
              <Link href="#">Alan Jiménez</Link>
              <Link href="#">Sergio Pérez</Link>
              <Link href="#">Alejandro Ruiz</Link>
              <Link href="#">Luis Rojo</Link>
              <Link href="#">Luis Farias</Link>
              <Link href="#">Angel Saria</Link>
                
              </div>
              )} 

            <button onClick={() => setIsOpen123(!isOpen123)}>Doctoroda</button>
              {isOpen123 && (
              <div className='menu-desplegable'>
              <Link href="#">Ivan</Link>
              <Link href="#">Alenjandro Cardora</Link>
              <Link href="#">Diana Barragán</Link>
              <Link href="#">Irari Jimenez</Link>

              </div>
              )} 

            </div>
            )}
        </div>
      )}
      </div>
    )

}