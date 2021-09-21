import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Modal from "./Modal";
import { Arrows } from "../items/Arrows";
import { useState } from "react";

export default function ModalSlide(props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 2.5,
		spacing: 10,
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	return (
		<Modal
			onClick={props.onClick}
			title={props.title}
			subtitle={props.subtitle}
			images={props.images}>
			<div ref={sliderRef} className="keen-slider">
				{props.images.map((images) => (
					<div className="keen-slider__slide">
						<div className="images">
							<Image src={`/images/${images.image}.svg`} layout="fill" />
						</div>
						<p className="images__subtitle">{images.imagesSubtitle}</p>
					</div>
				))}
				<Arrows
					left={true}
					right={true}
					onClickLeft={(e) => e.stopPropagation() || slider.prev()}
					onClickRight={(e) => e.stopPropagation() || slider.next()}
					disabledLeft={currentSlide === 0}
					disabledRight={currentSlide >= props.images.length - 2}
				/>
			</div>
			<style jsx global>{`
				.modal .modalCard .arrow {
					width: 6rem;
					height: 100%;
					background: red;
					padding: 0 1rem;
				}

				.modal .modalCard .arrow--left {
					left: 0;
					height: 100%;
					background: linear-gradient(90deg, hsl(0deg 0% 0% / 5%), transparent);
				}

				.modal .modalCard .arrow--right {
					right: 0;
					height: 100%;
					background: linear-gradient(
						-90deg,
						hsl(0deg 0% 0% / 5%),
						transparent
					);
				}

				.modal .modalCard .modalContent {
					border-radius: 2rem;
				}
			`}</style>
		</Modal>
	);
}
