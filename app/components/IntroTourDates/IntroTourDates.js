"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "19 Oct",
		dayTime: "Friday 20.30 - 23.00",
		venue: "The O2, Isla Square",
		city: "London",
	},
	{
		id: 2,
		date: "22 Nov",
		dayTime: "Wednesday 20.00 - 22.00",
		venue: "Roundhouse, Chalk Bag Rd",
		city: "Rome",
	},
	{
		id: 3,
		date: "10 Dec",
		dayTime: "Saturday 20.00 - 22.00",
		venue: "200 Camden High St",
		city: "New York",
	},
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);
	return (
		<div className={`flex flex-col justify-center items-center reveal lg:justify-end lg:items-end${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<h2 className="text-white font-permanentMarker text-2xl md:text-3xl lg:text-4xl">⚡ Tour Dates ⚡</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li key={gig.id} className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-fluo-green mr-4 text-2xl rounded-md border-8 border-white md:mr-12 lg:w-[5.5rem] lg:h-[5.5rem]">
								<p className="font-bold text-xl text-[#6f705f] leading-none text-center uppercase lg:text-3xl">{gig.date}</p>
							</div>
							<div className="text-white text-right leading-none md:mr-12">
								<p>{gig.dayTime}</p>
								<p>{gig.venue}</p>
								<div className="flex justify-end md:hidden">
									<MapMapper extraClasses="fill-amber-400 mr-2" />
									<p>{gig.city}</p>
								</div>
							</div>
							<div className="hidden text-right text-white leading-none md:flex">
								<MapMapper extraClasses="fill-amber-400 mr-2" />
								<p>{gig.city}</p>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="hidden lg:block">
				<ScrollTo toId="shows" duration={1500}>
					<ButtonPrimary>Find out more</ButtonPrimary>
				</ScrollTo>
			</div>
		</div>
	);
}
