import Image from "next/image";
export default function NavbarGob(){
    return(
        <nav className="Gob">
        <div>
        <a href="https://www.gob.mx/">
        <Image
        src="/logo_blanco.svg" // Ruta de la imagen
        alt="gob"
        width={100}
        height={100} 
        />
        </a>
        </div>

        <div >
              <ul>
                <li><a href="https://www.gob.mx/tramites">Trámites</a></li>
                <li><a href="https://www.gob.mx/gobierno">Gobierno</a></li>
                <li><a href="https://www.gob.mx/busqueda">Búsqueda<i class="icon-search"></i></a></li>
              </ul>
          </div>
    </nav>

    )
    


}