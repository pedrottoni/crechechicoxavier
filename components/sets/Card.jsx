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
                <Image src={`/images/${props.imageTop}.png`} layout="fill" />
              </div>
            )}
            <h1>{props.title}</h1>
            {props.span && <h2>{props.span}</h2>}
            {props.imageBottom && (
              <div className="cardImage">
                <Image src={`/images/${props.imageBottom}.png`} layout="fill" />
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
          ${props.icon
            ? "padding: 8rem 4rem 3rem;"
            : "padding: 4rem 4rem 4rem;"}
          letter-spacing: -0.1rem;
          border-radius: 2rem;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
          text-shadow: none;
          ${props.cardOnCLick && "cursor: pointer;"}
        }

        .cardIcon {
          position: absolute;
          width: 12rem;
          height: 12rem;
          top: -6.5rem;
          filter: drop-shadow(2px 2px 2px black);
        }

        .card header .cardTitle {
          text-align: center;
          width: 100%;
        }

        .card header .cardTitle h1 {
          text-transform: uppercase;
          font-size: 2.8rem;
          color: #db3541;
        }

        .card header .cardTitle h2 {
          text-transform: uppercase;
          font-weight: 900;
          color: #148fb8;
        }

        .card header .cardImage {
          position: relative;
          width: 24rem;
          height: 24rem;
          margin: 0 0 3rem;
          filter: drop-shadow(2px 2px 2px black);
        }

        .card .cardContent {
          position: relative;
          width: 65rem;
          height: 100%;
          max-height: 40rem;
          margin: 3rem 0 1rem;
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
