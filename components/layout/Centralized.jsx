import Image from "next/image";
import { motion } from "framer-motion";

export default function Centralized(props) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return (
    <>
      <header>
        <Image
          src="/images/logo.svg"
          alt="Picture of the author"
          width="300"
          height="138"
        />
        <h1 className="title">{props.title}</h1>
        {props.span ? <h1 className="title span">{props.span}</h1> : null}
        <p>{props.subtitle}</p>
      </header>
      <motion.nav variants={container} initial="hidden" animate="show">
        {props.children}
      </motion.nav>
      <footer>SOCIAL</footer>

      <style jsx global>{`
        #__next {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.7fr;
          place-items: center;
          height: 100vh;
          text-align: center;
        }

        header {
          max-width: 40rem;
        }

        nav {
          display: flex;
          flex-direction: row;
          gap: 3rem;
        }

        .title {
          color: #fff;
          text-shadow: 2px 3px 0px #5e2458, 0px 2px 7px #5e2458,
            0px 1px 0px #5e2458;
        }

        .span {
          color: #ffc420;
        }
      `}</style>
    </>
  );
}
