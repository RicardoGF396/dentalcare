import { useState } from "react";


function Booking() {
  const [page, setPage] = useState(0);
  const FormTitles = [
    {
      title: "Servicio a solicitar",
      text: "Gracias por hacer tu cita con nosotros. Para comenzar selecciona  el servicio que necesitas.",
    },
    {
      title: "Fecha de cita",
      text: "Selecciona el día y la hora de tu cita. En caso de no estar disponible o que surja algún incoveniente se te avisará con anticipación.",
    },
    {
      title: "Datos de tu cita",
      text: "Confirma los datos de la cita que se muestran a continuación.",
    },
  ];

  return (
    <div className="mt-28">
      <div>
        <div className="px-8 w-full flex justify-center">
          <div className=" w-[500px]">
            <h2 className="text-2xl font-medium">{FormTitles[page].title}</h2>
            <p className="text-[#686868] text-sm">
            {FormTitles[page].text}
            </p>
          </div>
        </div>
        <div className="flex items-center relative w-full mt-8">
          <div className="h-1 w-full"></div>
          <div className="absolute h-1 w-[100%] bg-[#CF3C34]"></div>
          <div className="absolute h-1 w-[75%] bg-[#CF3C34]"></div>
          <div className="absolute h-1 w-[50%] bg-[#CF3C34]"></div>
          <div className="absolute h-1 w-[25%] bg-[#CF3C34]"></div>
          <div className="absolute left-[25%]">
            <div className="w-8 h-8 bg-[#CF3C34] rounded-full relative">
              <p className="absolute top-8 -right-4">Servicios</p>
            </div>
          </div>
          <div className="absolute left-[50%]">
            <div className="w-8 h-8 bg-[#CF3C34] rounded-full relative">
              <p className="absolute top-8 -right-2">Fecha</p>
            </div>
          </div>
          <div className="absolute right-[25%]">
            <div className="w-8 h-8 bg-[#CF3C34] rounded-full relative">
              <p className="absolute top-8 -right-2">Datos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex flex-col items-center mt-24">
        <div>
            <h4 className="font-medium text-xl">¿Qué servicio necesitas?</h4>
            <select className="input-form">
                <option className="pl-2"  value={"Endondoncia"}>Endodoncia</option>
                <option value={"Implantes Dentales"}>Implantes Dentales</option>
                <option value={"Limpiezas dentales"}>Limpiezas dentales</option>
                <option value={"Ortodoncia"}>Ortodoncia</option>
                <option value={"Odontopediatría"}>Odontopediatría</option>
                <option value={"Carillas dentales"}>Carillas dentales</option>
                <option value={"Guarda oclusal"}>Guarda oclusal</option>
            </select>
        </div>
        <div className="flex gap-8 mt-9">
        <button onClick={() => setPage((currentPage) => currentPage - 1)} disabled={page == 0} className="">Regresar</button>
        <button onClick={() => setPage((currentPage) => currentPage + 1)}  className="py-2 px-8 rounded-full border border-black">Siguiente</button>
        </div>
      </div>
      
        
    </div>
  );
}

export default Booking;
