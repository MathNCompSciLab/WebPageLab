//import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import Link from 'next/link';
import Menuintegrantes from "../../components/menuintegrantes";

export const metadata = {
  title: "Laboratorio de Ciencia Matematicas y Computacionales",
  description: "Informacion sobre el Laboratio de Cienciencias Matematicas Computacionales(CMyC) en el Centro de Invetigacion de Computo(CIC) dentro del Intituto Politecnico Nacional(IPN)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        
      
       
      
        <header className="header">
          

          <div className="container">
            <h1>Laboratorio de Ciencia Matematicas y Computacionales</h1>
            
              <ul className="nav-links">
                <li><Link href="/">Inicio</Link></li>
                <Menuintegrantes/> 
                <li><Link href="/proyectos">Proyectos</Link></li>
                <li><Link href="/articulos">Articulos</Link></li>
                <li><Link href="/oportunidades">Oportunidades</Link></li>
                <li><Link href="/docencia">Docencia</Link></li>
                <li><Link href="/seminario">Seminario</Link></li>
                <li><Link href="/preguntas">Preguntas frecuentes</Link></li>


              </ul>
            
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Laboratorio de Ciencias Matematicas y Computacionales. Centro de Invetigacion en Computacion. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
