import { useState, useEffect, useRef, useCallback } from "react";
import { HeartOutline, PreviousSong, NextSong, Play, Pause } from "@/app/svg-icons/svg-icons";
export default function Controls({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const playAnimationRef = useRef();

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};

	const repeat = useCallback(() => {
		const currentTime = audioRef.current.currentTime;
		setTimeProgress(currentTime);
		progressBarRef.current.value = currentTime;

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	const handlePrevious = () => {
		if (trackIndex === 0) {
			let lastTrackIndex = tracks.length - 1;
			setTrackIndex(lastTrackIndex);
			setCurrentTrack(tracks[lastTrackIndex]);
		} else {
			setTrackIndex((prev) => prev - 1);
			setCurrentTrack(tracks[trackIndex - 1]);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	return (
		<div className="flex items-center pt-8 pb-4 gap-4">
			<button onClick={togglePlayPause}>{isPlaying ? <Pause extraClasses="fill-red-300 hover:fill-white transition-all" /> : <Play extraClasses="fill-red-300 hover:fill-white transition-all" />}</button>
			<button className="ml-auto">
				<HeartOutline extraClasses="fill-red-300" />
			</button>
			<button onClick={handlePrevious}>
				<PreviousSong extraClasses="fill-red-300 hover:fill-white transition-all" />
			</button>

			<button onClick={handleNext}>
				<NextSong extraClasses="fill-red-300 hover:fill-white transition-all" />
			</button>
		</div>
	);
}
