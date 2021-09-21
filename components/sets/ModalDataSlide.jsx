import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Modal from "./Modal";
import { Arrows } from "../items/Arrows";
import { useState } from "react";

var data = new Date();
var mes = Number(data.getMonth());

var meses = [
	"janeiro",
	"fevereiro",
	"março",
	"abril",
	"maio",
	"junho",
	"julho",
	"agosto",
	"setembro",
	"outubro",
	"novembro",
	"dezembro",
];

export default function ModalDataSlide(props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 2.5,
		spacing: 10,
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	const [monthNumber, setMonthNumber] = useState(mes);

	return (
		<Modal
			onClick={props.onClick}
			title={props.title}
			subtitle={props.subtitle}
			images={props.images}>
			<>
				<div className="month">
					<Arrows
						left={true}
						right={true}
						onClickLeft={() =>
							monthNumber > 0
								? setMonthNumber(monthNumber - 1)
								: setMonthNumber(11)
						}
						onClickRight={() =>
							monthNumber < 11
								? setMonthNumber(monthNumber + 1)
								: setMonthNumber(0)
						}
					/>
					<h2>{meses[monthNumber]}</h2>
				</div>
				<div ref={sliderRef} className="keen-slider">
					{props.images[meses[monthNumber]].map((images) => (
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
						disabledRight={
							currentSlide >= props.images[meses[monthNumber]].length - 2
						}
					/>
				</div>
			</>
			<style jsx global>{`
				.modal .modalCard .modalContent {
					border-radius: 2rem;
				}

				.modal .modalCard .month {
					position: relative;
					display: flex;
					justify-content: space-evenly;
					margin-bottom: 2rem;
				}

				.modal .modalCard .month .arrow {
					width: 20px;
					height: 20px;
					fill: #db3541;
					cursor: pointer;
					filter: none;
				}
				.modal .modalCard .month .arrow--left {
					left: 40rem;
				}
				.modal .modalCard .month .arrow--right {
					right: 40rem;
				}

				.modal .modalCard .modalContent .keen-slider .arrow {
					width: 6rem;
					height: 100%;
					padding: 0 1rem;
				}

				.modal .modalCard .modalContent .keen-slider .arrow--left {
					left: 0;
					height: 100%;
					background: linear-gradient(90deg, hsl(0deg 0% 0% / 5%), transparent);
				}

				.modal .modalCard .modalContent .keen-slider .arrow--right {
					right: 0;
					height: 100%;
					background: linear-gradient(
						-90deg,
						hsl(0deg 0% 0% / 5%),
						transparent
					);
				}
			`}</style>
		</Modal>
	);
}
