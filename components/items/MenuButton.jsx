import Image from "next/image";
import { motion } from "framer-motion";

/*
Props:
	Modal
	  - onClick
	  - variants
	  - image
    - link
    - title
 */

export default function MenuButton(props) {
  return (
    <motion.button
      onClick={props.onClick}
      variants={props.variants}
      className="btn"
    >
      {props.image ? (
        <div className="btnIcon">
          <Image src={`/images/${props.link}.svg`} layout="fill" alt="" />
        </div>
      ) : null}
      {props.a ? (
        <a
          className="btnText"
          href={props.a}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
          <b>{props.span ? props.span : null}</b>
        </a>
      ) : (
        <div className="btnText">
          {props.title}
          <br />
          <b>{props.span ? props.span : null}</b>
        </div>
      )}

      <style jsx global>{`
        .btn {
          display: flex;
          flex-direction: ${props.vert ? " row" : " column"};
          place-items: center;
          font-size: ${props.vert ? "2.2rem" : "2.5rem"};
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0rem 0.15rem 0.3rem #0006;
          gap: 1rem;
        }

        .btn .btnIcon {
          position: relative;
          width: 5rem;
          height: 4.5rem;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0.1rem 0.1rem 0.2rem hsl(356deg 70% 30%));
        }

        @media (max-width: 875px) and (min-height: 420px) {
          .btn {
            flex-direction: column;
            width: clamp(14rem, 25vw, 20rem);
          }
        }
      `}</style>
    </motion.button>
  );
}
