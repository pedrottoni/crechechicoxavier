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
							<Image
								src={image.src}
								layout="responsive"
								width="10"
								height="10"
							/>
						</div>
					))}
					{/*
					<div className="keen-slider__slide number-slide1">
						<Image src={images[0].src} layout="fill" />
					</div>
					<div className="keen-slider__slide number-slide2">
						<Image src={images[1].src} layout="fill" />
					</div>
					<div className="keen-slider__slide number-slide3">
						<Image src={images[2].src} layout="fill" />
					</div>
					<div className="keen-slider__slide number-slide4">
						<Image src={images[3].src} layout="fill" />
					</div>
					*/}
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
			{slider && (
				<div className="dots">
					{[...Array(slider.details().size).keys()].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									slider.moveToSlideRelative(idx);
								}}
								className={"dot" + (currentSlide === idx ? " active" : "")}
							/>
						);
					})}
				</div>
			)}
			<style jsx global>{`
				.keen-slider__slide {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 50px;
					color: #fff;
					font-weight: 500;
					height: 32rem;
				}

				.navigation-wrapper {
					position: relative;
				}

				.dots {
					display: flex;
					padding: 10px 0;
					justify-content: center;
				}

				.dot {
					border: none;
					width: 10px;
					height: 10px;
					background: #c5c5c5;
					border-radius: 50%;
					margin: 0 5px;
					padding: 5px;
					cursor: pointer;
				}

				.dot:focus {
					outline: none;
				}

				.dot.active {
					background: #000;
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
