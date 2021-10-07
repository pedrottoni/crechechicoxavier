import MenuLink from "../items/MenuLink";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Logo from "../../public/images/Logo";

/*
Props:
- class
- place
- menu
- image
- vert

*/

export default function PageHeader(props) {
  const router = useRouter();

  const list = {
    animate: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.05 } },
  };
  const animationMenu = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { staggerChildren: 1 } },
    exit: { opacity: 0, y: 30, transition: { staggerChildren: 1 } },
  };

  return (
    <>
      <Logo />
      <motion.nav
        className="scale-up-center"
        initial={router.pathname === "/" && "initial"}
        animate="animate"
        exit={router.pathname === "/" && "exit"}
        variants={list}
        place={props.place}
      >
        {props.menu.map((menuItem) => (
          <motion.div key={menuItem.link} variants={animationMenu}>
            <MenuLink
              link={menuItem.link}
              text={menuItem.text}
              spam={menuItem.spam}
              vert={props.vert}
            />
          </motion.div>
        ))}

        <style jsx global>{`
          nav {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 5rem;
            place-content: center;
            width: 100%;
            filter: drop-shadow(2px 2px 2px black);
          }

          .scale-up-center {
            animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
              both;
          }

          @-webkit-keyframes scale-up-center {
            0% {
              transform: scale(0.5);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes scale-up-center {
            0% {
              transform: scale(0.5);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </motion.nav>
    </>
  );
}
