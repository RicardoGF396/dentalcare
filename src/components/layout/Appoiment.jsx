import React from "react";

function Appoiment() {
  return (
    <div className="">
      
      <div className="px-6 py-8 bg-main-red rounded-2xl lg:pb-20">
        <h1 className="font-bold text-white text-5xl lg:hidden">
          Agenda
          <br />
          Online
        </h1>
        <h1 className="hidden font-bold text-white text-9xl lg:block">
          Agenda Online
        </h1>
        <p className="text-white font-light mt-4 lg:mt-10 lg:w-[600px] ">Agenda una cita rápida desde aquí, nos pondremos en contacto lo más pronto posible para ver detalles.</p>
        <form className="my-4 lg:grid lg:grid-cols-7 lg:gap-x-4 ">
            <input name="name" required placeholder="Nombre" className="w-full border border-white bg-transparent rounded-full py-4 px-6 placeholder-white text-white outline-none lg:col-span-3 lg:h-14"/>
            <input name="phone" required placeholder="Teléfono" className="w-full border border-white bg-transparent rounded-full my-8 py-4 px-6 placeholder-white text-white outline-none lg:col-span-3 lg:h-14 lg:my-0" />
            <button className="py-4 px-8 bg-white rounded-full text-main-red font-semibold">
                Agendar ahora
            </button>
        </form>
      </div>
    </div>
  );
}

export default Appoiment;
