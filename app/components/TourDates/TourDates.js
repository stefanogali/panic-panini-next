import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";

const tourDates = [
	{
		id: 1,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	/*{
		id: 2,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 3,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 4,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 5,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 6,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 7,
		date: "30th Nov",
		eventName: "Born 2 Break",
		time: "17:00 - 23:00",
		venue: "Inner West Pride Centre",
		city: "Newtown",
	},
	{
		id: 8,
		date: "01 Mar",
		day: "Thursday",
		time: "21.30 - 23.30",
		venue: "The Super Cat, 189 Meaow street",
		city: "Rome",
	},
	{
		id: 9,
		date: "12 Mar",
		day: "Sunday",
		time: "21.30 - 23.30",
		venue: "The Super Cat, 189 Meaow street",
		city: "Rome",
	},
	{
		id: 10,
		date: "18 Mar",
		day: "Saturday",
		time: "21.30 - 23.30",
		venue: "The Golden Eagle, 56 Golden road",
		city: "Berlin",
	},
	{
		id: 11,
		date: "20 May",
		day: "Friday",
		time: "20.00 - 22.30",
		venue: "The Silver Elephant, 56 Elephant Road",
		city: "Atlanta",
	},
	{
		id: 12,
		date: "22 May",
		day: "Sunday",
		time: "21.30 - 23.30",
		venue: "The Silver Elephant, 56 Elephant Road",
		city: "Atlanta",
	},
	{
		id: 13,
		date: "21 Jul",
		day: "Saturday",
		time: "21.30 - 23.30",
		venue: "The Electric Fox, 389 Fox Road",
		city: "Los Angeles",
	},*/
];

export default function TourDates() {
	return (
		<ul className="list-none">
			{tourDates.map((gig) => {
				return (
					<li key={gig.id} className="flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row">
						<div className="flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl">
							<div className="flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-fluo-green rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]">
								<p className="font-bold text-center uppercase">{gig.date}</p>
							</div>
							<div className=" text-white font-semibold leading-tight lg:ml-[20%]">
								<p>{gig.eventName}</p>
								<p>{gig.time}</p>
							</div>
						</div>
						<div className="flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl">
							<div className="text-white font-semibold leading-tight">
								<p>{gig.venue}</p>
								<p>{gig.city}</p>
							</div>
							{/*<div className="ml-2.5 lg:ml-auto">
								<ButtonPrimary customClasses="text-xs md:text-sm lg:text-base">Get Ticket</ButtonPrimary>
							</div>*/}
						</div>
					</li>
				);
			})}
		</ul>
	);
}
