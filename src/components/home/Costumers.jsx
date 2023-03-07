import CostumersCard from "./CostumersCard";
import Circle from "../../assets/Circle.svg"

function Clients() {
  return (
    <div className="w-full mt-16">
      <h1 className="font-bold text-4xl mb-12 px-6 lg:hidden">
        Lo que dicen nuestros clientes
      </h1>
      <div className="hidden lg:block w-[full] relative px-32 mb-32">
      <img className="absolute -bottom-32 rotating -z-10" src={Circle} alt="circle" />
        <h1 className=" font-bold text-8xl mb-12 mx-auto">
          Lo que dicen <br /> <span className="ml-36">nuestros clientes</span>
        </h1>
      </div>
      <CostumersCard />
    </div>
  );
}

export default Clients;
