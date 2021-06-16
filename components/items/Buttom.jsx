import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Buttom(props) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <motion.div variants={item}>
      <Link href={`/${props.link}`}>
        <a>
          {props.image ? (
            <Image src={`/images/${props.link}.svg`} width="60" height="60" />
          ) : null}
          <p>{props.text}</p>
        </a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          flex-direction: ${props.vert ? " row" : " column"};
          place-items: center;
        }
      `}</style>
    </motion.div>
  );
}
