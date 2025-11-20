"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper, Github } from "@/app/svg-icons/svg-icons";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

const tourDates = [
	{
		id: 1,
		date: "30th Nov",
		dayTime: "Born 2 Break",
		venue: "Doors: 5:00 pm",
		city: "Inner West Pride Centre",
	},
	/*{
		id: 2,
		date: "TBA",
		dayTime: "TBA",
		venue: "TBA",
		city: "TBA",
	},
	{
		id: 3,
		date: "TBA",
		dayTime: "TBA",
		venue: "TBA",
		city: "TBA",
	},*/
];

export default function IntroTourDates() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		<div
			className={`flex flex-col justify-center items-center lg:justify-end lg:items-end`}
			style={{
				transform: isInView ? "none" : "translateY(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
			ref={sectionRef}>
			<h2 className="text-white font-permanent-marker text-2xl md:text-3xl lg:text-4xl">
				Upcoming Shows!
			</h2>
			<ul className="list-none">
				{tourDates.map((gig) => {
					return (
						<li
							key={gig.id}
							className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl">
							<div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-fluo-green mr-4 text-2xl rounded-md border-white md:mr-12 lg:w-22 lg:h-22">
								<p className="font-bold text-xl text-white leading-none text-center uppercase lg:text-3xl">
									{gig.date}
								</p>
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
			<div className="gap-x-3 lg:flex">
				{/*<a href="https://github.com/stefanogali/panic-panini-next" target="_blank" rel="noreferrer">
					<ButtonPrimary customClasses="flex items-center gap-x-1 text-sm my-3 lg:text-base lg:mb-0">
						<Github extraClasses="w-3 h-auto fill-white lg:w-5" />
						Github Repo
					</ButtonPrimary>
				</a>*/}
				<div className="hidden lg:block">
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary>Find out more</ButtonPrimary>
					</ScrollTo>
				</div>
			</div>
		</div>
	);
}
