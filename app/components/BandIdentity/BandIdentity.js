"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";
import ScrollTo from "@/app/global-components/ScrollTo/ScrollTo";

export default function BandIdentity() {
	return (
		<>
			<div className="w-full py-3 z-50 lg:hidden">
				<Container customClasses="px-2.5 flex items-center justify-between font-sm">
					{/*<Image
						className="max-w-24 h-auto "
						src="/logo-portrait.png"
						width={324}
						height={236}
						alt="Panic Panini logo"
					/>*/}
					<h4 className="text-white font-warp-drive text-xl">FUTUREPROOF</h4>
					<ScrollTo toId="shows" duration={1500}>
						<ButtonPrimary customClasses="text-sm">Live gigs</ButtonPrimary>
					</ScrollTo>
				</Container>
			</div>
			<div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex">
				<div className="logo-container py-4">
					{/*<Image
						className="px-12 py-3 max-w-75 h-auto"
						src="/logo-portrait.png"
						width={324}
						height={236}
						alt="Panic Panini logo"
					/>*/}
					<h2 className="text-white translate-y-6 text-center px-8 font-warp-drive text-5xl">FUTURE</h2>
					<h2 className="text-white translate-y-6 text-center px-8 font-warp-drive text-5xl">PROOF</h2>
				</div>
				<NewAlbum />
				
			</div>
		</>
	);
}
