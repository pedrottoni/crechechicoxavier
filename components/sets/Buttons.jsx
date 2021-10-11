import MenuButton from "../items/MenuButton";
import { motion } from "framer-motion";

export default function Buttons(props) {
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
    <motion.nav
      className={props.class}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={list}
      place={props.place}
    >
      {props.menu.map((menuItem) => (
        <MenuButton
          key={menuItem.key}
          link={menuItem.link}
          title={menuItem.title}
          image={props.image}
          vert={props.vert}
          span={menuItem.span}
          variants={animationMenu}
          onCLick={menuItem.onClick ? menuItem.onClick : props.onClick}
        />
      ))}

      <style jsx global>{`
        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          place-content: center;
          width: 100%;
          filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55)) drop-shadow(1px 10px 12px rgba(94, 36, 88, 0.45));
        }
      `}</style>
    </motion.nav>
  );
}
