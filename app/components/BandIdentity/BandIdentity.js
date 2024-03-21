import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/CustomButtons/ButtonPrimary";
import React, { useEffect } from "react";
import Tagline from "../Tagline/Tagline";

function IntroTourDatesClient() {
  "use client";
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

export default function BandIdentity() {
  return (
    <>
      <div className="w-full py-3 z-50 lg:hidden">
        <IntroTourDatesClient /> {/* Render the client component */}
        <Container customClasses="px-2.5 flex items-center justify-between font-sm">
          <Image
            className="max-w-[6rem] h-auto "
            src="/logo-portrait.png"
            width={324}
            height={236}
            alt="Panic Panini logo"
          />
          {/* <a
            // href=""
            target="_blank"
            rel="noreferrer"
          >
            <ButtonPrimary customClasses="flex gap-x-1">
              <Image src={"/devfolio.svg"} width={20} height={20} />
              Devfolio
            </ButtonPrimary>
          </a> */}
          {/* Devfolio button */}
          <div
            className="apply-button"
            data-hackathon-slug="codeclash24"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </Container>
      </div>
      <div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex">
        <div className="logo-container border-y-[1.25rem] border-fluo-green py-4 opacity-1">
          <Image
            className="px-12 py-3 max-w-[18.75rem] h-auto"
            src="/logo-portrait.png"
            width={324}
            height={236}
            alt="logo-portrait"
          />
        </div>
        <Tagline />
      </div>
    </>
  );
}
