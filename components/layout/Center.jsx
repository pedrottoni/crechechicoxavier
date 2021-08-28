import Menu from "../sets/Menu";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";

export default function Center(props) {
	return (
		<>
			<header>
				<Logo />
				<Menu menu={menu} image={false} />
			</header>
			<main>{props.children}</main>
			<footer>SOCIAL</footer>
			<style jsx global>{`
				#__next {
					display: grid;
					grid-template-columns: 1fr 1.6fr 0.4fr;
					grid-template-rows: 0.5fr 1.5fr 1fr;
					grid-template-areas:
						"header header header"
						"main main footer"
						"main main footer";
					height: 100vh;
					text-shadow: 0 0.2rem 0 hsl(195deg 75% 30%),
						0 0.3rem 0.4rem hsl(195deg 75% 30%);
				}

				header {
					grid-area: header;
					display: flex;
					align-items: center;
					margin: 0 0 8rem;
				}

				header nav {
					place-content: end;
				}

				header nav a {
					font-size: 2rem !important;
				}

				header svg {
					position: relative;
					width: 20rem;
					height: 15rem;
				}

				main {
					grid-area: main;
					display: grid;
					grid-template-columns: 1fr 1fr;
				}

				main nav {
					place-content: start;
				}

				footer {
					grid-area: footer;
					margin: 12rem 0 0;
				}
			`}</style>
		</>
	);
}
