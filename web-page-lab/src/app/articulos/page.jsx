"use client"
import Style from './articulos.module.css';
import { useState} from 'react';


export default function Articulos()
{
    const articulosData = require('../../data/dataArticulos.JSON');
    
    const [isOpen, setIsOpen] = useState("");

    const handleId = (id) => {
        (isOpen === id)? setIsOpen("") : setIsOpen(id);
    }


    

    
    return(
        <div className={Style.containerarticulos}>
    <h2 className={Style.tituloarticulos}> Articulos que hemos publicado</h2>
    {
        articulosData.map((articulo) => (
            <div key={articulo.id} className={Style.articulo}>
                                
                <div className={`${Style.parent} max-md:w-full `}>
                    <div className={Style.div1}><button onClick={() => handleId(articulo.id)} className={Style.boton}>🡻</button></div>
                    <div className={Style.div2} style={{ border: (isOpen==articulo.id) ? '0px' : '' }}><h4>{articulo.titulo}</h4></div>
                    {(isOpen==articulo.id) && (<>
                    <div className={Style.div3}>{articulo.resumen}</div>
                    <div className={Style.div4}>
                        <ul> Autores:
                        {articulo.autores.map((autores, index) => (
                            <li key={index}>{autores}</li>
                        ))}
                        </ul>
                    </div>
                    <div className={Style.div5}><p>Tipo: {articulo.tipo}</p><p>Subtipo: {articulo.subTipo}</p></div>
                    <div className={Style.div6}>Lugar: {articulo.lugar},{articulo.pais}</div>
                    <div className={Style.div7}><p>Vol./Cap.  {articulo.volumen}</p><p>Paginas {articulo.noPaginas}</p></div>
                    <div className={Style.div8}><p>Fecha de inicio: {articulo.inicio}</p><p>Fecha de fin: {articulo.fin}</p></div>
                    <div className={Style.div9}><p>Observaciones: {articulo.observaciones}</p><p>{articulo.ISBN}</p></div>
                    <div className={Style.div10}>Descripcion: {articulo.descripcion}</div>
                    </>)}
                </div>
    
                







              
            </div>
        ))
    }
        </div>



    )

}