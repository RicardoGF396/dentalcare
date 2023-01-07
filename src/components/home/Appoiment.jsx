import React from "react";
import Family from "../../assets/family.png";

function Appoiment() {
  return (
    <div className="mt-20 px-4">
      <img src={Family} alt="familia" className="rounded-t-2xl" />
      <div className="px-6 py-8 bg-main-red rounded-b-2xl">
        <h1 className="font-bold text-white text-5xl">
          Agenda
          <br />
          Online
        </h1>
        <p className="text-white font-light mt-4">Agenda una cita rápida desde aquí, nos pondremos en contacto lo más pronto posible para ver detalles.</p>
        <form className="my-4">
            <input name="name" required placeholder="Nombre" className="w-full border border-white bg-transparent rounded-full py-4 px-6 placeholder-white text-white outline-none" />
            <input name="phone" required placeholder="Teléfono" className="w-full border border-white bg-transparent rounded-full my-8 py-4 px-6 placeholder-white text-white outline-none" />
            <button className="py-4 px-8 bg-white rounded-full text-main-red font-semibold">
                Agendar ahora
            </button>
        </form>
      </div>
    </div>
  );
}

export default Appoiment;
