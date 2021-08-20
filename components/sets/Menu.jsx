import Buttom from "../items/Buttom";
import { motion } from "framer-motion";

export default function Menu(props) {
  const list = { animate: { transition: { staggerChildren: 0.05 } }, exit: { transition: { staggerChildren: 0.05 } } };
  const animationMenu = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { staggerChildren: 1 } },
    exit: { opacity: 0, y: 30, transition: { staggerChildren: 1 } },
  };

  return (
    <motion.nav initial="initial" animate="animate" exit="exit" variants={list}>
      {props.menu.map((menuItem) => (
        <motion.div variants={animationMenu}>
          <Buttom key={menuItem.id} link={menuItem.link} text={menuItem.text} image={true} />
        </motion.div>
      ))}
    </motion.nav>
  );
}
