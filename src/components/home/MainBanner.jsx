import React from "react";
import RedGirl from "../../assets/redGirl.png";
import Logo from "../../assets/logo.svg";
import BannerDesktop from "../../assets/bannerDesktop.png";

function MainBanner() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <img src={Logo} alt="logo" className="w-[684px] mx-auto mt-24" />
        <div className="relative px-16 flex items-center">
          <img src={BannerDesktop} alt="bannerDesktop" className="w-full" />
          <p className="absolute top-24 left-32 w-[350px] ">Nuestros clientes son nuestra prioridad, ofrecemos servicios dentales de calidad con un equipo de especialistas.
</p>
        <div className="absolute bottom-8 left-32">
        <p>10 años de experiencia respaldan el compromiso que tenemos de verte feliz.</p>
        <h1 className="uppercase font-bold text-9xl">Cuidado <br/> dental</h1>
        </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="relative w-full px-2 pt-[110px] lg:hidden">
        <img
          className="w-full h-[800px] object-cover rounded-xl"
          src={RedGirl}
          alt="main-banner"
        />
        <p className="absolute top-[180px] pl-4 w-[250px] font-medium sm:text-xl">
          Nuestros clientes son nuestra prioridad.
        </p>
        <div className="absolute bottom-10 pl-4">
          <p className="text-white sm:w-[50%] sm:text-black ">
            10 años de experiencia nos respaldan para el compromiso que tenemos
            de verte feliz.
          </p>
          <h1 className="uppercase text-white font-bold text-6xl sm:text-8xl">
            Cuidado dental
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
