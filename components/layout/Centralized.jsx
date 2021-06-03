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
        h1 {
          color: #555;
        }
      `}</style>
    </>
  );
}
