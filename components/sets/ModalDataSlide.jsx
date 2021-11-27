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
          spaceBetween={15}
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
        .modal .modalCard .modalContent {
          border-radius: 2rem;
        }

        .modal .modalCard .modalContent .dados {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr;
          gap: 0px 0px;
          grid-template-areas: "prev dados next";
          margin-bottom: 2rem;
          align-items: stretch;
          padding: 0.6rem;
        }

        .modal .modalCard .modalContent .dados h2 {
          grid-area: dados;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 2.4rem;
          color: #148fb8;
        }

        .modal .modalCard .modalContent .dados .arrow {
          width: 2.5rem;
          height: 2.5rem;
          fill: hsl(345deg 70% 50%);
          cursor: pointer;
          filter: none;
        }
      `}</style>
    </Modal>
  );
}
