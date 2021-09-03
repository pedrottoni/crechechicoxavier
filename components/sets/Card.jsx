import Image from "next/image";
import { motion } from "framer-motion";
import MenuButtom from "../items/MenuButtom";

export default function Card(props) {
	return (
		<div className="card">
			<div className="cardIcon">
				<Image src={`/images/${props.image}.svg`} layout="fill" />
			</div>
			<header>
				{props.onCLickLeftA || props.onCLickRightA ? (
					<>
						<MenuButtom
							text="<- lalala"
							vert={true}
							onCLick={props.onCLickLeftA}
						/>
						<h1>{props.title}</h1>
						<MenuButtom
							text="lalala ->"
							vert={true}
							onCLick={props.onCLickRightA}
						/>
					</>
				) : (
					<h1>{props.title}</h1>
				)}
			</header>
			{props.subtitle ? <h2>{props.subtitle}</h2> : null}
			<div className="cardContent">{props.children}</div>
			{props.onCLickLeftB || props.onCLickRightB ? (
				<div className="cardBtn">
					<MenuButtom
						text="<- lalala"
						vert={true}
						onCLick={props.onCLickLeftB}
					/>
					{props.legend ? <h3>{props.legend}</h3> : null}
					<MenuButtom
						text="lalala ->"
						vert={true}
						onCLick={props.onCLickRightB}
					/>
				</div>
			) : (
				<>{props.legend ? <h3>{props.legend}</h3> : null}</>
			)}
			<style jsx>{`
				.card h1 {
					text-align: center;
					text-transform: uppercase;
					font-size: 2.8rem;
					color: #db3541;
				}

				.card h2 {
					text-align: center;
					text-transform: uppercase;
					font-weight: 900;
					color: #148fb8;
				}

				.cardIcon {
					position: absolute;
					width: 12rem;
					height: 12rem;
					top: -6.5rem;
					filter: drop-shadow(2px 2px 2px black);
				}

				.cardContent {
					position: relative;
					width: 100%;
					height: 100%;
					max-height: 40rem;
					margin: 3rem 0 1rem;
					overflow-y: auto;
					text-shadow: none;
				}

				.cardBtn {
					display: flex;
					justify-content: space-between;
					width: 100%;
				}
			`}</style>

			<style jsx global>{`
				.card {
					position: relative;
					top: 2rem;
					display: flex;
					flex-direction: column;
					place-items: center;
					place-content: space-between;
					background: #fff;
					width: 100%;
					border-radius: 2rem;
					box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
						0.1rem 0.2rem 0.5rem #5e2458;
					padding: 8rem 4rem 3rem;
					text-shadow: none;
				}

				.card::after {
					content: "";
					position: absolute;
					width: 101%;
					height: 102%;
					background: #fff;
					z-index: -1;
					border-radius: 2rem;
					top: 0rem;
					left: 0.5rem;
					transform: rotateZ(1deg);
					box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
						0.1rem 0.2rem 0.5rem #5e2458;
				}

				.cardContent p {
					font-size: 2rem;
					padding-right: 1rem;
				}
			`}</style>
		</div>
	);
}
