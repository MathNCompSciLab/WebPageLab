import Styles from './alumnos.module.css';
import Image from "next/image";


export default async function Page({ params }) {
  const { id } = await params;
  const alumnosData = require('../../../../../public/data/dataAlumnos.JSON');
  const alumno = alumnosData.find(prof => prof.id === id);
  

  if (!alumno) {
    return <div className={Styles.noencontrado}>alumno no encontrado</div>;
  }

  return (
    <div className={Styles.alumnobody}>
    <div className={Styles.alumnoContainer}>
      <Image 
      src={alumno.imagen} 
      alt={alumno.nombre} 
      width={300}
      height={300}
      className={Styles.alumnoImagen}
      priority 
      />

      <div className={Styles.alumnoNombreContainer}>
        <h1 className={Styles.alumnoNombre}>{alumno.nombre}</h1>
        <p>{alumno.cargo}</p>
        <p>Contacto: {alumno.contacto}</p>
      </div>


      
      
      </div>
      </div>
  );
}