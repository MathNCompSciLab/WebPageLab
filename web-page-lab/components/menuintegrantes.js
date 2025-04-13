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
    setOpenMenus((prevMenus) => ({
      ...prevMenus,
      [menu]: !prevMenus[menu], // Alterna el estado del menú seleccionado
    }));
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
                  <Link href="#">Ismael</Link>
                </div>
              )}

              <button onClick={() => toggleMenu("maestria")}>Maestría</button>
              {openMenus["maestria"] && (
                <div className="menu-desplegable">
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

              <button onClick={() => toggleMenu("doctorado")}>Doctorado</button>
              {openMenus["doctorado"] && (
                <div className="menu-desplegable">
                  <Link href="#">Ivan</Link>
                  <Link href="#">Alejandro Cardora</Link>
                  <Link href="#">Diana Barragán</Link>
                  <Link href="#">Irari Jimenez</Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}