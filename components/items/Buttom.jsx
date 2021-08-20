import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Buttom(props) {
  return (
    <>
      <Link href={`/${props.link}`}>
        <a>
          {props.image ? <Image src={`/images/${props.link}.svg`} width="60" height="60" /> : null}
          {props.text}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: ${props.vert ? " row" : " column"};
          place-items: center;
        }
      `}</style>
    </>
  );
}
