import Link from 'next/link';

export default function Docencia()
{
  const dataProfesores = require('../../../public/data/dataProfesores.JSON');

    return(
      <div className="text-center text-blue-100 h-screen">
        <h1 className="mx-auto text-5xl font-bold my-10">
        CURSOS DISPONIBLES</h1>

        <div className='grid grid-cols-1 border border-slate-600 text-2xl p-6'>
        <h2 className='mb-4'>Cursos impartidos por:</h2>
          {dataProfesores.map((profesor) => (
            profesor.cursos && (
              <div key={profesor.id} className="p-4 border border-slate-600 flex justify-between items-center">
              <p className="text-2xl w-1/2"> {profesor.nombre}</p>
              <ul className="list-disc text-left w-1/2 text-xl">
                {profesor.cursos.map((curso, index) => (
                  <li key={index}>{curso}</li>
                ))}
              </ul>
              </div>
            ) 
          ))}
        </div> 


        <Link href="https://drive.google.com/drive/folders/1m13mVzpTSwslPqlhDlWuGZ1FTnqHIkFC?usp=sharing"><h2 className='text-3xl font-bold underline my-20'>Click aqui para material didactico</h2></Link>
      
      </div>

    )

}