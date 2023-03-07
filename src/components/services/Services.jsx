import React from "react";
import ServicesGirl from "../../assets/servicesGirl.png";
import Endodoncia from "../../assets/endodonciaImg.png";
import Implantes from "../../assets/implanteImg.png";
import Limpieza from "../../assets/limpiezaImg.png";
import Ortodoncia from "../../assets/ortodonciaImg.png";
import Pediatria from "../../assets/odontopediatriaImg.png";
import Carillas from "../../assets/carillasImg.png";
import Guarda from "../../assets/guardaImg.png";
import Arrow from "../../assets/arrow.svg";

function Services() {
  return (
    <div className="w-full h-screen border overflow-y-scroll px-20 flex justify-between">
      <div>
        <h1 className="font-bold text-6xl mt-36 ">Servicios</h1>
        <img
          className="w-[500px] absolute bottom-0 left-0"
          alt="services-girl"
          src={ServicesGirl}
        />
      </div>
      <div className="mt-32">
        <div className="service-card flex items-center relative">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Endodoncia</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-0 right-0" src={Endodoncia}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Implantes <br/> dentales</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-0 top-8 right-24 w-[150px] " src={Implantes}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Limpiezas <br/> dentales</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-0 right-0" src={Limpieza}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Ortodoncia</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-4 right-24" src={Ortodoncia}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Odontopediatría</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-0 right-0" src={Pediatria}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Carillas <br/> dentales</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute bottom-0 right-0 w-[300px] " src={Carillas}></img>
        </div>

        <div className="service-card flex items-center relative mt-4">
          <div className="pl-11">
            <p className="">
              dental<strong>care</strong>
            </p>
            <h2 className="font-semibold text-5xl">Guarda Oclusal</h2>
            <p>Una boca sana es una boca feliz</p>
            <a className="flex mt-4 font-semibold text-sm" href="#">
              Ver más
              <img src={Arrow}></img>
            </a>
          </div>
          <img className="absolute top-10 right-0 w-[250px] " src={Guarda}></img>
        </div>
      </div>
    </div>
  );
}

export default Services;
