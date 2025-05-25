
import Image from "next/image";
import Link from "next/link";
import alumnosData from '@/data/dataAlumnos.JSON';


export default async function Page({ params }) {
  const { id } = await params;
  const alumno = alumnosData.find(prof => prof.id === id);
  

  if (!alumno) {
    return <div className="text-4xl">alumno no encontrado</div>;
  }

  return (
    <div className="h-screen flex flex-col items-center space-y-47">
      <div className='self-start justify-self-start w-4/5 p-6'>
        <Link href="/Integrantes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded text-2xl ">Regresar</Link>
      </div>
    <div className="bg-blue-400 p-4 w-1/3 h-1/3 flex flex-wrap items-center rounded-2xl text-blue-50 justify-around max-md:w-4/5 max-md:h-1/2">
      <Image 
      src={alumno.imagen} 
      alt={alumno.nombre} 
      width={150}
      height={150}
      className="rounded-full h-50 w-50"
      priority 
      />
      <div className=" text-base ">
        <h1 className="text-xl">{alumno.nombre}</h1>
        <p>{alumno.cargo}</p>
        <p>Contacto: {alumno.contacto}</p>
      </div> 
      </div>
      </div>
  );
}