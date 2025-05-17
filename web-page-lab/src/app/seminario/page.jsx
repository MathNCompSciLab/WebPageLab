export default function Seminario()
{
    const expositores = [
        ["Dr juan carlos Chimal","21/2/2025",],
        ["Invitado 1 (Dr Chimal)","28/2/2025",],
        ["Alejando Cardona","7/3/2025",],
        ["Pasarela","14/3/2025",],
        ["Estudiante Dr Carlos Aguilar","21/3/2025",],
        ["Invitado 2 (Alan)","28/3/2025",],
        ["Ivan","4/4/2025",],
        ["Diana","11/4/2025",],
        ["Vacaciones","18/4/2025",],
        ["Vacaciones","25/4/2025",],
        ["Vacaciones","2/5/2025",],
        ["Alejandro Ruiz","9/5/2025",],
        ["Sergio Pérez","16/5/2025",],
        ["Dafne Coconi","23/5/2025",],
        ["Luis Farías","30/5/2025",],
        ["Luis Rojo","6/6/2025",],
        ["Aldair Cortés","13/6/2025",],
        ["Alan Jiménez","20/6/2025",],
        ["Maestra Rocio","27/6/2025",],
        ["Invitado 3 (Aldair)","4/7/2025",],


        
        
    ]


    return(
        <div className="text-center text-blue-100 h-full flex flex-col items-center">
        
        
        <div className="w-3/4 grid grid-cols-1 border border-slate-600 p-12 my-20 bg-gradient-to-br from-blue-950 via-sky-900 to-stone-500/10">
            <h1 className="mx-auto text-5xl font-bold mb-10">
                    CALENDARIO</h1>

            <div className="grid grid-cols-6 bg-blue-950 text-2xl">
                <p className="py-2 border border-slate-600 ">No.</p>
                <p className="py-2 border border-slate-600 col-span-3 ">Expositor</p>
                <p className="py-2 border border-slate-600 col-span-2">Fecha</p>
            </div>
                    
            {
                expositores.map((expositor,index) => (
                    <div key={index} className={`grid grid-cols-6  ${index % 2 == 0 ? "bg-[#17171b]" : "bg-[#131316]"} hover:bg-slate-800`}>

                        <p className="py-1 border border-slate-600 text-xl">{index+1}</p>
                        <p className="py-2 border border-slate-600 col-span-3 ">{expositor[0]}</p>
                        <p className="py-2 border border-slate-600 col-span-2">{expositor[1]}</p>
                    </div>
                ))
            }

            


        </div>
</div>

    )

}