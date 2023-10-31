"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function Listen() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="listen" className={`w-full mt-16 lg:mt-56 reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Container customClasses="flex flex-col lg:flex-row">
				<div className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl">
					<p>Listen to the new album:</p>
					<h2 className="font-bold text-6xl pb-6">Panic in the room</h2>
					<p>Dovrebbero seguire le mie voglie, la sera appena alzato, o tardi la mattina dopo la colazione, prima d&#8217;addormentarmi.</p>
					<div className="flex items-center pt-4 gap-4">
						<Spotify />
						<SoundCloud />
						<Youtube />
						<AppleMusic />
					</div>
				</div>
				<div className="flex items-center justify-center basis-2/4 mt-20 lg:mt-0 lg:justify-end">
					<AudioPlayer />
				</div>
			</Container>
		</section>
	);
}
