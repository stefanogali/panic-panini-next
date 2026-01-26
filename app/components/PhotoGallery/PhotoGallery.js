"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { MapMapper, Calendar } from "@/app/svg-icons/svg-icons";

const galleryThumbnails = [
	{
		id: 1,
		src: "/gallery/thumbnails/thumb-1.jpg",
		club: "The Golden Eagle",
		city: "Miami",
		date: "12/2/2021",
		slides: [
			{ src: "/gallery/slider-images/slider-1.jpg" },
			{ src: "/gallery/slider-images/slider-2.jpg" },
			{ src: "/gallery/slider-images/slider-3.jpg" },
		],
	},
	{
		id: 2,
		src: "/gallery/thumbnails/thumb-2.jpg",
		club: "The Silver Elephant",
		city: "Atlanta",
		date: "23/6/2019",
		slides: [
			{ src: "/gallery/slider-images/slider-4.jpg" },
			{ src: "/gallery/slider-images/slider-5.jpg" },
			{ src: "/gallery/slider-images/slider-6.jpg" },
		],
	},
	{
		id: 3,
		src: "/gallery/thumbnails/thumb-3.jpg",
		club: "The Electric Fox",
		city: "Los Angeles",
		date: "11/3/2019",
		slides: [
			{ src: "/gallery/slider-images/slider-7.jpg" },
			{ src: "/gallery/slider-images/slider-8.jpg" },
			{ src: "/gallery/slider-images/slider-9.jpg" },
		],
	},
	{
		id: 4,
		src: "/gallery/thumbnails/thumb-4.jpg",
		club: "The Cool Mouse",
		city: "New York",
		date: "03/12/2018",
		slides: [
			{ src: "/gallery/slider-images/slider-10.jpg" },
			{ src: "/gallery/slider-images/slider-11.jpg" },
			{ src: "/gallery/slider-images/slider-12.jpg" },
		],
	},
	{
		id: 5,
		src: "/gallery/thumbnails/thumb-5.jpg",
		club: "The Super Cat",
		city: "Rome",
		date: "03/03/2018",
		slides: [
			{ src: "/gallery/slider-images/slider-13.jpg" },
			{ src: "/gallery/slider-images/slider-14.jpg" },
			{ src: "/gallery/slider-images/slider-15.jpg" },
		],
	},
	{
		id: 6,
		src: "/gallery/thumbnails/thumb-6.jpg",
		club: "The Brave Salmon",
		city: "Berlin",
		date: "25/12/2017",
		slides: [
			{ src: "/gallery/slider-images/slider-16.jpg" },
			{ src: "/gallery/slider-images/slider-17.jpg" },
			{ src: "/gallery/slider-images/slider-18.jpg" },
		],
	},
];

export default function PhotoGallery() {
	const [openGallery, setOpenGallery] = useState(false);
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(0);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	const wrapperRef = useRef(null);
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ["start end", "end center"],
	});

	const totalCardsWidth = cardWidth * galleryThumbnails.length;

	const x = useTransform(
		scrollYProgress,
		[0, 0.17, 1],
		[-cardWidth / 2, -cardWidth / 2, totalCardsWidth * -1 - cardWidth / 2],
	);

	const clickHandler = (index) => {
		setOpenGallery(true);
		setGalleryIndex(index);
	};

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		const ro = new ResizeObserver(([entry]) => {
			setCardWidth(entry.contentRect.width);
		});

		ro.observe(containerRef.current);

		return () => ro.disconnect();
	}, []);

	return (
		<>
			<section
				id="photo-gallery"
				className={`w-full mt-16 lg:mt-56 pb-14 lg:pb-56 lg:mb-90`}
				style={{
					transform: isInView ? "none" : "translateY(100px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				ref={sectionRef}>
				<Container>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
							Gallery
						</h2>
					</div>
					<p>A few places where you may have seen us.</p>
				</Container>
				<motion.div className="h-[600vh] w-full" ref={wrapperRef}>
					<div className="sticky h-max top-0 w-full bg-white z-10 overflow-hidden">
						<motion.div
							style={{ x }}
							className="w-max top-0 flex items-center justify-items-start gap-4 pl-[50vw] pr-[50vw]">
							{galleryThumbnails.map((item, index) => {
								return (
									<div className="w-screen h-screen" key={item.id} ref={containerRef}>
										<Container customClasses="w-full h-full grid md:grid-cols-2 items-center sm:justify-items-center gap-5 leading-none rounded-lg transition-all">
											<div className="justify-self-start md:justify-self-end flex flex-col gap-2.5">
												<h3 className="text-4xl md:text-5xl xl:text-6xl font-medium text-right">
													{item.club}
												</h3>
												<div className="flex items-center justify-start md:justify-end lg:justify-start gap-5">
													<span className="flex">
														<MapMapper />
														<h5 className="ml-2 text-sm md:text-lg">{item.city}</h5>
													</span>
													<span className="flex">
														<Calendar />
														<h5 className="ml-2 text-sm md:text-lg">{item.date}</h5>
													</span>
												</div>
											</div>
											<Image
												className="justify-self-start rounded-lg cursor-pointer hover:opacity-60 transition-all w-full lg:w-[90%] xl:w-[80%]"
												src={item.src}
												width={600}
												height={600}
												alt="Gallery gig thumbnail"
												onClick={() => clickHandler(index)}
											/>
										</Container>
									</div>
								);
							})}
						</motion.div>
					</div>
				</motion.div>
			</section>

			<Lightbox
				open={openGallery}
				close={() => setOpenGallery(false)}
				slides={galleryThumbnails[galleryIndex].slides}
			/>
		</>
	);
}
