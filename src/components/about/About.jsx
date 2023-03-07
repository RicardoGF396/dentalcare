import React from "react";
import Banner from "../../assets/bannerAbout.png";
import Especialistas from "../../assets/Especialistas dentales.png";
import CircleOne from "../../assets/circle-one.svg";
import CircleTwo from "../../assets/circle-two.svg";
import CircleThree from "../../assets/circle-three.svg";
import CircleDental from "../../assets/Circle.svg";
import Card from "./Card";
import Appoiment from "../layout/Appoiment";

function About() {
  return (
    <div className="md:px-8 lg:px-2">
      <div className="mt-32 lg:px-20">
        <div className="grid grid-cols-2 gap-x-4 lg:place-items-end ">
          <h1 className="text-4xl mb-4 lg:text-6xl lg:mb-0">
            En <strong>dentalcare</strong> <br />
            nuestra <strong>prioridad</strong>
            <br />
            son nuestros <strong>clientes</strong>
          </h1>
          <div className="lg:flex lg:items-end lg:w-[400px] lg:justify-end">
            <p>
              Somos una clínica dental especializada en la salud y belleza de tu
              boca. Tú eres nuestra prioridad, por lo que serás tratado por el
              personal con el mejor cuidado y atención que mereces.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
        <img className="mt-8" src={Banner} alt="Banner About" />
        </div>
      </div>

      <div className="px-4 mt-8 lg:flex lg:justify-end lg:my-20 lg:px-20">
          <div className="lg:relative">
          <p className="lg:text-2xl lg:text-right lg:w-[800px] ">
            Contamos con un equipo de especialistas en tratamientos avanzados
            para reducir el dolor y las molestias y mejorar los resultados. Los
            ejemplos incluyen la ortodoncia transparente con alineadores o la
            colocación de implantes mediante cirugía guiada.
          </p>
          <img
          className="hidden rotating lg:block lg:absolute lg:-left-[20%] lg:-bottom-[50%] -z-10 "
          src={CircleDental}
          alt="wheel dentalcare"
        />
          </div>


        
      </div>

      <div className="px-4 my-12 lg:grid lg:grid-cols-4 lg:px-20">
        <div className="flex justify-center lg:col-span-2 lg:items-center">
          <img
            className="md:w-[400px] lg:h-[650px] lg:w-[500px] "
            src={Especialistas}
            alt="Especialistas dentales"
          />
        </div>
        <div className="lg:col-span-2">
          <h1 className="font-semibold text-5xl my-8 md:text-center lg:text-left">
            Especialistas dentales
          </h1>
          <div className="grid grid-cols-1 grid-rows-3 gap-y-6 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 ">
            <div className="lg:col-span-1">
            <Card
              circle={CircleOne}
              name={"Misión"}
              description={
                "Somos especialistas en prevención y saneamiento oral con técnicas odontológicas mínimamente invasivas. Nuestro objetivo es mejorar la estética y el funcionamiento bucal, ofreciendo una experiencia innovadora y confortable para mejorar tu imagen."
              }
            />
            </div>
            <div className="lg:col-span-1">
            <Card
              circle={CircleTwo}
              name={"Visión"}
              description={
                "Convertirnos en la cadena dental más importante de la región con servicios vanguardistas para mejorar la integridad bucal de nuestros pacientes."
              }
            />
            </div>
            <div className="lg:col-span-2 lg:h-[300px] ">
            <Card
              circle={CircleThree}
              name={"Valores"}
              description={
                "Nuestros principales valores son nuestro compromiso con los clientes pues contamos con asistencia permanente para cuidar la evolución de tus tratamientos. La puntualidad debido a que tu tiempo es valioso. La honestidad ya que todos nuestros tratamientos son garantizados. Por último la ética profesional, debido a que te damos un diagnóstico certero, un plan te tratamiento y un presupuesto para mayor tranquilidad."
              }
            />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <Appoiment />
      </div>
    </div>
  );
}

export default About;
