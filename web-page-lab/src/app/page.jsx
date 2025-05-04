import Image from "next/image";

import BannerRotativo from "../../components/bannerRotativo";   

export default function Home() {
  const banners = [
    <div key="1" className="relative flex h-[300px]">
      <Image 
        src="/banners/Ejemplo1.png" 
        alt="Promoción 1" 
        fill={true}
        className="object-cover"
        priority 
      />
    </div>,
    <div key="2" className="relative flex h-[300px]">
      <Image 
        src="/banners/Ejemplo3.png" 
        alt="Promoción 2" 
        fill={true}
        className="object-cover"
        priority 
      />
    </div>,
    <div key="3" className="relative flex h-[300px]">
    <Image 
      src="/banners/Ejemplo2.png" 
      alt="Promoción 3" 
      fill={true}
      className="object-cover"
      priority 
    />
  </div>
    ];
  return (
    <div>
        
       <div>
        <h2 className="text-4xl text-center bg-[#000b49] text-white pb-4">"Noticias"</h2>
         <BannerRotativo banners={banners} intervalo={"9000"} />
        </div>

      {/* Sección 1 */}
      <section className="bg-gradient-to-br from-gray-900 to to-blue-500 text-white h-full">
        <div className=" bg-[url('/Laboratorio/3.jpg')]  mask-radial mask-radial-at-left mask-radial-from-10%  mask-radial-to-100% h-screen z-0"> 

          

          
          {/* <Image 
          src="/Laboratorio/3.jpg" 
          alt="Promoción 3" 
          width={1000}
          height={600}
          className="object-cover mask-radial mask-radial-at-left mask-radial-from-10%  mask-radial-to-100% flex-10/12 h-screen" 
          priority 
          /> */}

            
          </div>

          <div className=" text-blue-100 max-h-full w-9/12 flex flex-col justify-center bg-gray-950 p-10 mx-auto rounded-4xl z-10 absolute top-11/12 left-1/2 transform -translate-x-1/2 ">
          <h2 className="text-4xl mb-6 text-center">Bienvenido</h2>
          <p className="text-center text-lg text-balance ">Esta es la página principal del Laboratorio de Ciencias Matemáticas y Computacionales 
            del Centro de Investigación en Computación del IPN. Hoy en día, el modelado matemático y computacional
            de fenómenos naturales representa un reto metodológico, ya que requiere el conocimiento de diferentes
            metodologías. La misión principal del laboratorio es aplicar métodos formales, es decir, técnicas
            con base matemática, al modelado y simulación de casos de estudio reales, principalmente en los 
            dominios de la física, la biología, la ingeniería y la computación. Nuestro laboratorio es el lugar
            donde estudiantes de maestría y doctorado pueden profundizar, aplicar y practicar nuevos paradigmas
            metodológicos. Al participar en proyectos reales e interactuar tanto con personal académico como con
            investigadores externos, los estudiantes se ven estimulados a mejorar, y este enfoque es particularmente
            útil para conectar el conocimiento con la investigación, la razón de ser del laboratorio.</p>
            </div>



            
      </section>
      




      {/* Sección 2*/}
      <section className="bg-gray-950 h-full">
        <div className="container mx-auto py-8">
          
          <h2 className="text-center text-4xl font-bold text-blue-100 mb-10">INFORMACION</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#investigacion" className="decoration-none">
            <div className="bg-blue-100 p-10 rounded-3xl transition duration-300 hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Investigacion</h3>
              <p>Sobre nuestras lineas de investigacion.</p>
            </div>
            </a>
            
            <a href="#objetivos" className="decoration-none">
            <div className="bg-blue-100 p-10 rounded-3xl transition duration-300 hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Objetivos</h3>
              <p>¿Cuales son los objetivos el laboratorio? </p>
            </div>
            </a>

            
            <a href="#historia" className="decoration-none">
            <div className="bg-blue-100 p-10 rounded-3xl transition duration-300 hover:-translate-y-2 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Historia</h3>
              <p>Acerca de nuestro laboratorio</p>
            </div>
            </a>
          </div>
        </div>
      </section>

      {/* Sección 3 */}
      <div className="bg-gradient-to-tl from-gray-900 to to-blue-500 h-full">

      
      <section className=" text-white h-screen flex items-center flex-wrap " id="investigacion">
          <div className="ml-30 ml- border-t-1 border-slate-100 pt-15 z-50">
            <ul className="list-disc mx-20" > <h2  className="mb-5 text-3xl font-medium text-center">Lineas de investigacion</h2>
              <li>Matemáticas Puras</li>
              <li>Matemáticas Aplicadas</li>
              <li>Ciencia de Datos y Machine Learning</li>
              <li>Computación Científica</li>
              <li>Teoría de la Computación</li>
              <li>Matemáticas Discretas y Combinatoria</li>
              <li>Bioinformática y Biomatemáticas</li>
              <li>Optimización y Investigación de Operaciones</li>
              <li>Visualización Científica</li>
              <li>1Sistemas Complejos y Redes</li>
              <li>1Computación de Alto Rendimiento (HPC)</li>
              <li>1Inteligencia Artificial Simbólica</li>
            </ul>
          </div>
          <div className="ml-10 border-t-1 border-slate-100 pt-15 z-50">
            <ul className="list-disc mx-20"> <h2 className="mb-5 text-3xl font-medium text-center">Aplicaciones </h2>
              <li>Predicción climática o epidemiológica </li>
              <li>Predicción de colapsos financieros </li>
              <li>Animación médica </li>
              <li>Finanzas cuantitativas</li>
              <li>Secuenciación genómica </li>
              <li>Diagnóstico médico por imágenes</li>
            </ul>
          </div>
            <Image 
            src="/Laboratorio/7.jpg" 
            alt="Promoción 3" 
            width={1120}
            height={546}
            className="object-cover absolute right-0 mask-radial mask-radial-at-right mask-radial-from-0%  mask-radial-to-70% h-[90vh]"
            priority 
            />
      </section>



      {/* Sección 4 */}
      <section className="text-white h-[60vh]" id="objetivos">
      <h2 className="text-center text-4xl text-blue-100 my-20">Objetivos del Laboratorio de Ciencias Matemáticas y Computacionales</h2>
          <div className="flex justify-around">
            <ul className="list-disc text-left ml-30">
              <li>Realizar investigación básica y aplicada en las áreas de matemáticas puras y aplicadas, computación científica, ciencia de datos y machine learning.</li>
              <li>Desarrollar proyectos de investigación en colaboración con otras instituciones académicas y de investigación.</li>
              <li>Formar recursos humanos altamente capacitados en matemáticas y computación.</li>
              <li>Promover la divulgación de la ciencia y la tecnología a través de conferencias, seminarios y talleres.</li>
              <li>Fomentar la colaboración entre académicos, estudiantes y profesionales en el campo de las matemáticas y la computación.</li>
              <li>Contribuir al desarrollo de tecnologías innovadoras y soluciones computacionales para resolver problemas complejos en diversas áreas.</li>  
              <li>Desarrollar y mantener un ambiente de trabajo colaborativo y multidisciplinario en el laboratorio.</li>
              <li>Fomentar la formación continua y el aprendizaje a lo largo de la vida en matemáticas y computación.</li>
              <li>Colaborar con la industria y el sector privado para aplicar los resultados de la investigación en problemas reales.</li>
              <li>Realizar actividades de transferencia de tecnología y conocimiento a la sociedad.</li>
            </ul>
            <Image 
            src="/Laboratorio/CMyC.jpg" 
            alt="Promoción 3" 
            width={250}
            height={250}
            className="object-cover  "
            priority 
            />
            </div>
            </section>
            </div>



      {/* Sección 5 */}
      <section className="text-blue-100 flex flex-col items-center p-10 bg-gradient-to-bl from-gray-950 via-gray-800 to-gray-950" id="historia">
          <Image 
          src="/Laboratorio/19.jpg" 
          alt="Promoción 3" 
          width={1040}
          height={600}
          className="object-cover w-auto h-auto brightness-80 my-10"
          priority 
          />
          <div className="my-10 ">
            
            <p>El laboratorio de Ciencias Matemáticas y Computacionales fue fundado en el año 2000 con el objetivo de realizar investigación básica y aplicada en las áreas de matemáticas puras y aplicadas, computación científica, ciencia de datos y machine learning. Desde su fundación, el laboratorio ha llevado a cabo numerosos proyectos de investigación en
               colaboración con otras instituciones académicas y de investigación, tanto a nivel nacional como internacional.</p>
            <p>El laboratorio cuenta con un equipo de investigadores altamente capacitados y con amplia experiencia en sus respectivas áreas de especialización. Además, el laboratorio ofrece programas de formación de recursos humanos a nivel de maestría y doctorado, así como actividades de divulgación científica y tecnológica.</p>
            <p>A lo largo de los años, el laboratorio ha contribuido al desarrollo de tecnologías innovadoras y soluciones computacionales para resolver problemas complejos en diversas áreas, como la predicción climática, la predicción de colapsos financieros, la animación médica, las finanzas cuantitativas, la secuenciación genómica y el diagnóstico médico por imágenes.</p>
            </div>
            </section>
    </div>

  );
}