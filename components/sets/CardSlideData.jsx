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
                  src={
                    images.image != "" ? `/images/${images.image}` : `/vercel.svg`
                  }
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 30%"
                  alt={props.src}
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

        .card .cardContent {
          overflow-y: hidden !important;
        }

        .card .dados {
          position: relative;
          display: grid;
          grid-template-columns: 0.1fr 1fr 0.1fr;
          grid-template-rows: 1fr;
          gap: 0px 0px;
          grid-template-areas: "prev dados next";
          margin-bottom: 2rem;
          align-items: stretch;
          padding: 0.6rem;
        }

        .card .dados h2 {
          grid-area: dados;
          text-transform: uppercase;
          font-size: 2.5rem;
          font-weight: bold;
          color: #148fb8;
          text-align: center;
        }

        .card .dados .arrow {
          width: 2.5rem;
          height: 2.5rem;
          fill: hsl(345deg 70% 50%);
          cursor: pointer;
          filter: none;
        }

        .card .swiper {
          position: relative;
          margin: 0;
          padding: 0;
          width: 100%;
          height: calc(50vh - 6vw);
          border-radius: 2rem;
        }

        .card .cardContent {
          margin: 0.8rem 0 1rem !important;
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
          font-family: "Lilita One", cursive;
          font-weight: normal;
          position: absolute;
          bottom: 5rem;
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          z-index: 3;
        }

        .card .swiper h1 {
          bottom: 6rem;
          color: #ffffff;
          font-size: 4rem;
          filter: drop-shadow(2px 2px 2px black);
        }

        .card .swiper h2 {
          bottom: 1.8rem;
          font-size: 3.5rem;
          color: hsl(44deg 100% 56%);
          filter: drop-shadow(2px 2px 2px black);
        }
      `}</style>
    </Card>
  );
}
