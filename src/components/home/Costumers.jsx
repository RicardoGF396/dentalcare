import React from "react";


import CostumersCard from "./CostumersCard";



function Clients() {
  return (
    <div className="w-full px-6 mt-20">
      <h1 className="font-bold text-4xl mb-12">Lo que dicen nuestros clientes</h1>

      <CostumersCard />
      
    </div>
  );
}

export default Clients;
