import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../../data/image-data";

export default function Slider(props) {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.lenght, page);
	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<AnimatePresence initial={false} custom={direction}>
			<motion.div key={page}>
				<Image
					src={images[imageIndex]}
					layout="fill"
					custom={direction}
					initial={{ oppacity: 0 }}
					animate={{ oppacity: 1 }}
					exit={{ oppacity: 0 }}
					transition={{
						x: { type: "spring", stiffness: 300, smaping: 300 },
						oppacity: { duration: 1 }
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
				/>
			</motion.div>
		</AnimatePresence>
	);
}
