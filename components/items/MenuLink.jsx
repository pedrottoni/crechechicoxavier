import Image from "next/image";
import Link from "next/link";

export default function MenuLink(props) {
	return (
		<>
			<Link href={`/${props.link}`}>
				<a>
					{props.image ? (
						<div className="linkIcon">
							<Image src={`/images/${props.link}.svg`} layout="fill" />
						</div>
					) : null}
					<div className="linkText">{props.text}</div>
				</a>
			</Link>
			<style jsx>{`
				a {
					display: flex;
					flex-direction: column;
					place-items: center;
					font-size: 2.5rem};
					font-weight: 900;
					color: #fff;
					text-transform: uppercase;
				}

				a .linkIcon {
					position: relative;
					width: 16rem;
					height: 12rem;
					margin-bottom: 2rem;
				}
			`}</style>
		</>
	);
}
