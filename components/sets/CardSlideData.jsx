import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Arrows } from "../items/Arrows";
import Card from "./Card";

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
 */

export default function CardSlideData(props) {
	return (
		<Card
			className={props.className}
			icon={props.icon}
			title={props.title}
			span={props.span}>
			<p>SlidesControl</p>
			<p>Slides</p>
		</Card>
	);
}
