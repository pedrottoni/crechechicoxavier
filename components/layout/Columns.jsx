import Links from "../sets/Links";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";

export default function Columns(props) {
	return (
		<>
			<header>
				<Logo />
				<Links menu={menu} image={false} />
			</header>
			<main>{props.children}</main>
			<footer>SOCIAL</footer>
			<style jsx global>{`
				#__next {
					display: flex;
					flex-direction: column;
					place-content: space-between;
					max-width: 170rem;
					height: 100vh;
					margin: 0 auto;
					padding: 4rem;
					text-shadow: 0 0.2rem 0 hsl(195deg 75% 30%),
						0 0.3rem 0.4rem hsl(195deg 75% 30%);
				}

				header {
					display: flex;
					align-items: center;
				}

				header nav {
					place-content: flex-end;
				}

				header nav a {
					font-size: 2rem !important;
				}

				header svg {
					position: relative;
					width: 25rem;
					height: 15rem;
				}

				main {
					display: grid;
					grid-template-columns: 1fr 0.7fr;
					gap: 3em;
					margin-bottom: 4rem;
				}

				main nav {
					place-content: start;
				}

				.left {
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 1rem;
				}

				.title {
					max-width: 58rem !important;
				}

				.left nav {
					margin-top: 6rem;
				}

				.left nav.stateBtn {
					gap: 3.8rem;
					text-shadow: none;
				}

				.right {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					gap: 2rem;
				}

				footer {
					place-self: center;
					padding-bottom: 2rem;
				}
			`}</style>
		</>
	);
}
