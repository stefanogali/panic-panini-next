"use client";

import { useRef, useEffect, useState } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Container from "@/app/global-components/Container/Container";
import TourDates from "../TourDates/TourDates";
import { ArrowBottom } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function Shows() {
	const [isScrollMoreVisible, setIsScrollMoreVisible] = useState(true);
	const showsContainerRef = useRef(null);
	const scrollableDivRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, showsContainerRef);

	const clickHandler = () => {
		scrollableDivRef.current.scrollTo({
			top: scrollableDivRef.current.scrollTop + scrollableDivRef.current.offsetHeight,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const scrollableDiv = scrollableDivRef.current;
		const handleScroll = () => {
			if (scrollableDiv.scrollTop + scrollableDiv.offsetHeight + scrollableDivRef.current.childNodes[0].children[0].offsetHeight >= scrollableDiv.scrollHeight) {
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
		<section id="shows" className={`w-full relative mt-16 bg-incoming-shows bg-cover bg-no-repeat bg-center h-[32rem] lg:h-screen lg:min-h-[45rem] lg:max-h-[49rem] lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={showsContainerRef}>
			<Container customClasses="pb-2.5 h-full">
				<div className="flex flex-col items-center text-white pt-11">
					<h2 className="text-4xl font-bold">Incoming Shows &#127928;</h2>
					<h4 className="text-2xl">We playin{`’`} in your town!</h4>
				</div>
				<div className="scoller relative mt-6 h-[calc(100%-14rem)] overflow-hidden overflow-y-auto no-scrollbar" ref={scrollableDivRef}>
					<TourDates />
				</div>

				<div className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition${!isScrollMoreVisible ? " opacity-0" : ""}`} onClick={clickHandler}>
					<p className="text-yellow-btn-primary text-sm underline cursor-pointer">Show more</p>
					<ArrowBottom />
				</div>
			</Container>
			<div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat z-[-1]"></div>
		</section>
	);
}
