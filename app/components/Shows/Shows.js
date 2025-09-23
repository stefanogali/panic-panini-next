"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import TourDates from "../TourDates/TourDates";
import { ArrowBottom } from "@/app/svg-icons/svg-icons";

export default function Shows() {
	const [isScrollMoreVisible, setIsScrollMoreVisible] = useState(true);
	const showsContainerRef = useRef(null);
	const scrollableDivRef = useRef(null);
	const isInView = useInView(showsContainerRef, { once: true });

	const clickHandler = () => {
		scrollableDivRef.current.scrollTo({
			top: scrollableDivRef.current.scrollTop + scrollableDivRef.current.offsetHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const scrollableDiv = scrollableDivRef.current;
		const handleScroll = () => {
			if (
				scrollableDiv.scrollTop +
					scrollableDiv.offsetHeight +
					scrollableDivRef.current.childNodes[0].children[0].offsetHeight >=
				scrollableDiv.scrollHeight
			) {
				setIsScrollMoreVisible(false);
			} else {
				setIsScrollMoreVisible(true);
			}
		};

		scrollableDiv.addEventListener("scroll", handleScroll);

		return () => {
			scrollableDiv.removeEventListener("scroll", handleScroll);
		};
	}, [scrollableDivRef]);

	return (
		<section
			id="shows"
			className={`w-full relative mt-16 bg-incoming-shows bg-cover bg-no-repeat bg-center h-128 lg:h-screen lg:min-h-180 lg:max-h-196 lg:mt-56`}
			style={{
				transform: isInView ? "none" : "translateY(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={showsContainerRef}>
			<Container customClasses="pb-2.5 h-full">
				<div className="flex flex-col items-center text-white pt-11">
					<div className="overflow-hidden">
						<h2
							className={`text-2xl opacity-0 font-bold lg:text-4xl lg:leading-12 ${
								isInView ? "animate-slide-up" : ""
							}`}>
							Incoming Shows &#127928;
						</h2>
					</div>
					<h4 className="text-base lg:text-2xl">We playin{`’`} in your town!</h4>
				</div>
				<div
					className="scoller relative mt-6 h-[calc(100%-14rem)] overflow-hidden overflow-y-auto no-scrollbar"
					ref={scrollableDivRef}>
					<TourDates />
				</div>

				<div
					className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition${
						!isScrollMoreVisible ? " opacity-0" : ""
					}`}
					onClick={clickHandler}>
					<p className="text-yellow-btn-primary text-sm underline cursor-pointer">Show more</p>
					<ArrowBottom />
				</div>
			</Container>
			<div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat z-[-1]"></div>
		</section>
	);
}
