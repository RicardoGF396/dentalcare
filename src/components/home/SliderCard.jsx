import React from "react";

function SliderCard({ name, number }) {
  /* glass-effect */
  return (
    <div className="bg-white/80 border-2 border-white h-[170px] md:h-[220px]  pt-6 pl-6 rounded-xl">
    <h2 className="text-2xl font-bold opacity-100" > {name} </h2>
      <div className="absolute bottom-6 right-6 border-2 border-black rounded-full px-4 py-2">
      {number}
      </div>
    </div>
  );
}

export default SliderCard;
