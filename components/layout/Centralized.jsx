import Image from "next/image";

export default function Centralized(props) {
  return (
    <>
      <header>
        <Image src="/images/logo.svg" alt="Picture of the author" width="300" height="138" />
        <h1 className="title">{props.title}</h1>
        {props.span ? <h1 className="title span">{props.span}</h1> : null}
        <p>{props.subtitle}</p>
      </header>
      {props.children}
      <footer>SOCIAL</footer>

      <style jsx global>{`
        #__next {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.7fr;
          place-items: center;
          height: 100vh;
          text-align: center;
        }

        header {
          max-width: 40rem;
        }

        nav {
          display: flex;
          flex-direction: row;
          gap: 3rem;
        }

        .title {
          color: #fff;
          text-shadow: 2px 3px 0px #5e2458, 0px 2px 7px #5e2458, 0px 1px 0px #5e2458;
        }

        .span {
          color: #ffc420;
        }
      `}</style>
    </>
  );
}
