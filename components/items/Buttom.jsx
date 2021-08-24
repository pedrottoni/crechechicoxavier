import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Buttom(props) {
  return (
    <>
      <Link href={`/${props.link}`}>
        <a>
          <div>{props.image ? <Image src={`/images/${props.link}.svg`} layout="fill" /> : null}</div>
          {props.text}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: ${props.vert ? " row" : " column"};
          place-items: center;
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
        }

        a div {
        position: relative;
        width: 16rem;
        height: 12rem;
        margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
