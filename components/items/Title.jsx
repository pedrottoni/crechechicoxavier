export default function Title(props) {
	return (
		<>
			<h1 className="title">
				{props.title}{" "}
				{props.span ? <span className="span">{props.span}</span> : null}
			</h1>
			<h2 className="subTitle">{props.subtitle}</h2>
			{props.children}
			<style jsx>{`
				.title {
					color: #fff;
					text-transform: uppercase;
					margin: 4rem 0 2rem;
					max-width: 65rem;
				}

				.span {
					color: #ffc420;
				}

				.subTitle {
					max-width: 90rem;
					color: #fff;
				}
			`}</style>
		</>
	);
}
