import Menu from "../sets/Menu";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";

export default function Columns(props) {
  return (
    <>
      <header>
        <div className="logo">
          <Logo />
        </div>
        <Menu menu={menu} image={false} />
      </header>
      <main>{props.children}</main>
      <footer>SOCIAL</footer>
      <style jsx global>{`
        #__next {
          display: grid;
          grid-template-columns: 1fr 1.6fr 0.4fr;
          grid-template-rows: 0.5fr 1.5fr 1fr;
          gap: 0px 0px;
          grid-template-areas:
            "header header header"
            "main main footer"
            "main main footer";
          height: 100vh;
          text-shadow: 0px 3px 3px hsl(306deg 45% 25%), 0px 12px 20px hsl(306deg 45% 25% / 40%);
        }

        header {
          grid-area: header;
          display: flex;
          align-items: center;
          margin: 0 0 8rem;
        }

        header nav {
          place-content: end;
        }

        header nav a {
          font-size: 2rem !important;
        }

        .logo {
          position: relative;
          width: 20rem;
          height: 15rem;
        }

        main {
          grid-area: main;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        main .title {
          color: #fff;
          text-transform: uppercase;
          margin: 6rem 0 2rem;
          max-width: 65rem;
        }

        main .span {
          color: #ffc420;
        }

        main .subTitle {
          max-width: 90rem;
        }

        main nav {
          place-content: start;
        }

        footer {
          grid-area: footer;
          margin: 12rem 0 0;
        }
      `}</style>
    </>
  );
}
