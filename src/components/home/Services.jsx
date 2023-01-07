import React from "react";
import ServiceSlider from "./ServiceSlider";

function Services() {
  return (
    <div className="w-full  mt-16">
      <div className="px-6">
        <h2 className="font-semibold text-4xl ">Servicios</h2>
        <p className="mt-4">
          Nos especializamos para atender las necesidades estéticas y de salud
          de toda la familia.
        </p>
        <p className="mt-4 font-semibold ">Ver servicios</p>
      </div>
      <ServiceSlider/>
    </div>
  );
}

export default Services;
