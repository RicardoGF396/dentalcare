import Arrow from "../../assets/arrow.svg";
import costumers from "../../data/costumers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CostumersCard() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  };

  return (
    <div>
      <Slider {...settings} >
      {costumers.map((costumer) => {
        return <div>

        <div className="comment-slide h-[550px] w-[310px] bg-light-blue py-12 px-8 rounded-2xl" key={costumer.nombre}>
          <h3 className="font-semibold text-3xl mb-8"> {costumer.nombre} </h3>
          <p> {costumer.comentario}</p>
          <div className="flex gap-x-5 items-center mt-8">
            <a href={costumer.link}>Ver post en instagram</a>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>

        </div>
      })}
      </Slider>
    </div>
  )
}

export default CostumersCard;
