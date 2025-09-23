"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

export default function Listen() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section id="listen" className={`w-full mt-16 lg:mt-56`}>
			<Container customClasses="flex flex-col lg:flex-row">
				<div
					className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<p>Listen to the new album:</p>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
							Panic in the room
						</h2>
					</div>
					<p>
						Dovrebbero seguire le mie voglie, la sera appena alzato, o tardi la mattina dopo la
						colazione, prima d&#8217;addormentarmi.
					</p>
					<div className="flex items-center pt-4 gap-4">
						<Spotify />
						<SoundCloud />
						<Youtube />
						<AppleMusic />
					</div>
				</div>
				<div className="flex items-center justify-center pt-5 basis-2/4 mt-20 lg:mt-0 lg:justify-end lg:pt-[60px]">
					<AudioPlayer />
				</div>
			</Container>
		</section>
	);
}
