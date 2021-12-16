import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Arrows } from "../items/Arrows";
import Modal from "./Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

/*
Props:
	Modal
	  - title
	  - span
	  - subTitle
    - onClick
    - slidesPerView
	  - images
	  - dados
	  - inicial
	Content
	  - children
 */

export default function ModalDataSlide(props) {
  const [dataNumber, setdataNumber] = useState(props.inicial);
  var dados = props.dados;

  return (
    <Modal
      onClick={props.onClick}
      className={props.className ? props.className : ""} 
      title={props.title}
      subtitle={props.subtitle}
      images={props.images}
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
        <Swiper
          spaceBetween={0}
          slidesPerView={props.slidesPerView}
          navigation={true}
        >
          {props.images[dados[dataNumber]].dados.map((images) =>
            props.link ? (
              <SwiperSlide key={images.key}>
                <Link href={images.link}>
                  <a target="_blank">
                    <div className="images">
                      <Image
                        src={
                          images.image != ""
                            ? `/images/${images.image}`
                            : `/vercel.svg`
                        }
                        layout="fill"
                        objectFit="cover"
                        alt={images.image}
                      />
                    </div>
                    {images.imagesSubtitle ? (
                      <p className="images__subtitle">
                        {images.imagesSubtitle}
                      </p>
                    ) : null}
                    <h1>{images.title}</h1>
                    <h2>{images.span}</h2>
                  </a>
                </Link>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={images.key}>
                <div className="images">
                  <Image
                    src={
                      images.image != ""
                        ? `/images/${images.image}`
                        : `/vercel.svg`
                    }
                    layout="fill"
                    objectFit="cover"
                    alt={images.image}
                  />
                </div>
                {images.imagesSubtitle ? (
                  <p className="images__subtitle">{images.imagesSubtitle}</p>
                ) : null}
                <h1>{images.title}</h1>
                <h2>{images.span}</h2>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </>
      <style jsx global>{`
        .modal .modalCard {
          padding: 3rem 0 0 !important;
        }

        .modal .modalCard .modalContent {
          border-radius: 2rem;
          margin-top: 0;
        }

        .modal .modalCard .modalContent .dados {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr;
          grid-template-areas: "prev dados next";
          margin: 1rem 0;
          align-items: stretch;
          padding: 0.6rem;
          text-align: center;
        }

        .modal .modalCard .modalContent .dados h2 {
          grid-area: dados;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 2.4rem;
          color: hsl(195deg 80% 40%);
        }

        .modal .modalCard .modalContent .dados .arrow {
          width: 2.5rem;
          height: 2.5rem;
          fill: hsl(345deg 70% 50%);
          cursor: pointer;
          filter: none;
        }

        @media (max-width: 875px) {
          .modal .modalCard {
            padding: 3rem 3rem 0 !important;
          }

          .modal .modalCard .modalContent .dados {
            grid-template-columns: 1fr 8fr 1fr;
          }
        }
      `}</style>
    </Modal>
  );
}
