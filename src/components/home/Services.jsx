import React from "react";
import ServiceSlider from "./ServiceSlider";
import FrameTop from "../../assets/topGrid.png"
import FrameDown from "../../assets/frame down.png"
import Arrow from "../../assets/arrow.svg"
import ServiceSlider_Dektop from "./ServiceSlider_Dektop";

function Services() {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block px-16 py-8 ">
        <div className="flex flex-col gap-y-2 relative">
          <div className="col-span-4">
            <img src={FrameTop} />
          </div>
          <div className="col-span-2">
            <img src={FrameDown} />
          </div>
          <div className="absolute top-12 left-12 w-[300px] ">
          <h2 className="font-bold text-3xl mb-4">Servicios</h2>
          <p className="mb-4">Nos especializamos para atender las necesidades estéticas y de salud de toda la familia.</p>
          <div className="flex gap-x-4 ">
            <p className="font-semibold text-xs">Ver servicios</p>
            <img src={Arrow} alt="arrow" />
          </div>
          </div>
          <div className="absolute bottom-96 left-12 w-[480px] ">
            <h1 className="font-bold text-7xl">Somos expertos en</h1>
          </div>
          <div className="absolute bottom-8 left-4 overflow-hidden w-[96%] ">
            <ServiceSlider_Dektop />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full  mt-16 lg:hidden">
      <div className="px-6">
        <h2 className="font-semibold text-4xl sm:text-6xl">Servicios</h2>
        <p className="mt-4 sm:w-[80%] ">
          Nos especializamos para atender las necesidades estéticas y de salud
          de toda la familia.
        </p>
        <p className="mt-4 font-semibold ">Ver servicios</p>
      </div>
      <ServiceSlider/>
    </div>
    </div>
  );
}

export default Services;
