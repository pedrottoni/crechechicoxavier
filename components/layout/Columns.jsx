import menu from "../../data/menu";
import Social from "../sets/Social";
import PageHeader from "../sets/PageHeader";

import Media from "react-media";

export default function Columns(props) {
  return (
    <>
      <Media query="(min-width: 875px)">
        {(matches) => {
          {
            return matches ? (
              <>
                <header>
                  <PageHeader menu={menu} />
                </header>
                <main>{props.children}</main>
                <Social />
              </>
            ) : (
              <>
                <PageHeader menu={menu} />
                <main>{props.children}</main>
              </>
            );
          }
        }}
      </Media>
      <style jsx global>{`
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

        header nav div:nth-child(5) a{
          padding-left: 2rem !important;
          color: hsl(70deg 90% 60%);
        }

        #logo {
          position: relative;
          width: 25rem;
          height: 12rem;
          cursor: pointer;
          filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55))
            drop-shadow(1px 2px 10px rgba(94, 36, 88, 0.25));
        }

        main {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 9rem;
        }

        main nav {
          place-content: start;
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          min-width: clamp(66rem, 34vw, 70rem);
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
          max-width: clamp(60rem, 62vh, 36vw);
          height: max-content;
          max-height: 62vh;
          margin: 0 auto;
        }

        @media (max-width: 875px) {
          #__next {
            position: fixed;
            bottom: 0;
            top: 0;
            width: 100vw;
            height: 90vh;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas:
              "header"
              "main"
              "footer";
            place-content: center;
            place-items: center;
            padding: calc(2vh + 1rem) 0;
          }

          h1 {
            font-size: 6rem;
          }

          #logo {
            grid-area: header;
          }

          main {
            grid-area: main;
            text-align: center;
          }

          main nav {
            place-content: center;
          }

          .buttonMenu {
            grid-area: footer;
            position: relative !important;
            bottom: 0 !important;
          }

          .left {
            width: 100%;
            min-width: 0;
            text-align: center;
            align-items: center;
          }

          .left nav.stateBtn {
            place-content: center;
          }

          .modal .modalCard .modalContent .dados h2 {
            font-size: 2.4rem;
          }

          .modalCard header {
            justify-content: center !important;
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
