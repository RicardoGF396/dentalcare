import SliderCard from "./SliderCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function ServiceSlider_Dektop() {
  return (
    <div>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={3.5}
      >
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
  );
}

export default ServiceSlider_Dektop;
