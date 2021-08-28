import { motion } from "framer-motion";

export default function Card(props) {
	return (
		<div className="card">
			<h1>{props.name}</h1>
			{props.children}
			<style jsx global>{`
				.card {
					background: #fff;
					width: 100%;
					height: 100%;
					border-radius: 2rem;
					box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
						0.1rem 0.2rem 0.5rem #5e2458;
					padding: 2rem;
				}
			`}</style>
		</div>
	);
}
