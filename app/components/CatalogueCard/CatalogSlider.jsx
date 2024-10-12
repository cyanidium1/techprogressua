import dynamic from "next/dynamic";
import Image from "next/image";
import nextSvg from "../../../public/icons/HomePage/arrow-forward.svg";
import prevSvg from "../../../public/icons/HomePage/arrow-back.svg";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <Image src={nextSvg} alt="arrow to next slide" width="24" height="24" />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <Image src={prevSvg} alt="arrow to previous slide" width="24" height="24" />
  </div>
);

export default function CatalogSlider({ photos = [] }) {
  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 45,
    className: "slider",
  };

  if (!photos || photos.length === 0) {
    return <p className="text-center">Фото недоступні</p>;
  }

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className="slide">
            <Image
              src={photo}
              alt={`Image ${index + 1}`}
              sizes="100vh"
              width={500}
              height={300}
              className="object-contain w-[80%] max-h-44 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
