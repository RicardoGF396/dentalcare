import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import UniLogo from "../../assets/uniLogo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import AboutIcon from "../../assets/aboutIcon.svg";
import ContactIcon from "../../assets/contactIcon.svg";
import ServicesIcon from "../../assets/services.svg";
import Facebook from "../../assets/facebook.svg";
import Instragram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Close from "../../assets/close.svg"
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="relative overflow-x-hidden">
      

      <div className="w-full bg-white h-[100px] px-6 flex justify-between fixed top-0 z-[200] lg:items-center lg:px-28">
        <img src={Logo} alt="logo" className="w-[140px] " />
        <img
          src={Menu}
          alt="menu"
          className="lg:hidden w-[40px]"
          onClick={() => setIsActive(!isActive)}
        />
        <div className="hidden lg:block">
        <ul className="flex gap-x-8 items-center">
            
            <li className="duration-300 transition-all hover:font-bold">
              <Link to={'/'}>Inicio</Link>
            </li>
            
            <li className="duration-300 transition-all hover:font-bold">
            <Link to={'/sobre-nosotros'}>Nosotros</Link>
            </li>

            <li className="duration-300 transition-all hover:font-bold">
            <Link to={'/servicios'}>Servicios</Link>
            </li>
     
            <li className="duration-300 transition-all hover:font-bold">
              <Link to={'/contacto'}>Contacto</Link>
            </li>
            
            <Link
              to={'/agendar'}
              className="font-semibold w-full text-center py-2 px-8 border border-black rounded-md hover:bg-black hover:text-white transition-all duration-300"
            >
              Agendar
            </Link>
          </ul>
        </div>
      </div>

      <div
        className={`w-full h-screen z-[300] top-0 bottom-0 right-0 bg-[#0000002a] ${
          isActive ? "fixed" : "hidden"
        } `}
      ></div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`mobile-menu z-[400] fixed transition-all duration-300 right-0 w-[320px] bg-white flex flex-col h-screen top-0 bottom-0 border-l p-8 ${
          isActive ? "right-0" : "-right-[100%]"
        } `}
      >
        <div className="h-full w-full relative ">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-x-4">
            <img src={UniLogo} alt="uniLogo" className="w-10" />
            <p className="text-lg">
              <span className="font-bold">dental</span>care
            </p>
            </div>
            <div>
              <img src={Close} alt="close" onClick={() => setIsActive(!isActive)} />
            </div>
          </div>
          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={HomeIcon} alt="homeIcon" className="mr-1" />
            <Link className="font-semibold" to={'/'}>Inicio</Link>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={AboutIcon} alt="aboutIcon" />
            <Link className="font-semibold" to={'/sobre-nosotros'}>Sobre Nosotros</Link>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={ServicesIcon} alt="aboutIcon" />
            <Link className="font-semibold" to={'/servicios'}>Servicios</Link>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={ContactIcon} alt="contactIcon" className="w-7 " />
            <Link className="font-semibold" to={'/contacto'}>Contacto</Link>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3">
            <Link
              to={'/agendar'}
              className="font-semibold w-full text-center py-2 border border-black rounded-md"
            >
              Agendar
            </Link>
          </div>

          <div className="absolute bottom-8">
            <div className="flex gap-x-4">
              <img src={Facebook} alt="facebook" />
              <img src={Instragram} alt="instagram" />
              <img src={Whatsapp} alt="whatsapp" />
            </div>
            <p className="font-light text-xs mt-4">
              ©2022 RIDO Web Design - Dentalcare{" "}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;

/* 


*/
