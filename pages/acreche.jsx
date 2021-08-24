import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import teste from "../data/teste";
import { motion } from "framer-motion";

export default function Acreche() {
  const list = { animate: { transition: { staggerChildren: 0.05 } }, exit: { transition: { staggerChildren: 0.05 } } };
  const animationMenu = {
    initial: { scale: 0, y: 100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1, transition: { staggerChildren: 1 } },
    exit: { scale: 0, opacity: 0, y: 30, transition: { staggerChildren: 1 } },
  };

  return (
    <>
      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>A Nossa Creche</h1>
        <Link href="/">Creche Link</Link>
        <Link href="/acreche">A Nossa Creche</Link>
        <motion.nav initial="initial" animate="animate" exit="exit" variants={list}>
          {teste.map((testeItem) => (
            <motion.div className="capas" variants={animationMenu}>
              <Image key={testeItem.id} src={"/images/" + testeItem.link + ".png"} layout="fill" objectFit="fill" />
            </motion.div>
          ))}
        </motion.nav>
      </main>

      <style jsx>{``}</style>
      <style jsx global>
        {`
          .background .color {
            filter: brightness(0.4) hue-rotate(64deg) contrast(1.4) saturate(1.4);
          }

          .background .hills {
            filter: brightness(0.5) hue-rotate(50deg) !important;
          }

          nav {
            display: flex;
            flex-flow: column wrap;
            flex-direction: row;
            justify-content: center;
            width: 100vw;
            height: 40vh;
            gap: 1rem;
          }

          nav .capas {
            position: relative;
            width: 20rem;
            height: 27rem;
          }
        `}
      </style>
    </>
  );
}
