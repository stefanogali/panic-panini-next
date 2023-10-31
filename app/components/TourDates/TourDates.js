import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";

const tourDates = [
	{
		id: 1,
		date: "19 Oct",
		day: "Friday",
		time: "20.30 - 23.00",
		venue: "The O2, Isla Square",
		city: "London",
	},
	{
		id: 2,
		date: "22 Nov",
		day: "Wednesday",
		time: "20.00 - 22.00",
		venue: "Roundhouse, Chalk Bag Rd",
		city: "London",
	},
	{
		id: 3,
		date: "10 Dec",
		day: "Saturday",
		time: "20.00 - 22.00",
		venue: "200 Camden High St",
		city: "London",
	},
	{
		id: 4,
		date: "03 Jan",
		day: "Friday",
		time: "19.30 - 22.30",
		venue: "The Music Room, 49 Elephant St",
		city: "London",
	},
	{
		id: 5,
		date: "04 Jan",
		day: "Saturday",
		time: "21.30 - 23.30",
		venue: "The Cool Mouse, 49 Little Mouse St",
		city: "New York",
	},
	{
		id: 6,
		date: "12 Feb",
		day: "Monday",
		time: "21.30 - 23.30",
		venue: "The Electric Fox, 389 Fox Road",
		city: "Los Angeles",
	},
	{
		id: 7,
		date: "18 Feb",
		day: "Saturday",
		time: "21.30 - 23.30",
		venue: "The Silver Elephant, 56 Elephant Road",
		city: "Atlanta",
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
	},
];

export default function TourDates() {
	return (
		<ul className="list-none">
			{tourDates.map((gig) => {
				return (
					<li key={gig.id} className="flex items-center flex-col justify-center py-5 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:text-2xl lg:text-2xl xl:text-3xl lg:flex-row lg:justify-between">
						<div className="flex w-full items-center justify-between md:w-[70%] lg:w-6/12 lg:justify-start">
							<div className="flex flex-col justify-center items-center date w-[74px] h-[74px] p-2 bg-fluo-green rounded-md lg:mr-12 lg:w-[85px] lg:h-[85px]">
								<p className="font-bold text-center uppercase">{gig.date}</p>
							</div>
							<div className=" text-white font-semibold lg:ml-[20%]">
								<p>{gig.day}</p>
								<p>{gig.time}</p>
							</div>
						</div>
						<div className="flex w-full mt-2.5 items-center justify-between md:w-[70%] lg:w-6/12 lg:mt-0">
							<div className="text-white font-semibold">
								<p>{gig.venue}</p>
								<p>{gig.city}</p>
							</div>
							<div className="ml-2.5 lg:ml-auto">
								<ButtonPrimary>Get Ticket</ButtonPrimary>
							</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
