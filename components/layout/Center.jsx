import Social from "../sets/Social";
import menu from "../../data/menu";
import PageHeader from "../sets/PageHeader";

import Media from "react-media";

export default function Center(props) {
  return (
    <>
      <PageHeader menu={menu} />

      <main>{props.children}</main>
      <Media query="(min-width: 875px)">
        {(matches) => {
          {
            return matches && <Social />;
          }
        }}
      </Media>
      <style jsx global>{`
        header {
          display: flex;
          align-items: center;
        }

        header nav {
          place-content: end;
        }

        header nav a {
          font-size: 2.7rem !important;
          letter-spacing: 0.03rem;
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
          flex-direction: column;
          place-items: center;
          place-content: space-between;
          text-align: center;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        main header {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        main header .title {
          margin: 0 !important;
          max-width: 90rem !important;
        }

        main nav {
          flex-wrap: nowrap;
          filter: none;
          padding: 2rem;
        }

        main nav a {
          color: #fff;
        }

        main nav a span {
          font-size: 3rem;
          color: hsl(44deg 100% 56%);
        }

        main nav a .linkIcon {
          width: clamp(16rem, 25vh, 28rem) !important;
          height: clamp(16rem, 25vh, 28rem) !important;
        }

        @media (max-width: 875px) {
          #__next {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 3fr 1fr;
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

          .buttonMenu {
            grid-area: footer;
            position: relative !important;
            bottom: 0 !important;
          }

          .modalCard header button {
            position: absolute;
            top: -2rem;
            right: 2vw !important;
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
