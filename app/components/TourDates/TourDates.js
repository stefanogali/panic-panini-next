const tourDates = [
  {
    id: 1,
    date: "19 Oct",
    day: "Friday",
    time: "20.30 - 23.00",
    event: "The O2, Isla Square",
  },
  {
    id: 2,
    date: "22 Nov",
    day: "Wednesday",
    time: "20.00 - 22.00",
    event: "Roundhouse, Chalk Bag Rd",
  },
  {
    id: 3,
    date: "10 Dec",
    day: "Saturday",
    time: "20.00 - 22.00",
    event: "200 Camden High St",
  },
  {
    id: 4,
    date: "03 Jan",
    day: "Friday",
    time: "19.30 - 22.30",
    event: "The Music Room, 49 Elephant St",
  },
  {
    id: 5,
    date: "04 Jan",
    day: "Saturday",
    time: "21.30 - 23.30",
    event: "The Cool Mouse, 49 Little Mouse St",
  },
  {
    id: 6,
    date: "12 Feb",
    day: "Monday",
    time: "21.30 - 23.30",
    event: "The Electric Fox, 389 Fox Road",
  },
  {
    id: 7,
    date: "18 Feb",
    day: "Saturday",
    time: "21.30 - 23.30",
    event: "The Silver Elephant, 56 Elephant Road",
  },
  {
    id: 8,
    date: "01 Mar",
    day: "Thursday",
    time: "21.30 - 23.30",
    event: "The Super Cat, 189 Meaow street",
  },
  {
    id: 9,
    date: "12 Mar",
    day: "Sunday",
    time: "21.30 - 23.30",
    event: "The Super Cat, 189 Meaow street",
  },
  {
    id: 10,
    date: "18 Mar",
    day: "Saturday",
    time: "21.30 - 23.30",
    event: "The Golden Eagle, 56 Golden road",
  },
  {
    id: 11,
    date: "20 May",
    day: "Friday",
    time: "20.00 - 22.30",
    event: "The Silver Elephant, 56 Elephant Road",
  },
  {
    id: 12,
    date: "22 May",
    day: "Sunday",
    time: "21.30 - 23.30",
    event: "The Silver Elephant, 56 Elephant Road",
  },
  {
    id: 13,
    date: "21 Jul",
    day: "Saturday",
    time: "21.30 - 23.30",
    event: "The Electric Fox, 389 Fox Road",
  },
];

export default function TourDates() {
  return (
    <ul className="list-none">
      {tourDates.map((gig) => {
        return (
          <li
            key={gig.id}
            className="flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row"
          >
            <div className="flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl">
              <div className="flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-fluo-green rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]">
                <p className="font-bold text-center uppercase">{gig.date}</p>
              </div>
              <div className=" text-white font-semibold leading-tight lg:ml-[20%]">
                <p>{gig.day}</p>
                <p>{gig.time}</p>
              </div>
            </div>
            <div className="flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl">
              <div className="text-white font-semibold leading-tight">
                <p>{gig.event}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
