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
					height: 100vh;
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
					grid-template-columns: 1fr 0.8fr;
				}

				main nav {
					place-content: start;
				}

				footer {
					place-self: center;
					margin: 12rem 0 0;
				}
			`}</style>
		</>
	);
}
