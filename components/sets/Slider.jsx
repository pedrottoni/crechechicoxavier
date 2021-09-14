import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "../items/Arrows";

export default function Slider(props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		}
	});

	return (
		<>
			<div className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider">
					{props.images.map((image) => (
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

				.navigation-wrapper .arrow {
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

				.navigation-wrapper .arrow--left {
					left: 5px;
				}

				.navigation-wrapper .arrow--right {
					left: auto;
					right: 5px;
				}

				.navigation-wrapper .arrow--disabled {
					fill: rgba(255, 255, 255, 0.5);
				}
			`}</style>
		</>
	);
}
