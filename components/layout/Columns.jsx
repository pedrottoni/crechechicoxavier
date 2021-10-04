import Links from "../sets/Links";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";

export default function Columns(props) {
  return (
    <>
      <header>
        <Logo />
        <Links menu={menu} image={false} />
      </header>
      <main>{props.children}</main>
      <footer>SOCIAL</footer>
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          place-content: space-between;
          height: 100vh;
          margin: 0 auto;
          padding: 4rem;
          text-shadow: 0 0.2rem 0 hsl(195deg 75% 30%),
            0 0.3rem 0.4rem hsl(195deg 75% 30%);
        }

        header {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
        }

        header nav {
          place-content: flex-end;
        }

        header nav a {
          font-size: 2rem !important;
        }

        header svg {
          position: relative;
          width: 25rem;
          height: 15rem;
        }

        main {
          display: flex;
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

        .title {
          max-width: 58rem !important;
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
          margin: 0 auto;
          height: -webkit-fill-available;
        }

        footer {
          place-self: center;
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
