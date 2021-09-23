import Card from "./Card";
import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Arrows } from "../items/Arrows";

/*
Props:
	Card
		- className
		- icon
	Header
		- title
		- span
	Content
	 - children
	 - slides
 */

export default function CardSlide(props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 4.5,
		spacing: 10,
		initial: 0,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	return (
		<Card
			className={props.className}
			icon={props.icon}
			title={props.title}
			span={props.span}>
			<div ref={sliderRef} className="keen-slider">
				{props.slides.map((slide) => (
					<div className="keen-slider__slide">
						<div className="images">
							<Image src={`/images/contato.svg`} layout="fill" />
						</div>
						<p className="images__subtitle">{slide.subtitle}</p>
					</div>
				))}
				<Arrows
					left={true}
					right={true}
					onClickLeft={(e) => e.stopPropagation() || slider.prev()}
					onClickRight={(e) => e.stopPropagation() || slider.next()}
					disabledLeft={currentSlide === 0}
					disabledRight={currentSlide >= props.slides.length - 4}
				/>
			</div>
		</Card>
	);
}
/*
{
	equipe ? (
		<Card
			title="Nossa Equipe"
			span="Diretoria Executiva"
			onCLickLeftA={() => {
				setEquipeColaboradores(true);
				setEquipe(false);
			}}
			onCLickRightA={() => {
				setEquipeColaboradores(true);
				setEquipe(false);
			}}
			icon="equipe">
			<Slider images={imagesDiretoria} />
		</Card>
	) : null;
}
{
	equipeColaboradores ? (
		<Card
			title="Nossa Equipe"
			span="Colaboradores"
			onCLickLeftA={() => {
				setEquipeColaboradores(false);
				setEquipe(true);
			}}
			onCLickRightA={() => {
				setEquipeColaboradores(false);
				setEquipe(true);
			}}
			icon="equipe">
			<Slider images={imagesDiretoria} />
		</Card>
	) : null;
}
*/
