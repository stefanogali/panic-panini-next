export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-white font-permanentMarker text-xl">New Album</h4>
			<h4 className="text-white font-rockSalt text-xl">Panic in the room</h4>
			<p className="text-fluo-green text-base">Coming out on 15th December</p>
		</div>
	);
}
