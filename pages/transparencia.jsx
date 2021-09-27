import { useState } from "react";
import Head from "next/head";
import Columns from "../components/layout/Columns";
import Title from "../components/items/Title";
import MenuButton from "../components/items/MenuButton";
import CardSlideData from "../components/sets/CardSlideData";
import CardSlide from "../components/sets/CardSlide";
import { transparencia } from "../data/transparencia-dados";

export default function Transparencia() {
	const [docs, setDocs] = useState(0);

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
						title="Transparência"
						subtitle="A Casa da Criança Creche Chico Xavier tem também como objetivo, atuar de forma transparente e atender a legislação da Transparência Municipal e atender o Termo de Colaboração Nº001. Desta forma, a instituição vem através desta página, disponibilizar publicamente o acesso as suas prestações de contas.">
						<nav>
							{transparencia.map((menuItem) => (
								<MenuButton
									key={menuItem.key}
									link={menuItem.link}
									title={menuItem.title}
									span={menuItem.span}
									image={menuItem.image}
									vert={menuItem.vert}
									onCLick={() => setDocs(menuItem.key)}
								/>
							))}
						</nav>
					</Title>
				</div>
				<div className="right">
					{docs === 1 ? (
						<CardSlide
							key={transparencia[docs].key}
							icon={transparencia[docs].link}
							title={transparencia[docs].title}
							subtitle={transparencia[docs].subtitle}
							slides={transparencia[docs].documentos}
							slidesPerView={3.5}
							className="CardTransp"
						/>
					) : (
						<CardSlideData
							key={transparencia[docs].key}
							title={transparencia[docs].title}
							subtitle={transparencia[docs].subtitle}
							className="CardTransp"
						/>
					)}
				</div>
			</Columns>
			<style jsx>{``}</style>

			<style jsx global>{`
				.left .subTitle,
				.right .subtitle {
					max-width: 70rem;
				}
			`}</style>
		</>
	);
}
