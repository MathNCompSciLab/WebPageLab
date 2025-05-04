export default function Preguntas()
{
    return(
        <div className=" text-blue-100 h-full">
            
        <h2 className='text-4xl text-center my-10'>Preguntas frecuentes:</h2>
        <div className='grid grid-cols-1 p-6 gap-25'>
            <div className="p-4  flex flex-col justify-between items-center bg-gradient-to-r from-blue-950 via-sky-900 to-stone-500/10">
                <p className="text-3xl p-4 justify-self-start self-start mx-40 py-10">¿Cómo puedo unirme como investigador posdoctoral?</p>
                <div className="pb-10 self-start mx-50">

                    <p className="text-xl text-left">Publicamos convocatorias periódicas en nuestra web y redes sociales.</p>
                    <p className="text-xl text-left">Requisitos típicos:</p>
                    <ul className="list-disc text-left ml-6">
                        <li>Título de doctorado en áreas afines.</li>
                        <li> Propuesta de investigación alineada con nuestras líneas de trabajo.</li>
                        <li>Disponibilidad para colaborar en proyectos vigentes.</li>
                    </ul>
                </div>
            </div>

            <div className="p-4  flex flex-col justify-between items-center  bg-gradient-to-l from-blue-950 via-sky-900 to-stone-500/10">
            <p className="text-3xl p-4 justify-self-start self-end mx-50 py-10"> ¿Qué áreas de investigación cubre el laboratorio?</p>
                <div className="pb-10 self-end mx-50">
                    <p className="text-xl text-left">Nuestro laboratorio se enfoca en temas interdisciplinarios como:</p>
                    <ul className="list-disc text-left ml-6">
                        <li>Matemáticas aplicadas: Modelado, optimización, ecuaciones diferenciales.</li>
                        <li>Computación científica: Simulaciones numéricas, algoritmos de alto rendimiento.</li>
                        <li>Inteligencia artificial: Aprendizaje automático, ciencia de datos, visión por computadora.</li>
                        <li>Teoría y fundamentos: Matemáticas discretas, teoría de grafos, criptografía.</li>
                    </ul>
                </div>
            </div>

            <div className="p-4  flex flex-col justify-between items-center  bg-gradient-to-r from-blue-950 via-sky-900 to-stone-500/10">
                <p className="text-3xl p-4 justify-self-start self-start mx-40 py-10">¿Puedo proponer un tema para mi tesis o proyecto terminal?</p>
                <div className="pb-10 self-start mx-50">
                    <p className="text-xl text-left">¡Claro! Siempre que el tema tenga relación con nuestras líneas de investigación. </p>
                    <p className="text-xl text-left"> Sugerimos:</p>
                    <ul className="list-disc text-left ml-6">
                        <li>Revisar nuestras publicaciones o proyectos en curso.</li>
                        <li>Contactar a un investigador del laboratorio para asesoría.</li>
                    </ul>
                </div>
            </div>

            <div className="p-4  flex flex-col justify-between items-center  bg-gradient-to-l from-blue-950 via-sky-900 to-stone-500/10 mb-30">
            <p className="text-3xl p-4 justify-self-start self-end mx-50 py-10"> ¿Aceptan estudiantes para servicio social o prácticas profesionales?</p>
                <div className="pb-10 self-end mx-50">
                    <p className="text-xl text-left">Sí. Trabajamos con universidades para integrar estudiantes en proyectos activos.</p>
                    <p className="text-xl text-left">Requisitos:</p>
                    <ul className="list-disc text-left ml-6">
                        <li>Estar matriculado en licenciatura/maestría (según el caso).</li>
                        <li>Conocimientos básicos en matemáticas/programación (dependiendo del proyecto).</li>
                        <li>Compromiso de horas semanales.</li>
                    </ul>
                </div>
            </div>
        
        
        </div>


        </div>


    )

}