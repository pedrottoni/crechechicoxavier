import Image from "next/image";
import Menu from "../sets/Menu";
import menu from "../../data/menu";

export default function Columns(props) {
  return (
    <>
      <header>
        <div className="logo">
          <Image src="/images/logo.svg" alt="Picture of the author" layout="fill" />
        </div>
          <Menu menu={menu} />
      </header>
      <main>
        <h1 className="title">
          {props.title} {props.span ? <spam className="span">{props.span}</spam> : null}
        </h1>
        <h2 className="subTitle">{props.subtitle}</h2>
        {props.children}
      </main>
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
          text-shadow: 2px 3px 0px #5e2458, 0px 2px 7px #5e2458, 0px 1px 0px #5e2458;
        }

        header {
          grid-area: header;
          display: flex;
          align-items: center;
          margin: 0 0 8rem;
        }

        nav {
          display: flex;
          justify-content: flex-end;
          gap: 6rem;
          width: 100%
        }

        .logo {
          position: relative;
          width: 33rem;
          height: 15rem;
        }

        main {
          grid-area: main;
        }

        .title {
          color: #fff;
          text-transform: uppercase;
          margin: 6rem 0 2rem;
          max-width: 65rem;
        }

        .span {
          color: #ffc420;
        }

        .subTitle {
          max-width: 90rem;
        }

        footer {
          grid-area: footer;
          margin: 12rem 0 0;
        }
      `}</style>
    </>
  );
}
