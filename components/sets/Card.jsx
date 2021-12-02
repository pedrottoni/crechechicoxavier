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
                  objectPosition="50% 0%"
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
          width: 100%;
          min-width: calc(12vw + 11vh);
          ${props.icon ? "padding: 8rem 4rem 3rem;" : "padding: 3rem;"}
          letter-spacing: -0.1rem;
          border-radius: 2rem;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
          text-shadow: none;
          transition: all .3s cubic-bezier(0.300, -0.500, 0.300, 2.500);
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
          display: grid;
          grid-template-rows: 1fr 0.3fr;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .card header .cardTitle h1 {
          text-transform: uppercase;
          font-size: 4rem;
          color: hsl(345deg 70% 50%);
        }

        .card header .cardTitle h2 {
          text-transform: uppercase;
          font-weight: 900;
          color: #148fb8;
        }

        .card header .cardImage {
          position: relative;
          width: 100%;
          height: clamp(10rem,26vh,32rem);
          margin: 0 0 3rem;
          filter: drop-shadow(0.2rem 0.2rem 0.4rem hsl(306deg 45% 15% / 40%));
        }

        .cardImage img {
          border-radius: 2rem;
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

        .card::after {
          content: "";
          position: absolute;
          width: 101%;
          height: 102%;
          background: #ffc420;
          z-index: -1;
          border-radius: 2rem;
          top: 0rem;
          left: 0.5rem;
          transform: rotateZ(0.8deg);
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
        }

        @media (max-width: 875px) {
          .card header .cardImage {
           height: clamp(20rem,22vh,32rem);
          }

          .card header .cardTitle {
          }

          .card header .cardTitle h1 {
            font-size: clamp(11pt, 2.8vw, 24pt);
          }

          .card header .cardTitle h2 {
            font-size: clamp(8pt, 5vw / 2, 20pt);
          }
        }
      `}</style>
    </div>
  );
}
