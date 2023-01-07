import React from "react";
import OrangeGirl from "../../assets/orangeGirl.png";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ServiceSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="relative w-full px-2 mt-6">
      <img src={OrangeGirl} alt="services image" className="w-full" />
      <p className="absolute top-20 px-4 font-bold uppercase text-3xl">
        Somos <br /> expertos en
      </p>
      <div className="w-full overflow-hidden -mt-[220px] pl-4 ">
      <Slider {...settings} >
          <SliderCard name={'Endodoncia'} number={1} />
          <SliderCard name={'Implantes dentales'} number={2} />
          <SliderCard name={'Limpiezas dentales'} number={3} />
          <SliderCard name={'Ortodoncia'} number={4} />
          <SliderCard name={'Odontopedriatría'} number={5} />
          <SliderCard name={'Carillas dentales'} number={6} />
          <SliderCard name={'Guarda oclusal'} number={7} />
        </Slider>
      </div>
    </div>
  );
}

export default ServiceSlider;
