import menu from "../../data/menu";
import Social from "../sets/Social";
import PageHeader from "../sets/PageHeader";

import Media from "react-media";

export default function Columns(props) {
  return (
    <>
      <header>
        <PageHeader menu={menu} />
      </header>
      <main>{props.children}</main>
      <Media query="(min-width: 875px)">
        {(matches) => {
          {
            return matches && <Social />;
          }
        }}
      </Media>
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          place-content: space-between;
          height: 100vh;
          margin: 0 auto;
          padding: calc(2vh + 1rem) clamp(2rem, 6vw, 20rem);
          text-shadow: 0 0.2rem 0 hsl(195deg 75% 30%),
            0 0.3rem 0.4rem hsl(195deg 75% 30%);
        }

        header {
          display: flex;
          align-items: center;
        }

        header nav {
          place-content: flex-end;
        }

        header nav a {
          font-size: 2.7rem !important;
          letter-spacing: 0.03rem;
        }

        header svg {
          position: relative;
          width: 25rem;
          height: 12rem;
          cursor: pointer;
          filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55))
            drop-shadow(1px 2px 10px rgba(94, 36, 88, 0.25));
        }

        main {
          display: flex;
          place-content: space-between;
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        main nav {
          place-content: start;
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
        }

        .left nav {
          margin-top: 6rem;
        }

        .left nav.stateBtn {
          gap: 3rem;
          text-shadow: none;
        }

        .right {
          position: relative;
          display: flex;
          gap: 2rem;
          justify-content: center;
          max-width: 37vw;
          height: max-content;
          max-height: 62vh;
          margin-right: 4rem;
        }

        @media (max-width: 875px) {
          main {
            gap: 0 !important;
            flex-wrap: wrap;
            margin: auto;
            padding-bottom: 20vh;
          }

          header {
            place-content: center;
          }

          main {
            gap: 0 !important;
            flex-wrap: wrap;
          }

          h1 {
            font-size: 6rem;
          }

          .left {
            width: 100%;
            text-align: center;
            align-items: center;
            position: fixed;
            left: 0;
            bottom: clamp(20rem, 40vh, 50% - 18rem);
          }

          .left nav.stateBtn {
            place-content: center;
          }

          .modal .modalCard .modalContent .dados {
            grid-template-columns: 1fr clamp(170px, 60vw, 212px) 1fr !important;
          }

          .modal .modalCard .modalContent .dados h2 {
            font-size: 2.4rem;
          }

          .modalCard header {
            justify-content: center !important;
          }

          .modalCard header button {
            position: absolute;
            top: -2rem;
            right: 2vw !important;
          }

          .modal-title .modalCard header h1 {
            font-size: clamp(14px, 9vw, 6rem) !important;
            color: hsl(195deg 80% 40%) !important;
          }

          .modalCard .modalContent p {
            font-size: 2.5rem;
            text-transform: initial;
            text-align: left;
          }

          .modalCard:after {
            height: 102% !important;
          }

          .modalCard .swiper h1,
          .modalCard .swiper h2 {
            font-family: "Lilita One", cursive;
            font-weight: normal;
            position: absolute;
            bottom: 5rem;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            z-index: 3;
          }

          .modalCard .swiper h1 {
            bottom: 6rem;
            color: rgb(255, 255, 255);
            font-size: clamp(16px, 6vw, 20px);
            filter: drop-shadow(black 2px 2px 2px);
          }

          .modalCard .swiper h2 {
            bottom: 1.8rem;
            font-size: clamp(16px, 5vw, 20px);
            color: rgb(255, 195, 31);
            filter: drop-shadow(black 2px 2px 2px);
          }

          .modal .modalCard .modalContent .swiper-slide {
            padding: 0 !important;
          }

          .modalContent .images {
            margin: 0 !important;
          }

          footer div {
            width: 18vw;
            height: 5.5rem;
          }
        }
      `}</style>
    </>
  );
}
