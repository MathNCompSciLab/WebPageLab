import Image from "next/image";
import styles from './page.module.css';

import BannerRotativo from "../../components/bannerRotativo";   

export default function Home() {
  const banners = [
    <div key="1" className={styles.bannerImagen}>
      <Image 
        src="/Ejemplo1.png" 
        alt="Promoción 1" 
        fill={true}
        className={styles.customImagen}
        priority 
      />
    </div>,
    <div key="2" className={styles.bannerImagen}>
      <Image 
        src="/Ejemplo2.png" 
        alt="Promoción 2" 
        fill={true}
        className={styles.customImagen}
        priority 
      />
    </div>,
    <div key="3" className={styles.bannerImagen}>
    <Image 
      src="/Ejemplo3.png" 
      alt="Promoción 3" 
      fill={true}
      className={styles.customImagen}
      priority 
    />
  </div>
    ];
  return (
    <div>
        
       <div className={styles.imagecontainer}>
         <BannerRotativo banners={banners} intervalo={"3000"} />
        </div>

      {/* Sección 1 */}
      <section className={styles.section1}>
          <Image 
          src="/Laboratorio/3.jpg" 
          alt="Promoción 3" 
          width={820}
          height={600}
          className={styles.customlabImagen}
          priority 
          />
          <div className={styles.textoContainer}>
          <p>Welcome to the Mathematical and Computational Sciences Laboratory home page at the Center for 
            Computing Research IPN. Nowadays the mathematical and computational modeling of natural phenomena 
            represent a methodological challenge because they require the knowledge of different methodologies.
            The main mission of the laboratory is to apply the formal methods, ie mathematically based techniques 
            to the modeling and simulation of real case studies mainly in the physical, biological, engineering and 
            computational domains. Our laboratory is the place where Msc and Ph. D students can study, in depth, apply 
            and practice new methodological paradigms. By being involved in real projects and interacting both with Academic 
            staff and external researchers, students are stimulated to improve and approach is particularly useful for bridging
             knowledge and research as the «Raison detre» of the laboratory.</p>
            </div>
      </section>
      




      {/* Sección 3 */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <h2>INFORMACION</h2>
          <div className={styles.grid}>
            <a href="#investigacion" className={styles.btncard}>
            <div className={styles.card}>
              <h3>Investigacion</h3>
              <p>Sobre nuestras lineas de investigacion.</p>
            </div>
            </a>
            
            <a href="#objetivos" className={styles.btncard}>
            <div className={styles.card}>
              <h3>Objetivos</h3>
              <p>¿Cuales son los objetivos el laboratorio? </p>
            </div>
            </a>

            
            <a href="#historia" className={styles.btncard}>
            <div className={styles.card}>
              <h3>Historia</h3>
              <p>Acerca de nuestro laboratorio</p>
            </div>
            </a>
          </div>
        </div>
      </section>

      {/* Sección 4 */}
      <section className={styles.section3} id="investigacion">
          
          <div className={styles.textoContainer}>
            <ul> <h2>Lineas de investigacion</h2>
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
          <div className={styles.textoContainer}>
            <ul> <h2>Aplicaciones </h2>
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
            width={820}
            height={546}
            className={styles.customlabImagen}
            priority 
            />
      </section>
      {/* Sección 4 */}
      <section className={styles.section4} id="objetivos">
      <h2>Objetivos del Laboratorio de Ciencias Matemáticas y Computacionales</h2>
          <div className={styles.textoContainer}>
            <ul>
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
            width={300}
            height={300}
            className={styles.customlabImagen}
            priority 
            />
            </div>
            </section>
      {/* Sección 5 */}
      <section className={styles.section5} id="historia">
          <h2>Historia</h2>
          <Image 
          src="/Laboratorio/19.jpg" 
          alt="Promoción 3" 
          width={1040}
          height={600}
          className={styles.customlabImagen}
          priority 
          />
          <div className={styles.textoContainer}>
            
            <p>El laboratorio de Ciencias Matemáticas y Computacionales fue fundado en el año 2000 con el objetivo de realizar investigación básica y aplicada en las áreas de matemáticas puras y aplicadas, computación científica, ciencia de datos y machine learning. Desde su fundación, el laboratorio ha llevado a cabo numerosos proyectos de investigación en
               colaboración con otras instituciones académicas y de investigación, tanto a nivel nacional como internacional.</p>
            <p>El laboratorio cuenta con un equipo de investigadores altamente capacitados y con amplia experiencia en sus respectivas áreas de especialización. Además, el laboratorio ofrece programas de formación de recursos humanos a nivel de maestría y doctorado, así como actividades de divulgación científica y tecnológica.</p>
            <p>A lo largo de los años, el laboratorio ha contribuido al desarrollo de tecnologías innovadoras y soluciones computacionales para resolver problemas complejos en diversas áreas, como la predicción climática, la predicción de colapsos financieros, la animación médica, las finanzas cuantitativas, la secuenciación genómica y el diagnóstico médico por imágenes.</p>
            </div>
            </section>
    </div>

  );
}