const tourDates = [
  {
    id: 1,
    date: "24 May",
    day: "Friday",
    time: "08:30 - 09:30",
    event: "Registration & Onboarding of participants",
  },
  {
    id: 2,
    date: "24 May",
    day: "Friday",
    time: "09:30 - 10:30",
    event: "Opening Ceremony",
  },
  {
    id: 3,
    date: "24 May",
    day: "Friday",
    time: "10:30 - 11:00",
    event: "Team Formation",
  },
  {
    id: 4,
    date: "24 May",
    day: "Friday",
    time: "11:00",
    event: "Hackathon Starts",
  },
  {
    id: 5,
    date: "24 May",
    day: "Friday",
    time: "14:00 - 15:00",
    event: "Lunch",
  },
  {
    id: 6,
    date: "24 May",
    day: "Friday",
    time: "15:00 - 16:30",
    event: "Mentoring Round 1",
  },
  {
    id: 7,
    date: "24 May",
    day: "Friday",
    time: "16:30-17:00",
    event: "Announcement of Eliminated Teams",
  },
  {
    id: 8,
    date: "24 May",
    day: "Friday",
    time: "17:00-21:00",
    event: "Hacking Continues",
  },
  {
    id: 9,
    date: "24 May",
    day: "Friday",
    time: "21:00 - 22:30",
    event: "Dinner",
  },
  {
    id: 10,
    date: "24 May",
    day: "Friday",
    time: "22:30 - 23:59",
    event: "Shrinik Coding Comp. + Mini games",
  },
  {
    id: 11,
    date: "25 May",
    day: "Saturday",
    time: "00:00 - 01:00",
    event: "Jamming Session",
  },
  {
    id: 12,
    date: "25 May",
    day: "Saturday",
    time: "01:00 - 01:30",
    event: "Coffee Break",
  },
  {
    id: 13,
    date: "25 May",
    day: "Saturday",
    time: "09:00 - 10:00",
    event: "Breakfast",
  },
  {
    id: 14,
    date: "25 May",
    day: "Saturday",
    time: "10:00 - 12:00",
    event: "Mentoring Round 2",
  },
  {
    id: 15,
    date: "25 May",
    day: "Saturday",
    time: "12:00 - 13:00",
    event: "Selection of finalists",
  },
  {
    id: 16,
    date: "25 May",
    day: "Saturday",
    time: "13:00 - 15:00",
    event: "Judging Round",
  },
  {
    id: 17,
    date: "25 May",
    day: "Saturday",
    time: "15:00",
    event: "Selection of winners",
  },
  {
    id: 18,
    date: "25 May",
    day: "Saturday",
    time: "15:00 - 16:30",
    event: "Prize Distribution & Closing Ceremony",
  },
  {
    id: 19,
    date: "25 May",
    day: "Saturday",
    time: "16:30 - 17:00",
    event: "Goodies Distribution & Departure of the participants",
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
