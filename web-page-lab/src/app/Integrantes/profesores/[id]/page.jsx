import Styles from './profesores.module.css';
import Image from "next/image";


export default async function Page({ params }) {
  const { id } = await params;
  const profesoresData = require('../../../../../public/data/dataProfesores.json');
  const articulosData = require('../../../../../public/data/dataArticulos.json');
  const proyectosData = require('../../../../../public/data/dataProyectos.json');
  const tesisData = require('../../../../../public/data/dataTesis.json');
  const profesor = profesoresData.find(prof => prof.id === id);
  const articulos = articulosData.filter(articulo => {
    return articulo.autores.includes(profesor.nombre);
  });
  const proyectos = proyectosData.filter(proyecto => {
    return proyecto.participantes.some(participante => participante.nombre === profesor.nombre);
  });
  const tesis = tesisData.filter(tesis => {
    return tesis.profesor.includes(profesor.nombre);
  });
  

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
      className= " h-auto w-auto mr-10"
      priority 
      />
      </div>


      <div>
        <div className="mx-40 my-25">
          <h2 className="text-3xl mb-6">Cursos impartidos por {profesor.nombre}</h2>
          {profesor.cursos && (
            <ul className="list-disc">
              {profesor.cursos.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          )}
        </div>



       

        <div className="mx-40 my-20">
          <h2 className="text-3xl mb-6">Tesis en donde participo {profesor.nombre}</h2>
          {tesis && (
            <ul className="list-disc">
              {tesis.map((tesis) => (
                <li key={tesis.id}>{tesis.titulo}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mx-40 my-20">
          <h2 className="text-3xl mb-6">Articulos publicados por {profesor.nombre}</h2>
          {articulos && (
            <ul className="list-disc">
              {articulos.map((articulo) => (
                <li key={articulo.id}>{articulo.titulo}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mx-40 my-20">
          <h2 className="text-3xl mb-6">Proyectos en los que ha trabajado {profesor.nombre}</h2>
          {proyectos && (
            <ul className="list-disc">
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