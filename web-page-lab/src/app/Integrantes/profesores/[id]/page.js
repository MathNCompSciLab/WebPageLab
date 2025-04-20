import Styles from './profesores.module.css';
import Image from "next/image";


export default async function Page({ params }) {
  const { id } = await params;
  const profesoresData = require('../../../../../public/data/dataProfesores.json');
  const profesor = profesoresData.find(prof => prof.id === id);
  

  if (!profesor) {
    return <div className={Styles.noencontrado}>Profesor no encontrado</div>;
  }

  return (
    <div className={Styles.profesorbody}>

    <div className={Styles.profesorContainer}>
        <div className={Styles.profesorInfo}>

        <h1 className={Styles.profesorNombre}>HI, I'm {profesor.nombre}</h1>
        <p>{profesor.cargo}</p>
        <p>Contacto: {profesor.contacto}</p>

        <p>{profesor.biografia}</p>
        <ul className={Styles.profesorTitulos}>
        <li>{profesor.educacion[0]}</li>
        <li>{profesor.educacion[1]}</li>
        <li>{profesor.educacion[2]}</li>
        </ul>
        </div>

      


      
      <Image 
      src={profesor.imagen} 
      alt={profesor.nombre} 
      width={300}
      height={300}
      className={Styles.profesorImagen}
      priority 
      />

      
      
      </div>
      </div>
  );
}