import React from "react";
import OrangeGirl from "../../assets/orangeGirl.png";
import SliderCard from "./SliderCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function ServiceSlider() {
  return (
    <div className="relative w-full px-2 mt-6">
      <img src={OrangeGirl} alt="services image" className="w-full" />
      <p className="absolute top-20 px-4 font-bold uppercase text-3xl">
        Somos <br /> expertos en
      </p>
      <div className="w-full overflow-hidden -mt-[220px] pl-4 ">
        <Swiper spaceBetween={250} slidesPerView={2} loop={true}>
          <SwiperSlide>
            <SliderCard name={"Endodoncia"} number={1} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Implantes dentales"} number={2} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Limpiezas dentales"} number={3} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Ortodoncia"} number={4} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Odontopedriatría"} number={5} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Carillas dentales"} number={6} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard name={"Guarda oclusal"} number={7} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceSlider;

/* 
<SliderCard name={'Endodoncia'} number={1} />
          
          
          
          
          
          

*/
