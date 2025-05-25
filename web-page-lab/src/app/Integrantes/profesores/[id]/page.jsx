
import Image from "next/image";
import Link from "next/link";


export default async function Page({ params }) {
  const { id } = await params;
  const profesoresData = require('../../../../data/dataProfesores.json');
  const articulosData = require('../../../../data/dataArticulos.json');
  const proyectosData = require('../../../../data/dataProyectos.json');
  const tesisData = require('../../../../data/dataTesis.json');
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
    return <div className="text-4xl">Profesor no encontrado</div>;
  }

  return (
    <div className="flex flex-col items-center text-blue-100 ">
      <div className='self-start justify-self-start w-4/5 p-6'>
       
        <Link href="/Integrantes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded text-2xl ">Regresar</Link>
      
      </div>

      

    <div className="flex flex-wrap justify-around w-4/5 bg-zinc-800 items-center rounded-2xl my-20 md:flex-nowrap">
      
        <div className="mx-10">

        <h1 className="text-4xl border-b-2 border-blue-500 text-center m-8  p-3">{profesor.nombre}</h1>
        <p>{profesor.cargo}</p>
        <p>Contacto: {profesor.contacto}</p>


        <p>{profesor.biografia}</p>
        <ul className="list-disc ml-20 m-5">
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
      width={400}
      height={400}
      className= " h-auto w-auto mx-10  max-md:py-10"
      priority 
      />

      </div>

      


      <div>
        <div className="mx-40 my-25 max-md:mx-15 ">
          <h2 className="text-3xl mb-6">Cursos impartidos por {profesor.nombre}</h2>
          {profesor.cursos && (
            <ul className="list-disc">
              {profesor.cursos.map((curso, index) => (
                <li key={index}>{curso}</li>
              ))}
            </ul>
          )}
        </div>



       

        <div className="mx-40 my-20 max-md:mx-15 ">
          <h2 className="text-3xl mb-6">Tesis en donde participo {profesor.nombre}</h2>
          {tesis && (
            <ul className="list-disc">
              {tesis.map((tesis) => (
                <li key={tesis.id}>{tesis.titulo}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mx-40 my-20 max-md:mx-15">
          <h2 className="text-3xl mb-6">Articulos publicados por {profesor.nombre}</h2>
          {articulos && (
            <ul className="list-disc">
              {articulos.map((articulo) => (
                <li key={articulo.id}>{articulo.titulo}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mx-40 my-20 max-md:mx-15">
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