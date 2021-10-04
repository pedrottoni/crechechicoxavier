import { useState } from "react";
import Image from "next/image";
import { Arrows } from "../items/Arrows";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

/*
Props:
	Card
		- className
		- icon
	Header
		- title
		- span
	Content
	 - children
 */

export default function CardSlideData(props) {
  const [dataNumber, setdataNumber] = useState(props.inicial);
  var dados = props.dados;

  return (
    <Card
      className={props.className}
      icon={props.icon}
      title={props.title}
      span={props.span}
    >
      <>
        <div className="dados">
          <h2>{props.images[dados[dataNumber]].span}</h2>
          <Arrows
            left={true}
            right={true}
            onClickLeft={() =>
              dataNumber > 0
                ? setdataNumber(dataNumber - 1)
                : setdataNumber(props.dados.length - 1)
            }
            onClickRight={() =>
              dataNumber < props.dados.length - 1
                ? setdataNumber(dataNumber + 1)
                : setdataNumber(0)
            }
          />
        </div>
        <Swiper navigation={true}>
          {props.images[dados[dataNumber]].dados.map((images) => (
            <SwiperSlide key={images.key}>
              <div className="images">
                <Image
                  src={`/images/${images.src}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="0% 40%"
                />
              </div>
              {images.imagesSubtitle ? (
                <p className="images__subtitle">{images.imagesSubtitle}</p>
              ) : null}
              <h1>{images.title}</h1>
              <h2>{images.span}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <style jsx global>{`
        .card {
          border-radius: 2rem;
        }

        .card .dados {
          position: relative;
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 2rem;
        }

        .card .dados .arrow {
          width: 20px;
          height: 20px;
          fill: #db3541;
          cursor: pointer;
          filter: none;
        }

        .card .dados .arrow--left {
          left: 8rem;
        }

        .card .dados .arrow--right {
          right: 8rem;
        }

        .card .swiper {
          position: relative;
          margin: 0;
          padding: 0;
          width: clamp(40rem, 50vw, 65rem);
          height: 43vh;
        }

        .card .swiper .images {
        }

        .card .cardContent .images ::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 60%;
          background: linear-gradient(0deg, hsl(0deg 0% 0% / 50%), transparent);
          bottom: 0;
          z-index: 2;
        }

        .card .swiper h1,
        .card .swiper h2 {
          position: absolute;
          bottom: 5rem;
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          z-index: 3;
        }

        .card .swiper h1 {
          bottom: 3rem;
          color: #ffffff;
          font-size: 3.8rem;
          filter: drop-shadow(2px 2px 2px black);
        }

        .card .swiper h2 {
          bottom: 1rem;
          color: hsl(44deg 100% 56%);
          filter: drop-shadow(2px 2px 2px black);
        }
      `}</style>
    </Card>
  );
}
