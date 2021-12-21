import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <footer>
      <Link href="https://www.facebook.com/crechechicoxavier">
        <a target="_blank" rel="noopener">
          <Image src="/images/facebook.svg" layout="fill" alt="facebook" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/crechechicoxavier/">
        <a target="_blank" rel="noopener">
          <Image src="/images/instagram.svg" layout="fill" alt="instagram" />
        </a>
      </Link>
      <Link href="https://www.youtube.com/channel/UCcrACwejggA74Gu1fGrAYkQ">
        <a target="_blank" rel="noopener">
          <Image src="/images/youtube.svg" layout="fill" alt="youtube" />
        </a>
      </Link>

      <style jsx global>{`
        footer {
          position: relative;
          padding-bottom: 1rem;
          width: 100vw;
          display: flex;
          place-self: center;
          place-content: center;
          bottom: 1rem;
        }

        footer div {
          position: relative !important;
          width: clamp(12rem, 5vw, 20rem);
          height: 6rem;
        }

        footer a {
          transition: all 0.3s cubic-bezier(0.3, -0.5, 0.3, 2.5);
        }

        footer a:hover {
          transform: scale(1.2);
        }

        footer div img {
          filter: drop-shadow(0rem 0.2rem 0.2rem hsla(305, 45%, 25%, 0.5));
        }
      `}</style>
    </footer>
  );
}
