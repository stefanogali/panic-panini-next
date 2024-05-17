"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.2,
};

const centering = {
  textAlign: 'center'
};

export default function Judges() {
  const sectionRef = useRef(null);
  const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

  return (
    <section
      id="photo-gallery"
      className={`items-center w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:my-24 reveal${
        isIntersecting ? " visible" : ""
      }`}
      ref={sectionRef}
    >
      <Container>
        <h2 className="font-bold text-6xl pb-6" style={centering}>Judges</h2>
      </Container>

      <Container>
        <p>Coming Soon...</p>
      </Container>

      {/* <Container customClasses={"pl-10"}>
        <p className="italic text-gray-700 pb-3">Silver</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
          {silverSponsors.map((item, index) => {
            return (
              <div className="flex flex-col mb-5 leading-none" key={item.id}>
                <a
                  href={item.link}
                  className="w-full h-full rounded-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-lg cursor-pointer hover:opacity-60 transition-all"
                    src={item.src}
                    width={400}
                    height={400}
                    alt={`${item.name}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <p className="italic text-amber-800 pb-3">Bronze</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
          {bronzeSponsors.map((item, index) => {
            return (
              <div className="flex flex-col mb-5 leading-none" key={item.id}>
                <a
                  href={item.link}
                  className="w-full h-full rounded-lg transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-lg cursor-pointer hover:opacity-60 transition-all"
                    src={item.src}
                    width={400}
                    height={400}
                    alt={`${item.name}`}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </Container> */}
    </section>
  );
}
