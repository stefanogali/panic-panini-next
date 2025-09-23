"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { tracks } from "./Tracks";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer() {
	const [trackIndex, setTrackIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef();
	const progressBarRef = useRef();

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0);
			setCurrentTrack(tracks[0]);
		} else {
			setTrackIndex((prev) => prev + 1);
			setCurrentTrack(tracks[trackIndex + 1]);
		}
	};

	return (
		<div className="relative w-full max-w-140 my-auto bg-fluo-green rounded-xl border-solid border-4 border-white shadow-centered-shadow p-5 pt-28 before:content-[''] before:bg-album-cover before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-[29.6rem] before:h-34 before:max-w-60 before:bg-cover before:blur-md before:opacity-90 lg:w-3/4 lg:before:max-w-75 lg:before:h-45 lg:pt-40 lg:p-11">
			<Image className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-xl max-w-[16rem] lg:max-w-xs" src="/panic-panini-album.jpg" width={475} height={318} alt="Album cover" />
			<Controls audioRef={audioRef} progressBarRef={progressBarRef} setTimeProgress={setTimeProgress} duration={duration} tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} setCurrentTrack={setCurrentTrack} handleNext={handleNext} />
			<DisplayTrack currentTrack={currentTrack} audioRef={audioRef} progressBarRef={progressBarRef} setDuration={setDuration} handleNext={handleNext} trackIndex={trackIndex} />
			<ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration} />
		</div>
	);
}
