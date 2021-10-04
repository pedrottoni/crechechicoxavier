import Card from "./Card";
import { useState } from "react";
import Image from "next/image";
import { Arrows } from "../items/Arrows";

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
	 - slides
	 - slidesPerView
 */

export default function CardSlide(props) {
  return (
    <Card
      className={props.className}
      icon={props.icon}
      title={props.title}
      span={props.span}
    >
      {/*
	  <div ref={sliderRef} className="keen-slider">
        {props.slides.map((slide) => (
          <div className="keen-slider__slide">
            <div className="images">
              <Image src={`/images/contato.svg`} layout="fill" />
            </div>
            <p className="images__subtitle">{slide.subtitle}</p>
          </div>
        ))}
      </div>
	  */}
      <style jsx global>{`
        .card .arrow {
          width: 6rem;
          height: 100%;
          background: red;
          padding: 0 1rem;
        }

        .card .arrow--left {
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, hsl(0deg 0% 0% / 5%), transparent);
        }

        .card .arrow--right {
          right: 0;
          height: 100%;
          background: linear-gradient(
            -90deg,
            hsl(0deg 0% 0% / 5%),
            transparent
          );
        }

        .card .cardContent {
          border-radius: 2rem;
        }

        .card .cardContent .images {
          position: relative;
          margin: 0 auto;
          width: 12rem;
          height: 12rem;
        }

        .card .cardContent .images__subtitle {
          margin-top: 1.8rem;
          font-size: 2rem;
          text-align: center;
          text-shadow: none;
          line-height: 2.8rem;
        }
      `}</style>
    </Card>
  );
}
