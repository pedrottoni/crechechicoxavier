import Image from "next/image";

export default function Centralized(props) {
  return (
    <>
      <header>
        <Image
          src="/images/logo.svg"
          alt="Picture of the author"
          width="500"
          height="500"
        />
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </header>
      <nav>{props.menu}</nav>
      <footer>SOCIAL</footer>

      <style jsx global>{`
        #__next {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.7fr;
          place-content: baseline;
          place-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
