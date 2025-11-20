"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";

export default function Video() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section id="video" className="w-full mt-16 lg:mt-56">
			<Container customClasses="flex flex-col lg:flex-row">
				<div
					className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<p>Listen to one of artists albums!</p>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
							Do You Hear Me
						</h2>
					</div>
					<div className="flex items-center pt-4 gap-4">
						<a href="https://open.spotify.com/album/6eEPULW6Ew0fOUdxFzpoQH"><Spotify /></a>
						<a href="https://www.youtube.com/playlist?list=OLAK5uy_mRsA0L7FcdQhDkzcdqsQjZCETHlTJLqMg"><Youtube /></a>
						<a href="https://music.apple.com/au/album/do-you-hear-me-ep/1700983625"><AppleMusic /></a>
					</div>
				</div>
				<div className="flex justify-end items-center mt-5 basis-2/4 lg:max-w-lg lg:mt-0 xl:max-w-2xl 2xl:max-w-4xl">
					<iframe src="https://open.spotify.com/embed/album/6eEPULW6Ew0fOUdxFzpoQH?utm_source=generator"
							width="80%" height="450" frameBorder="0" allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"></iframe>
				</div>
			</Container>
		</section>
	);
}
