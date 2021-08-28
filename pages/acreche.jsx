import { useState } from "react";
import Head from "next/head";
import Columns from "../components/layout/Columns";
import Buttoms from "../components/sets/Buttoms";
import Title from "../components/items/Title";
import Image from "next/image";

export default function Acreche() {
	const [nossaCreche, setNossaCreche] = useState(true);
	const [missao, setMissao] = useState(false);
	const [sobre, setSobre] = useState(false);
	const [equipe, setEquipe] = useState(false);

	const stateBtn = [
		{
			link: "sobre",
			text: "Sobre",
			span: "a Creche",
			onClick: () => {
				setNossaCreche(false);
				setSobre(true);
				setMissao(false);
				setEquipe(false);
				if (sobre) {
					setNossaCreche(true);
					setSobre(false);
				}
			}
		},
		{
			link: "missão",
			text: "Nossa",
			span: "Missão",
			onClick: () => {
				setNossaCreche(false);
				setSobre(false);
				setMissao(true);
				setEquipe(false);
				if (missao) {
					setNossaCreche(true);
					setMissao(false);
				}
			}
		},
		{
			link: "equipe",
			text: "Nossa",
			span: "Equipe",
			onClick: () => {
				setNossaCreche(false);
				setSobre(false);
				setMissao(false);
				setEquipe(true);
				if (equipe) {
					setNossaCreche(true);
					setEquipe(false);
				}
			}
		}
	];

	return (
		<>
			<Head>
				<title>Creche Chico Xavier</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Columns>
				<div className="left">
					<Title
						title="A nossa ceche"
						span="Chico Xavier"
						subtitle="A Creche Chico Xavier atende 106 crianças e aproximadamente 100 famílias em período integral.">
						<Buttoms
							menu={stateBtn}
							image={true}
							vert={true}
							place="start"
							class="stateBtn"
						/>
					</Title>
				</div>
				<div className="right">
					{nossaCreche ? (
						<Image src={`/images/acreche.svg`} layout="fill" />
					) : null}
					<div className="card">
						{sobre ? (
							<Image src={`/images/projetos.svg`} layout="fill" />
						) : null}
						{missao ? (
							<Image src={`/images/transparencia.svg`} layout="fill" />
						) : null}
						{equipe ? <Image src={`/images/equipe.svg`} layout="fill" /> : null}
					</div>
				</div>
			</Columns>

			<style jsx>{``}</style>

			<style jsx global>{`
				.background .color {
					//filter: brightness(0.4) hue-rotate(64deg) contrast(1.4) saturate(1.4);
				}

				.background .hills {
					//filter: brightness(0.5) hue-rotate(50deg) !important;
				}

				.left {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}

				.title {
					max-width: 58rem !important;
				}

				.left nav {
					margin-top: 6rem;
				}

				.left nav.stateBtn {
					gap: 4rem;
					text-shadow: none;
				}

				.right {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
				}

				.right .card {
				}
			`}</style>
		</>
	);
}
