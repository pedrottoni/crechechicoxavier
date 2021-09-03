import { useState } from "react";
import Image from "next/image";
import { images } from "../../data/image-data";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Slider(props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		}
	});

	function ArrowLeft(props) {
		const disabeld = props.disabled ? " arrow--disabled" : "";
		return (
			<svg
				onClick={props.onClick}
				className={"arrow arrow--left" + disabeld}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			</svg>
		);
	}

	function ArrowRight(props) {
		const disabeld = props.disabled ? " arrow--disabled" : "";
		return (
			<svg
				onClick={props.onClick}
				className={"arrow arrow--right" + disabeld}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			</svg>
		);
	}

	return (
		<>
			<div className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider">
					{images.map((image) => (
						<div key={image.id} className="keen-slider__slide">
							<div className="sliderImage">
								<Image
									src={image.src}
									alt={image.legend}
									layout="fill"
									objectFit="cover"
								/>
							</div>
							{image.legend ? (
								<>
									<div className="sliderLegend">
										<h3>{image.legend}</h3>
										{image.spam ? <h4>{image.spam}</h4> : null}
									</div>
								</>
							) : null}
						</div>
					))}
				</div>
				{slider && (
					<>
						<ArrowLeft
							onClick={(e) => e.stopPropagation() || slider.prev()}
							disabled={currentSlide === 0}
						/>
						<ArrowRight
							onClick={(e) => e.stopPropagation() || slider.next()}
							disabled={currentSlide === slider.details().size - 1}
						/>
					</>
				)}
			</div>
			<style jsx global>{`
				.navigation-wrapper {
					position: relative;
				}

				.keen-slider__slide {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					height: 40rem;
					border-radius: 2rem;
				}

				.sliderLegend {
					position: absolute;
					bottom: 0px;
					z-index: 10;
					width: 100%;
					background: linear-gradient(0deg, hsl(0deg 0% 0% / 70%), transparent);
					backdrop-filter: blur(1px);
					padding: 8rem 0 2rem;
					text-align: center;
					text-shadow: 0.2rem 0.2rem 0.2rem black;
				}

				.sliderLegend h3 {
					color: #fff;
				}

				.sliderLegend h4 {
					color: #ffc420;
				}

				.arrow {
					width: 30px;
					height: 30px;
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
					fill: rgba(255, 255, 255, 0.5);
				}
			`}</style>
		</>
	);
}
