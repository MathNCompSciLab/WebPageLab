import Image from "next/image";
export default function Oportunidades()
{
    return(
      <div className="text-center text-blue-100 h-full">
        <div className="my-10 w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-100 text-center mb-4">
        Que mas ofrecemos?
      </h1>
      <p className="px-10">En nuestro laboratorio, fomentamos la colaboración con estudiantes, investigadores y profesionales 
        para impulsar el desarrollo de proyectos innovadores en ciencias matemáticas y 
        computacionales. Te invitamos a explorar las siguientes oportunidades:</p>
        </div>
        <div className="grid grid-cols-2  gap-4 text-left items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-100 text-center mb-10" > Servicio social y Practicas profecionales</h2>
            <p className="px-10">Oportunidad para estudiantes de licenciatura que desean aplicar sus 
              conocimientos en proyectos reales, contribuyendo al impacto social y científico del laboratorio. 
              Las actividades están alineadas con las necesidades del laboratorio y los intereses del estudiante, 
              brindando experiencia práctica y vinculación profesional.
            </p>
            <p className="px-10">
            Espacio para estudiantes de licenciatura o maestría que requieren cumplir con créditos profesionales. 
            Los participantes trabajan en proyectos específicos bajo la guía de investigadores, adquiriendo habilidades 
            técnicas y metodológicas en áreas como:
            </p>
            <ul className="list-disc text-left mx-20 my-5">
              <li>Modelado matemático.</li>
              <li>Inteligencia artificial y ciencia de datos.</li>
              <li> Optimización y algoritmos.</li>
            </ul>

          </div>
          <div>
            <Image 
                        src="/Laboratorio/11.jpg" 
                        alt="Promoción 3" 
                        width={800}
                        height={500}
                        className="object-cover mask-radial mask-radial-at-left mask-radial-from-10%  mask-radial-to-100% "
                        priority 
                        />
          
          </div>
          <div>
            <Image 
                        src="/Laboratorio/4.jpg" 
                        alt="Promoción 3" 
                        width={800}
                        height={600}
                        className="object-cover  my-30 mask-radial mask-radial-at-right mask-radial-from-50%  mask-radial-to-100% "
                        priority 
                        />
          
          
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-100 text-center mb-10">Postdoctorados y Practicas Terminales</h2>
            <p className="px-10">Dirigido a doctores recién graduados que buscan profundizar 
              en investigación de vanguardia. Ofrecemos un entorno interdisciplinario con 
              acceso a recursos especializados, mentoría de expertos y colaboración en 
              publicaciones científicas. Ideal para consolidar una carrera académica o en I+D.
            </p>
            <p className="px-10">Asesoría especializada para estudiantes que 
              desarrollan sus tesis o proyectos de fin de carrera (licenciatura/maestría). Proponemos 
              temas vinculados a las líneas de investigación del laboratorio, garantizando rigor académico y 
              aplicabilidad en problemas reales.
            </p>
          
          </div>
          </div>


      </div>


    )

}