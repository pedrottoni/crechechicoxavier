import Image from "next/image";

export default function () {
  return (
    <footer>
      <Image src="/images/facebook.svg" layout="fill" />
      <Image src="/images/instagram.svg" layout="fill" />
      <Image src="/images/youtube.svg" layout="fill" />

      <style jsx global>{`
        footer {
          position: relative;
          padding-bottom: 1rem;
          width: 100vw;
          display: flex;
          place-self: center;
          place-content: center;
        }

        footer div {
          position: relative !important;
          width: 4.5vw;
          height: 5rem;
        }

        footer div img {
          filter: drop-shadow(0rem 0.2rem 0.2rem hsla(305, 45%, 25%, 0.5));
        }
      `}</style>
    </footer>
  );
}
