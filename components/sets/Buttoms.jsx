import MenuButtom from "../items/MenuButtom";
import { motion } from "framer-motion";

export default function Buttoms(props) {
	const list = {
		animate: { transition: { staggerChildren: 0.05 } },
		exit: { transition: { staggerChildren: 0.05 } }
	};
	const animationMenu = {
		initial: { y: 100, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { staggerChildren: 1 } },
		exit: { opacity: 0, y: 30, transition: { staggerChildren: 1 } }
	};

	return (
		<motion.nav
			className={props.class}
			initial="initial"
			animate="animate"
			exit="exit"
			variants={list}
			place={props.place}>
			{props.menu.map((menuItem) => (
				<MenuButtom
					key={menuItem.link}
					link={menuItem.link}
					text={menuItem.text}
					image={props.image}
					vert={props.vert}
					span={menuItem.span}
					variants={animationMenu}
				/>
			))}

			<style jsx global>{`
				nav {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: 6rem;
					place-content: center;
					width: 100%;
					filter: drop-shadow(2px 2px 2px black);
				}
			`}</style>
		</motion.nav>
	);
}
