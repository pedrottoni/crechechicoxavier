import Image from "next/image";

export default function Centralized(props) {
  return (
    <>
      <header>
        <Image src="/images/logo.svg" alt="Picture of the author" layout="responsive" width="650" height="138" />
        <div className="title">
          <h1>
            {props.title} {props.span ? <spam className="span">{props.span}</spam> : null}
          </h1>
        </div>
        <h2>{props.subtitle}</h2>
      </header>
      {props.children}
      <footer>SOCIAL</footer>

      <style jsx global>{`
        #__next {
          display: flex;
          place-items: center;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          height: 100vh;
          text-shadow: 2px 3px 0px #5e2458, 0px 2px 7px #5e2458, 0px 1px 0px #5e2458;
        }

        header {
          max-width: 84rem;
          margin: 0 0 8rem;
        }

        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 8rem;
          place-content: center;
        }

        .title {
          color: #fff;
          text-transform: uppercase;
          margin: 6rem 0 2rem;
        }

        .span {
          color: #ffc420;
        }

        footer {
          margin: 12rem 0 0
      `}</style>
    </>
  );
}
