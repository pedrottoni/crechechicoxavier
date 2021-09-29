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
        <h2>{props.dados.length}</h2>
        <div className="month">
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
          <h2>{dados[dataNumber]}</h2>
        </div>
        <Swiper spaceBetween={30} slidesPerView={2.3} navigation={true}>
          {props.images[dados[dataNumber]].props.dadosSub.map((images) =>
            props.link ? (
              <SwiperSlide key={images.key}>
                <Link href={images.link}>
                  <a target="_blank">
                    <div className="images">
                      <Image
                        src={`/images/${images.image}.svg`}
                        layout="fill"
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
                  <Image src={`/images/${images.image}.svg`} layout="fill" />
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

        .modal .modalCard .modalContent .month {
          position: relative;
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 2rem;
        }

        .modal .modalCard .modalContent .month .arrow {
          width: 20px;
          height: 20px;
          fill: #db3541;
          cursor: pointer;
          filter: none;
        }

        .modal .modalCard .modalContent .month .arrow--left {
          left: 40rem;
        }

        .modal .modalCard .modalContent .month .arrow--right {
          right: 40rem;
        }

        .modal .modalCard .modalContent .swiper {
          position: relative;
          margin: 0;
          padding: 3rem 5rem 5rem;
          width: -webkit-fill-available;
        }
      `}</style>
    </Modal>
  );
}
