import Links from "../sets/Links";
import Social from "../sets/Social";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";
import PageHeader from "../sets/PageHeader";

export default function Center(props) {
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
          place-content: end;
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
          flex-direction: column;
          place-items: center;
          place-content: space-between;
          text-align: center;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        main header {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        main header .title {
          margin: 0 0 1.5rem !important;
          max-width: 90rem !important;
        }

        main nav {
          flex-wrap: nowrap;
          filter: none;
          width: 110rem;
        }

        main nav a {
          color: #fff;
        }

        main nav a span {
          font-size: 3rem;
          color: #ffc420;
        }

        main nav a .linkIcon {
          width: clamp(16rem, 25vh, 28rem) !important;
          height: clamp(16rem, 25vh, 28rem) !important;
        }
      `}</style>
    </>
  );
}
