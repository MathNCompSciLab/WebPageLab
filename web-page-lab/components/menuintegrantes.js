"use client"
import { useState, useRef, useEffect } from 'react';
import "../src/app/globals.css";
import Link from 'next/link';

export default function Menu() {
  const [openMenus, setOpenMenus] = useState({}); // Controla qué menús están abiertos
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenus({}); // Cierra todos los menús al hacer clic fuera
        
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenus((prevMenus) => {
      console.log(prevMenus);
      return {
        ...prevMenus,
        [menu]: !prevMenus[menu], 
      }
    });

  };

  return (
    <div ref={dropdownRef}>
      <button onClick={() => toggleMenu("integrantes")}>Integrantes</button>

      {openMenus["integrantes"] && (
        <div className="menu-desplegable">
          <button onClick={() => toggleMenu("profesores")}>Profesores</button>
          {openMenus["profesores"] && (
            <div className="menu-desplegableprofesores">
              <Link href="/Integrantes/profesores/rocio">M. en C. Rocio</Link>
              <Link href="/Integrantes/profesores/german-tellez">M. en C. Germán Téllez Castillo</Link>
              <Link href="/Integrantes/profesores/juan-carlos">Dr. Juan Carlos Chimal Eguía</Link>
              <Link href="/Integrantes/profesores/carlos-fernando">Dr. Carlos Aguilar Ibañez</Link>
            </div>
          )}

          <button onClick={() => toggleMenu("alumnos")}>Alumnos</button>
          {openMenus["alumnos"] && (
            <div className="menu-desplegablealumnos">
              <button onClick={() => toggleMenu("licenciatura")}>
                Licenciatura
              </button>
              {openMenus["licenciatura"] && (
                <div className="menu-desplegable">
                  <Link href="/Integrantes/alumnos/licenciatura-1">Ismael</Link>
                </div>
              )}

              <button onClick={() => toggleMenu("maestria")}>Maestría</button>
              {openMenus["maestria"] && (
                <div className="menu-desplegable">
                  <Link href="/Integrantes/alumnos/maestria-1">Dafne Coconi</Link>
                  <Link href="/Integrantes/alumnos/maestria-2">Aldair Cortés</Link>
                  <Link href="/Integrantes/alumnos/maestria-3">Alan Jiménez</Link>
                  <Link href="/Integrantes/alumnos/maestria-4">Sergio Pérez</Link>
                  <Link href="/Integrantes/alumnos/maestria-5">Alejandro Ruiz</Link>
                  <Link href="/Integrantes/alumnos/maestria-6">Luis Rojo</Link>
                  <Link href="/Integrantes/alumnos/maestria-7">Luis Farias</Link>
                  <Link href="/Integrantes/alumnos/maestria-8">Angel Saria</Link>
                </div>
              )}

              <button onClick={() => toggleMenu("doctorado")}>Doctorado</button>
              {openMenus["doctorado"] && (
                <div className="menu-desplegable">
                  <Link href="/Integrantes/alumnos/doctorado-1">Ivan</Link>
                  <Link href="/Integrantes/alumnos/doctorado-2">Alejandro Cardora</Link>
                  <Link href="/Integrantes/alumnos/doctorado-3">Diana Barragán</Link>
                  <Link href="/Integrantes/alumnos/doctorado-4">Irari Jimenez</Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}