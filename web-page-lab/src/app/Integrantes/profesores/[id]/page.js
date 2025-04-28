import Styles from './profesores.module.css';
import Image from "next/image";


export default async function Page({ params }) {
  const { id } = await params;
  const profesoresData = require('../../../../../public/data/dataProfesores.json');
  const articulosData = require('../../../../../public/data/dataArticulos.json');
  const proyectosData = require('../../../../../public/data/dataProyectos.json');
  const profesor = profesoresData.find(prof => prof.id === id);
  const articulos = articulosData.filter(articulo => {
    return articulo.autores.includes(profesor.nombre);
  });
  const proyectos = proyectosData.filter(proyecto => {
    return proyecto.participantes.some(participante => participante.nombre === profesor.nombre);
  });
  console.log(proyectos)
  

  if (!profesor) {
    return <div className={Styles.noencontrado}>Profesor no encontrado</div>;
  }

  return (
    <div className={Styles.profesorbody}>

    <div className={Styles.profesorContainer}>
        <div className={Styles.profesorInfo}>

        <h1 className={Styles.profesorNombre}>{profesor.nombre}</h1>
        <p>{profesor.cargo}</p>
        <p>Contacto: {profesor.contacto}</p>

        <p>{profesor.biografia}</p>
        <ul className={Styles.profesorTitulos}>
          {
          profesor.educacion.map((titulo, index) => (
            <li key={index}>{titulo}</li>
          ))
          }

          
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

      <div>
        <div className={Styles.profesorArticulos}>
          <h2>Articulos publicados por {profesor.nombre}</h2>
          
          {articulos && (
            <ul>
              {articulos.map((articulo) => (
                <li key={articulo.id}>{articulo.titulo}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={Styles.profesorProyectos}>
          <h2>Proyectos en los que ha trabajado {profesor.nombre}</h2>
          {proyectos && (
            
            <ul>
              {proyectos.map((proyecto) => (
                <li key={proyecto.id}>{proyecto.titulo}</li>
              ))}
            </ul>
          )}
        </div>


      </div>
      </div>
  );
}