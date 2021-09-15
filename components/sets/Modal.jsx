import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../items/Title";

export default function Card(props) {
	return (
		<>
			<div className="modal" ref={props.ref}>
				<motion.div
					className="backDrop"
					onClick={props.onClick}
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 1] }}
					exit={{ opacity: 0 }}
				/>
				<motion.div
					className="modalCard"
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.2 }}
					transition={{ duration: 0.1 }}>
					<header>
						<Title
							title={props.title}
							span={props.span}
							subtitle={props.subtitle}
						/>
						<button type="button" onClick={props.onClick}>
							X
						</button>
					</header>
					<div className="modalContent">{props.children}</div>
				</motion.div>
			</div>
			<style jsx global>{`
				.modal {
					position: fixed;
					top: 0;
					left: 0;
					z-index: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100vh;
				}

				.backDrop {
					position: fixed;
					display: flex;
					flex-direction: column;
					place-items: center;
					place-content: center;
					width: 100vw;
					height: 100vh;
					background: rgba(0, 0, 0, 0.5);
					backdrop-filter: blur(15px);
					z-index: -1;
				}

				.modalCard {
					display: flex;
					flex-direction: column;
					place-items: center;
					width: 130rem;
					max-height: 95vh;
					padding: 4rem;
					border-radius: 2rem;
					background: #fff;
					text-align: center;
				}

				.modalImage {
					position: relative;
					margin-bottom: 2rem;
					height: 40vh;
					width: 100%;
				}

				.modal header {
					position: relative;
					display: flex;
					justify-content: space-between;
					width: inherit;
					text-align: center;
				}

				.modal header button {
					position: absolute;
					right: 4rem;
				}
				.modalContent {
					max-height: 60vh;
					width: 100%;
					text-align: left;
					overflow-y: auto;
				}
			`}</style>
		</>
	);
}
