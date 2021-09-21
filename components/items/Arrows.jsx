export function Arrows(props) {
	const disabledLeft = props.disabledLeft ? " arrow--disabled" : "";
	const disabledRight = props.disabledRight ? " arrow--disabled" : "";
	return (
		<>
			{props.left && (
				<svg
					onClick={props.onClickLeft}
					className={"arrow arrow--left" + disabledLeft}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				</svg>
			)}
			{props.right && (
				<svg
					onClick={props.onClickRight}
					className={"arrow arrow--right" + disabledRight}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				</svg>
			)}
			<style jsx>
				{`
					.arrow {
						width: 4rem;
						height: 100%;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						-webkit-transform: translateY(-50%);
						fill: #fff;
						cursor: pointer;
						filter: drop-shadow(2px 4px 6px black);
					}

					.arrow--left {
						left: 5px;
					}

					.arrow--right {
						left: auto;
						right: 5px;
					}

					.arrow--disabled {
						display: none;
					}
				`}
			</style>
		</>
	);
}
