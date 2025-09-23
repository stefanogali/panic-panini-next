import { useRef } from "react";
import { useInView } from "framer-motion";

export default function NewAlbum({ customClasses }) {
	const comingSoonRef = useRef(null);
	const isInView = useInView(comingSoonRef, { once: true });
	return (
		<div
			className={`flex flex-col items-center justify-center p-4${
				customClasses ? ` ${customClasses}` : ""
			}`}
			ref={comingSoonRef}
			style={{
				transform: isInView ? "none" : "translateX(-100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}>
			<h4 className="text-white font-permanent-marker text-xl">New Album</h4>
			<h4 className="text-white font-rock-salt text-xl">Panic in the room</h4>
			<p className="text-fluo-green text-base">Coming out on 15th December</p>
		</div>
	);
}
