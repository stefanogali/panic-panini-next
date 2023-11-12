"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroTourDates from "../IntroTourDates/IntroTourDates";
import NewAlbum from "../NewAlbum/NewAlbum";
import BackToTop from "../BackToTop/BackToTop";
import { useIsIntersecting } from "@/app/util/useObserver";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0,
};

export default function Intro() {
	const [scrolledDown, setScrolledDown] = useState(false);
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef, true);

	useEffect(() => {
		const { scrollY } = window;
		if (scrollY > 50 && !isIntersecting) {
			setScrolledDown(true);
		}
	}, [isIntersecting]);

	return (
		<section id="intro" className={`relative flex flex-col items-center h-[calc(100vh-3rem)] w-full overflow-hidden max-h-[93rem] min-h-[40rem] lg:h-screen lg:flex-row lg:justify-start`} ref={sectionRef}>
			<BandIdentity />
			<div className="absolute w-full h-full top-0 left-0">
				<div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-10"></div>
				<div className="absolute w-full h-full top-0 left-0 bg-hero-pattern bg-repeat"></div>
				<video autoPlay muted loop poster="/frame-band.jpg" className="object-cover w-full h-full z-10" playsInline>
					<source src="./video-band.webm" type="video/webm" />
					<source src="./video-band.mp4" type="video/mp4" />
					<p>
						Your browser doesn&#8217;t support HTML video. Here is a<a href="./video-band.mp4">link to the video</a> instead.
					</p>
				</video>
			</div>
			<Container customClasses="flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:justify-end lg:items-end">
				<IntroTourDates />
			</Container>
			<NewAlbum customClasses="mt-auto z-50 lg:hidden" />
			<BackToTop customClasses={`reveal${!isIntersecting && scrolledDown ? " visible" : ""}`} />
		</section>
	);
}
