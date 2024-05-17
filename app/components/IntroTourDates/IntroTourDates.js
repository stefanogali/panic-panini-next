import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import ButtonPrimary from "@/app/global-components/CustomButtons/ButtonPrimary";
import { MapMapper } from "@/app/svg-icons/svg-icons";
import Image from "next/image";
import { useEffect } from "react";

function IntroTourDatesClient() {
  "use client"
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.3,
};

const tourDates = [
  {
    id: 1,
    date: "06 Apr",
    dayTime: "Wednesday 00:00",
    event: "Registration Start",
    city: "Devfolio",
  },
  {
    id: 2,
    date: "28 May",
    dayTime: "Saturday 23:59",
    event: "Registration End",
    city: "Devfolio",
  },
  {
    id: 3,
    date: "3 June",
    dayTime: "Friday 09:30",
    event: "Hackathon Start",
    city: "GLBITM",
  },
  {
    id: 4,
    date: "4 June",
    dayTime: "Saturday 17:00",
    event: "Hackathon End",
    city: "GLBITM",
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

  return (
    <div
      className={`flex flex-col justify-center items-center reveal lg:justify-end lg:items-end${
        isIntersecting ? " visible" : ""
      }`}
      ref={sectionRef}
    >
      <IntroTourDatesClient /> {/* Render the client component */}
      <ul className="list-none">
        {tourDates.map((gig) => {
          return (
            <li
              key={gig.id}
              className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl"
            >
              <div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-fluo-green mr-4 text-2xl rounded-md border-8 border-white md:mr-12 lg:w-[6.0rem] lg:h-[6.0rem]">
                <p className="font-bold text-xl text-[#6f705f] leading-none text-center uppercase lg:text-3xl">
                  {gig.date}
                </p>
              </div>
              <div className="text-white text-right leading-none md:mr-12">
                <p>{gig.event}</p>
                <p className="italic text-lg">{gig.dayTime}</p>
                <div className="flex justify-end md:hidden">
                  <MapMapper extraClasses="fill-amber-400 mr-2" />
                  <p>{gig.city}</p>
                </div>
              </div>
              <div className="hidden text-right text-white leading-none md:flex">
                <MapMapper extraClasses="fill-amber-400 mr-2" />
                <p>{gig.city}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="hidden gap-x-3 lg:flex">
        {/* <a
          // href=""
          target="_blank"
          rel="noreferrer"
        >
          <ButtonPrimary customClasses="flex gap-x-1 ">
            <Image src={"/devfolio.svg"} width={20} height={20} />
            Register On Devfolio
          </ButtonPrimary>
        </a> */}
        {/* devfolio button */}
        <div
          className="apply-button"
          data-hackathon-slug="codeclash24"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
    </div>
  );
}
