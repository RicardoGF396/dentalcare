import React from "react";
import RedGirl from '../../assets/redGirl.png'

function MainBanner() {
  return (
    <div className="relative w-full px-2 pt-[110px]">
      <img className="w-full" src={RedGirl} alt="main-banner" />
      <p className="absolute top-[180px] pl-4 w-[250px] font-medium ">
        Nuestros clientes son nuestra prioridad.
      </p>
      <div className="absolute bottom-10 pl-4">
        <p className="text-white">
          10 años de experiencia nos respaldan para el compromiso que tenemos de
          verte feliz.
        </p>
        <h1 className="uppercase text-white font-bold text-7xl">
          Cuidado dental
        </h1>
      </div>
    </div>
  );
}

export default MainBanner;
