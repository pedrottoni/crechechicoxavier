import Image from "next/image";

export default function Centralized(props) {
  return (
    <>
      <header>
        <div className="logo">
          <Image src="/images/logo.svg" alt="Picture of the author" layout="fill" />
        </div>
        <h1 className="title">
          {props.title} {props.span ? <spam className="span">{props.span}</spam> : null}
        </h1>
        <h2 className="subTitle">{props.subtitle}</h2>
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
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 0 8rem;
        }

        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 6rem;
          place-content: center;
        }

        .logo {
          position: relative;
          width: 33rem;
          height: 15rem;
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
          margin: 12rem 0 0;
        }
      `}</style>
    </>
  );
}
