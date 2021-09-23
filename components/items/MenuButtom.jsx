import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuButtom(props) {
	return (
		<motion.buttom
			onClick={props.onCLick}
			variants={props.variants}
			className="btn">
			{props.image ? (
				<div className="btnIcon">
					<Image src={`/images/${props.link}.svg`} layout="fill" />
				</div>
			) : null}
			<div className="btnText">
				{props.title}
				<br />
				<b>{props.span ? props.span : null}</b>
			</div>

			<style jsx global>{`
				.btn {
					display: flex;
					flex-direction: ${props.vert ? " row" : " column"};
					place-items: center;
					font-size: ${props.vert ? "2.2rem" : "2.5rem"};
					font-weight: 900;
					color: #fff;
					text-transform: uppercase;
				}

				.btn .btnIcon {
					position: relative;
					width: ${props.vert ? "8rem" : "16rem"};
					height: ${props.vert ? "8rem" : "12rem"};
					margin-bottom: 2rem;
				}

				.btn b {
					color: #ffc420;
					font-size: 2.5rem;
				}
			`}</style>
		</motion.buttom>
	);
}
