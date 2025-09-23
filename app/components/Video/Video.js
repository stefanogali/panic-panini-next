import Container from "@/app/global-components/Container/Container";
import { DailyMotion, Youtube } from "@/app/svg-icons/svg-icons";

export default function Video() {
	return (
		<section id="video" className="w-full mt-16 lg:mt-56">
			<Container customClasses="flex flex-col lg:flex-row">
				<div className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl">
					<p>Watch our latest Music video</p>
					<div className="overflow-hidden">
						<h2 className={`font-bold text-6xl pb-6 opacity-100`}>Choose Life!</h2>
					</div>
					<p>
						Choose Life. Choose a job. Choose a career. Choose a family. Choose a fucking big
						television, choose washing machines, cars, compact disc players and electrical tin
						openers. Choose your future. Choose life…
					</p>
					<div className="flex items-center pt-4 gap-4">
						<Youtube />
						<DailyMotion />
					</div>
				</div>
				<div className="flex justify-end items-center mt-5 basis-2/4 lg:max-w-lg lg:mt-0 xl:max-w-2xl 2xl:max-w-4xl">
					<iframe
						className="w-full lg:w-[80%]"
						height="400"
						src="https://www.youtube.com/embed/SaP7qmsQbSI?si=hQVSwEAsEeGa0slg"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"></iframe>
				</div>
			</Container>
		</section>
	);
}
