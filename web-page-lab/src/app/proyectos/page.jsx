"use client"
import Style from './proyectos.module.css';
import { useState} from 'react';
import proyectosData from '@/data/dataProyectos.JSON';


export default function Proyectos()
{
    
    const [isOpen, setIsOpen] = useState("");

    const handleId = (id) => {
        (isOpen === id)? setIsOpen("") : setIsOpen(id);
    }
    const Colaboradores = (participantes) => {
        const nombres = participantes?.map((integrante) => integrante.nombre)
        nombres.shift(); 
        return nombres.join(", ");

    }

    
    return(
        <div className={Style.containerproyectos}>
    <h2 className={Style.tituloproyectos}>Proyectos en los que hemos trabajado</h2>
    {
        proyectosData.map((proyecto) => (
            <div key={proyecto.id} className={`${Style.proyecto}`}>
                <div className={`${Style.parent} max-md:w-full `}>
                    <div className={Style.div1}><button onClick={() => handleId(proyecto.id)} className={Style.boton}>🡻</button></div>
                    <div className={Style.div2} style={{ border: (isOpen==proyecto.id) ? '0' : '' }}><h4>{proyecto.titulo}</h4></div>
                {(isOpen==proyecto.id) && (<>
                    <div className={Style.div3}>{proyecto.descripcion}</div>
                    <div className={Style.div4}>Fecha de inicio: {proyecto.fechaInicio}</div>
                    <div className={Style.div5}>Fecha de finalización: {proyecto.fechaFin}</div>
                    <div className={Style.div6}>Responsable directo: {proyecto.participantes[0].nombre}</div>
                    <div className={Style.div7}>Institucion: {proyecto.institucion}</div>
                    <div className={Style.div8}>Colaboradores: { Colaboradores(proyecto.participantes)}
                    </div>
                </>
                )}
                    </div>
                

            </div>
        ))
    }

        </div>



    )

}