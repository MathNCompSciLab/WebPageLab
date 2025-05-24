import Link from 'next/link';

export default function Docencia()
{
  const dataProfesores = require('../../../public/data/dataProfesores.JSON');

    return(
      <div className="text-center text-blue-100 h-screen flex flex-col items-center max-md:h-full">
        <h1 className="mx-auto text-5xl font-bold my-10">
        CURSOS DISPONIBLES</h1>

        <div className='grid grid-cols-1 border border-slate-600 text-2xl p-6 px-15 w-3/4 max-md:w-full'>
        <h2 className='mb-4'>Cursos impartidos por:</h2>
          {dataProfesores.map((profesor) => (
            profesor.cursos && (
              <div key={profesor.id} className="p-6 border border-slate-600 flex justify-between items-center max-md:flex-col max-md:px-0 ">
              <p className="text-2xl w-1/2 max-md:w-full max-md:mb-4"> {profesor.nombre}</p>
              <ul className="list-disc text-left w-1/2 text-xl max-md:w-full max-md:pl-6">
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