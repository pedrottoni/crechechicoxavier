import Head from "next/head";
import Columns from "../components/layout/Columns";
import Menu from "../components/sets/Menu";
import Header from "../components/sets/Header";

export default function Acreche() {
	const stateBtn = [
		{ id: 1, link: "acreche", text: "A Creche" },
		{ id: 2, link: "projetos", text: "Projetos" },
		{ id: 3, link: "transparencia", text: "Transparência" },
		{ id: 4, link: "nossosonho", text: "Nosso Sonho" },
		{ id: 5, link: "contato", text: "Contato" }
	];

	return (
		<>
			<Head>
				<title>Creche Chico Xavier</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Columns>
				<Header
					title="A nossa ceche"
					span="Chico Xavier"
					subtitle="A Creche Chico Xavier atende 106 crianças e aproximadamente 100 famílias em período integral.">
					<Menu
						menu={stateBtn}
						image={true}
						vert={true}
						place="start"
						class="stateBtn"
					/>
				</Header>
				<div>LALALA</div>
			</Columns>

			<style jsx>{``}</style>

			<style jsx global>{`
				.background .color {
					filter: brightness(0.4) hue-rotate(64deg) contrast(1.4) saturate(1.4);
				}

				.background .hills {
					filter: brightness(0.5) hue-rotate(50deg) !important;
				}
			`}</style>
		</>
	);
}
