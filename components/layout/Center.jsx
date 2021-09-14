import Links from "../sets/Links";
import menu from "../../data/menu";
import Logo from "../../public/images/Logo";

export default function Center(props) {
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

				.title {
					margin: 0 0 2rem !important;
				}

				main {
					display: flex;
					flex-direction: column;
					place-content: center;
					place-items: center;
					text-align: center;
					gap: 2rem;
					margin-bottom: 10rem;
				}

				main nav {
					flex-wrap: nowrap;
					filter: none;
					width: 110rem;
				}

				main nav a {
					color: #fff;
				}

				main nav a span {
					font-size: 3rem;
					color: #ffc420;
				}

				main nav a .linkIcon {
					width: clamp(16rem, 25vh, 28rem) !important;
					height: clamp(16rem, 25vh, 28rem) !important;
				}

				footer {
					place-self: center;
					padding-bottom: 2rem;
				}
			`}</style>
		</>
	);
}
