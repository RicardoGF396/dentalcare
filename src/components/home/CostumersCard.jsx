import Arrow from "../../assets/arrow.svg";
import costumers from "../../data/costumers";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function CostumersCard() {
  return (
    <div>
      <Swiper spaceBetween={20} slidesPerView={1.2} loop={true} grabCursor={true}
      
        breakpoints={{
          768:{
            slidesPerView:2.2
          },
          1024:{
            slidesPerView:3.2
          }
        }}
      >
        {costumers.map((costumer) => {
          return (
            <SwiperSlide>
              <div
                className="comment-slide h-[550px] bg-light-blue py-12 px-8 rounded-2xl ml-4"
                key={costumer.nombre}
              >
                <h3 className="font-semibold text-3xl mb-8">
                  {" "}
                  {costumer.nombre}{" "}
                </h3>
                <p> {costumer.comentario}</p>
                <div className="flex gap-x-5 items-center mt-8">
                  <a href={costumer.link}>Ver post en instagram</a>
                  <img src={Arrow} alt="arrow" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CostumersCard;

/*  */
