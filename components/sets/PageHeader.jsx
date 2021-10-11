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
              className={
                router.pathname.indexOf(menuItem.link) ? null : "active"
              }
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
            filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55))
              drop-shadow(1px 10px 12px rgba(94, 36, 88, 0.45));
            align-items: center;
          }

          a:hover {
            line-height: 2;
          }

          a.active:after {
            content: "";
            width: 100%;
            height: 0.5rem;
            background: #ffc420;
            position: absolute;
            top: 4rem;
            border-radius: 2rem;
          }
        `}</style>
      </motion.nav>
    </>
  );
}
