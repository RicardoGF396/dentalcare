import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.svg";
import UniLogo from "../../assets/uniLogo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import AboutIcon from "../../assets/aboutIcon.svg";
import ContactIcon from "../../assets/contactIcon.svg";
import Facebook from "../../assets/facebook.svg";
import Instragram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";

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
      

      <div className="w-full bg-white h-[100px] px-6 flex justify-between fixed top-0 z-[200] ">
        <img src={Logo} alt="logo" className="w-[140px] " />
        <img
          src={Menu}
          alt="menu"
          className="lg:hidden w-[60px] pr-6"
          onClick={() => setIsActive(!isActive)}
        />
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
          <div className="flex items-center mb-16 gap-x-4">
            <img src={UniLogo} alt="uniLogo" className="w-10" />
            <p className="text-lg">
              <span className="font-bold">dental</span>care
            </p>
          </div>
          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={HomeIcon} alt="homeIcon" className="mr-1" />
            <a href="#" className="font-semibold">
              Inicio
            </a>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={AboutIcon} alt="aboutIcon" />
            <a href="#" className="font-semibold">
              Nosotros
            </a>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3 mb-2">
            <img src={ContactIcon} alt="contactIcon" className="w-7 " />
            <a href="#" className="font-semibold">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-x-8 w-full py-3">
            <a
              href="#"
              className="font-semibold w-full text-center py-2 border border-black rounded-md"
            >
              Agendar
            </a>
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
