//import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import Link from 'next/link';
import { DM_Sans} from 'next/font/google';



export const metadata = {
  title: "Laboratorio de Ciencia Matematicas y Computacionales",
  description: "Informacion sobre el Laboratio de Cienciencias Matematicas Computacionales(CMyC) en el Centro de Invetigacion de Computo(CIC) dentro del Intituto Politecnico Nacional(IPN)",
};
const roboto = DM_Sans({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <header className="px-10 text-blue-50 bg-blue-900 py-4 overflow-hidden relative" >
          
          
          <div className="flex justify-center w-full">
            
            <div className="flex flex-col items-center">
              <h1 className="text-3xl inline-flex items-center gap-2">  
                <Image 
                src="/icono.jpg" 
                alt="Promoción 3" 
                width={150}
                height={150}
                className="object-cover h-15 w-15 rounded-4xl"
                priority 
                />
                Laboratorio de Ciencia Matematicas y Computacionales</h1>
              <ul className="nav-links overflow-visible relative">
                <li ><Link href="/">Inicio</Link></li>
                <li><Link href="/Integrantes">Integrantes</Link></li>
                <li><Link href="/proyectos">Proyectos</Link></li>
                <li><Link href="/articulos">Articulos</Link></li>
                <li><Link href="/oportunidades">Oportunidades</Link></li>
                <li><Link href="/docencia">Docencia</Link></li>
                <li><Link href="/seminario">Seminario</Link></li>
                <li><Link href="/preguntas">Preguntas frecuentes</Link></li>
              </ul>
            </div>
              <Image 
              src="/ipn-logo.png" 
              alt="Promoción 3" 
              width={150}
              height={150}
              className="object-cover h-50 w-50 bg-white/50 mask-l-from-0 absolute -top-4 right-0 "
              priority 
              />
            
          </div>
          
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="text-center py-10 text-blue-50 bg-stone-800">
          <div>
            <p>&copy; 2025 Laboratorio de Ciencias Matematicas y Computacionales. Centro de Invetigacion en Computacion. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
