import React from "react";
import Email from "./../../assets/email.svg";
import Map from "./../../assets/map.svg";
import Phone from "./../../assets/phone.svg";

function Contact() {
  return (
    <div className="w-full lg:h-screen lg:flex lg:justify-center lg:items-center 
    lg:mt-8 lg:gap-x-12 mt-24 px-8">
      <div className="lg:w-[455px] ">
        <h3 className="font-medium text-[42px]">¿Cómo podemos ayudarte?</h3>
        <p className="text-base mb-6">
          Si tienes más dudas sobre como manejamos las citas o te gustaría
          hablar de un problema dental en particular, no dudes en contactarnos
        </p>
        <a
          href="#"
          className="lg:w-[370px] w-full border border-[#D9D9D9] flex rounded-lg py-3 px-6 items-center justify-start gap-2 h-[60px] mb-4"
        >
          <img className="w-[32px]" src={Map} />
          <p>Emiliano Zapata 616, Centro 37370. León, Gto. México</p>
        </a>
        <a
          href="#"
          className="lg:w-[370px] w-full border border-[#D9D9D9] flex rounded-lg py-3 px-6 items-center justify-start gap-2 h-[60px] mb-4"
        >
          <img className="w-[24px]" src={Phone} />
          <p>+52 477 4715263</p>
        </a>
        <a
          href="#"
          className="lg:w-[370px] w-full border border-[#D9D9D9] flex rounded-lg py-3 px-6 items-center justify-start gap-2 h-[60px] mb-8"
        >
          <img src={Email} />
          <p>hola@dentalcare.com</p>
        </a>
      </div>
      <div className="rounded-2xl overflow-hidden h-[550px] mb[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.33981811154!2d-101.68694027361225!3d21.119145225189943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf0988371d97%3A0xeb4613757b969abe!2zQ2VudHJvLCBMZcOzbiwgR3RvLg!5e0!3m2!1ses-419!2smx!4v1678054397685!5m2!1ses-419!2smx"
          width="800"
          height="550"
          style={{border:0}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
