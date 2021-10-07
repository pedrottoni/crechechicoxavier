import Links from "../sets/Links";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";
import Social from "../sets/Social";
import PageHeader from "../sets/PageHeader";

export default function Columns(props) {
  return (
    <>
      <header>
        <PageHeader menu={menu} />
      </header>
      <main>{props.children}</main>
      <Social />
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
          filter: none;
        }

        header nav a {
          font-size: 2rem !important;
        }

        header svg {
          position: relative;
          width: 25rem;
          height: 12rem;
          cursor: pointer;
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
          max-width: 40vw;
          height: max-content;
          max-height: 62vh;
        }
      `}</style>
    </>
  );
}
