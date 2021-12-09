import Image from "next/image";
import Link from "next/link";

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
	  - images (slides)
 */

export default function ModalSlide(props) {
  return (
    <Modal
      onClick={props.onClick}
      title={props.title}
      span={props.span}
      subtitle={props.subtitle}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={props.slidesPerView}
        navigation={true}
      >
        {props.images.map((images) =>
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
                    <p className="images__subtitle">{images.imagesSubtitle}</p>
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
      <style jsx global>{`
        .modal .modalCard .modalContent {
          border-radius: 2rem;
        }
      `}</style>
    </Modal>
  );
}
