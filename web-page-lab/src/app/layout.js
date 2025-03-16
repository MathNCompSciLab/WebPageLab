import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laboratorio de Ciencia Matematicas y Computacionales",
  description: "Informacion sobre el Laboratio de Cienciencias Matematicas Computacionales(CMyC) en el Centro de Invetigacion de Computo(CIC) dentro del Intituto Politecnico Nacional(IPN)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
      <Navbar/>
      
      
        <header className="header">
          

          <div className="container">
            <h1>Laboratorio de Ciencia Matematicas y Computacionales</h1>
            
              <ul className="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/contact">Contacto</a></li>
              </ul>
            
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 Mi Proyecto Next.js. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
