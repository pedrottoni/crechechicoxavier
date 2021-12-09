import Image from "next/image";
import { motion } from "framer-motion";

/*
Props:
  Card
    - className
    - onClick
    - icon
  Header
    - imageTop
    - title
    - span
    - imageBottom
    - objectFit
    - objectPosition
  Content
   - children
 */

export default function Card(props) {
  return (
    // Início do card definindo se ele possui onClick
    <div className={"card " + props.className} onClick={props.cardonClick}>
      {/* Ícone do card */}
      {props.icon && (
        <div className="cardIcon">
          <Image src={`/images/${props.icon}.svg`} layout="fill" alt="" />
        </div>
      )}
      {/* Header do card */}
      <header>
        <>
          <div className="cardTitle">
            {props.imageTop && (
              <div className="cardImage">
                <Image
                  src={
                    props.imageTop != "!"
                      ? `/images/${props.imageTop}`
                      : `/vercel.svg`
                  }
                  layout="fill"
                  objectFit={props.objectFit}
                  objectPosition={props.objectPosition}
                  alt={props.imageTop}
                />
              </div>
            )}
            <div className="cardText">
              <h1>{props.title}</h1>
              {props.span && <h2>{props.span}</h2>}
            </div>
            {props.imageBottom && (
              <div className="cardImage">
                <Image
                  src={
                    props.imagesBottom != ""
                      ? `/images/${props.imageBottom}`
                      : `/vercel.svg`
                  }
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 100%"
                  alt={props.imageBottom}
                />
              </div>
            )}
          </div>
        </>
      </header>
      {props.children && <div className="cardContent">{props.children}</div>}

      <style jsx>{``}</style>

      <style jsx global>{`
        .card {
          position: relative;
          top: 0;
          ${props.icon ? "top: 2rem;" : ""}
          display: flex;
          flex-direction: column;
          place-items: center;
          place-content: center;
          background: #fff;
          min-width: calc(100vw / 5);
          ${props.icon ? "padding: 8rem 3rem 2rem;" : "padding: 3rem;"}
          letter-spacing: -0.1rem;
          border-radius: 2rem;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
          text-shadow: none;
          transition: all 0.3s cubic-bezier(0.3, -0.5, 0.3, 2.5);
          ${props.cardonClick ? "cursor: pointer;" : ""}
        }

        .card:hover {
          ${props.cardonClick ? "top: -1rem" : ""}
        }

        .cardIcon {
          position: absolute;
          width: 11rem;
          height: 11rem;
          top: -5.5rem;
          background: hsl(345deg 70% 50%);
          border-radius: 100%;
          border: 1.5rem solid transparent;
          outline: 0.6rem solid #fff;
          transform: rotateZ(-4deg);
          box-shadow: 0.3rem 1rem 2rem -1rem hsl(356deg 70% 25%);
        }

        .cardIcon div {
          filter: drop-shadow(0.2rem 0.2rem 0.2rem hsl(356deg 70% 30%));
        }

        .card header .cardTitle {
          width: 100%;
        }

        .card header .cardText {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          bottom: 2rem;
          width: 100%;
          z-index: 2;
        }

        .card header .cardTitle h1 {
          text-transform: uppercase;
          font-size: clamp(11pt, 3.5vw / 1.5, 64pt);
          color: hsl(345deg 70% 50%);
          filter: none;
        }

        .card header .cardTitle h2 {
          font-size: clamp(11pt, 3.5vw / 1.5, 64pt);
          margin-top: -0.5rem;
          text-transform: uppercase;
          color: hsl(195deg 80% 40%);
          font-family: "Lilita One", cursive;
        }

        .card header .cardImage {
          position: relative;
          height: clamp(10rem, 100vh / 5, 40rem);
          border-radius: 2rem;
          margin: 0rem 0 3rem;
        }

        .swiper-wrapper .card {
          padding: 0;
        }

        .swiper-wrapper .card header .cardImage {
          height: clamp(10rem, 100vh / 2, 40vh);
          border-radius: 2rem;
          margin: 0;
          filter: saturate(1.2) brightness(1.1) contrast(1.1);
        }

        .swiper-wrapper .card header .cardImage:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: clamp(10rem, 100vh / 2, 60%);
          background: linear-gradient(
            1deg,
            hsl(21deg 100% 20% / 36%),
            transparent
          );
          z-index: 1;
          border-radius: 2rem;
        }

        .swiper-wrapper .card header .cardText {
          position: absolute;
          width: 100%;
          height: clamp(8rem, 12vh, 10rem);
          background: hsl(208deg 100% 97%);
          padding-top: 0.5rem;
          bottom: 0;
          border-radius: 0 0 2rem 2rem;
          backdrop-filter: blur(20px);
        }

        .swiper-wrapper .card header .cardTitle h1 {
          font-size: clamp(10.3pt, 3.5vw / 2, 44pt);
          color: hsl(345deg 70% 50%);
        }

        .swiper-wrapper .card header .cardTitle h2 {
          font-size: clamp(10.3pt, 3.5vw / 2, 44pt);
          color: hsl(195deg 80% 40%);
        }

        .card::after {
          content: "";
          position: absolute;
          width: 101%;
          height: 102%;
          background: hsl(44deg 100% 56%);
          z-index: -1;
          border-radius: 2rem;
          top: 0rem;
          left: 0.5rem;
          transform: rotateZ(0.8deg);
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
        }

        .cardImage img {
          border-radius: 1.8rem;
        }

        .card .cardContent {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 2rem 0 1rem;
          overflow-y: auto;
          text-shadow: none;
        }

        .card .cardContent p {
          font-size: 2rem;
          padding-right: 1rem;
        }

        @media (max-width: 875px) {
          main nav .card {
            width: clamp(16rem, 100vw / 3.3, 22rem);
            min-width: 0;
            padding: 2rem 0.3rem;
          }

          main nav .card header .cardImage {
            height: clamp(12rem, 100vw / 5, 20rem);
          }
        }
      `}</style>
    </div>
  );
}
