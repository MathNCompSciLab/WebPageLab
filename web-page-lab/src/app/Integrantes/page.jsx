import Image from "next/image";
import Link from "next/link";
export default function Integrantes() {
    
  const alumnosData = require('../../../public/data/dataAlumnos.JSON');
  
  const profesoresData = require('../../../public/data/dataProfesores.json');


    return (
        <div className="text-white text-center">

        <h1 className="my-5 text-3xl ">Profesores</h1>
        
        {
            profesoresData.map(profesor => (
                
                    <div key={profesor.id} className="flex justify-center py-5 gap-5">
                        <Link href={`/Integrantes/profesores/${profesor.id}`} className="w-5/12 flex justify-between border-t border-slate-600 p-10 items-center hover:bg-blue-950/50 duration-700 max-md:w-full">
                        
                        

                        <Image 
                        src={profesor.imagen} 
                        alt={profesor.nombre} 
                        width={200}
                        height={200}
                        className=" rounded-full max-md:w-30 max-md:h-30"
                        priority 
                        />
                        <div className="text-base">
                            <p>{profesor.cargo}</p>
                            <h1 className="">{profesor.nombre}</h1>
                            
                            <p>Contacto: {profesor.contacto}</p>
                        </div>
                        
                        </Link>
                    </div>
            ))
        }
        
        <h1 className="my-5 text-3xl ">Alumnos Inscritos este semestre</h1>

        {
            alumnosData.map(alumno => (
                 <div key={alumno.id} className="flex justify-center py-5 gap-5">
                        <Link href={`/Integrantes/alumnos/${alumno.id}`} className="w-4/12 flex justify-between border-t border-slate-600 p-10 items-center hover:bg-blue-500/30 duration-700 max-md:w-full">
                        <Image 
                        src={alumno.imagen} 
                        alt={alumno.nombre} 
                        width={100}
                        height={100}
                        className=""
                        priority 
                        />
                        <div className="text-sm">
                            <h1 className="">{alumno.nombre}</h1>
                            <p>{alumno.cargo}</p>
                            <p>Contacto: {alumno.contacto}</p>
                        </div>
                        
                        </Link>
                    </div>
            ))
        }
        </div>
    )
}