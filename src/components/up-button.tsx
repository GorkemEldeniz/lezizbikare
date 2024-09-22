// TODO: Implement the up button
"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function UpButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button
					onClick={scrollToTop}
					className='fixed bottom-5 right-5 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300'
					aria-label='Scroll to top'
				>
					<ArrowUp size={24} />
				</button>
			)}
		</>
	);
}
