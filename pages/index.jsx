import Head from "next/head";
import Centralized from "../components/layout/Centralized";
import Header from "../components/sets/Header";
import Menu from "../components/sets/Menu";
import menu from "../data/menu";
import Logo from "../public/images/Logo";

export default function Home() {
	return (
		<>
			<Head>
				<title>Creche Chico Xavier</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Centralized>
				<div className="logo">
					<Logo />
				</div>
				<Header
					title="Multiplicamos o amor"
					span="Através da educação"
					subtitle="Há quatro décadas acolhemos crianças e suas famílias, colaborando para a construção de vidas mais felizes."
				/>
				<Menu menu={menu} image={true} />
			</Centralized>
			<style jsx global>{``}</style>
		</>
	);
}
