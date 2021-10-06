import Image from "next/image";

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
    // Início do card definindo se ele possui onCLick
    <div className={"card " + props.className} onClick={props.cardOnCLick}>
      {/* Ícone do card */}
      {props.icon && (
        <div className="cardIcon">
          <Image src={`/images/${props.icon}.svg`} layout="fill" />
        </div>
      )}
      {/* Header do card */}
      <header>
        <>
          <div className="cardTitle">
            {props.imageTop && (
              <div className="cardImage">
                <Image
                  src={`/images/${props.imageTop}`}
                  layout="fill"
                  objectFit={props.objectFit}
                  objectPosition={props.objectPosition}
                />
              </div>
            )}
            <h1>{props.title}</h1>
            {props.span && <h2>{props.span}</h2>}
            {props.imageBottom && (
              <div className="cardImage">
                <Image
                  src={`/images/${props.imageBottom}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 0%"
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
          ${props.cardOnCLick && "cursor: pointer;"}
        }

        .cardIcon {
          position: absolute;
          width: 11rem;
          height: 11rem;
          top: -5.5rem;
          background: #db3541;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .card header .cardTitle h1 {
          text-transform: uppercase;
          font-size: 3rem;
          color: #db3541;
        }

        .card header .cardTitle h2 {
          text-transform: uppercase;
          font-weight: 900;
          color: #148fb8;
        }

        .card header .cardImage {
          position: relative;
          width: 100%;
          height: clamp(10rem, 22vh, 24rem);
          margin: 0 0 3rem;
          filter: drop-shadow(0.2rem 0.2rem 0.4rem hsl(306deg 45% 15% / 40%));
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
      `}</style>
    </div>
  );
}
