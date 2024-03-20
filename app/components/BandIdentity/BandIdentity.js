"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/CustomButtons/ButtonPrimary";
import Tagline from "../Tagline/Tagline";

export default function BandIdentity() {
  return (
    <>
      <div className="w-full py-3 z-50 lg:hidden">
        <Container customClasses="px-2.5 flex items-center justify-between font-sm">
          <Image
            className="max-w-[6rem] h-auto "
            src="/logo-portrait.png"
            width={324}
            height={236}
            alt="Panic Panini logo"
          />
          <a
            href="https://github.com/stefanogali/panic-panini-next"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonPrimary customClasses="flex gap-x-1 ">
              <Image src={"/devfolio.svg"} width={20} height={20} />
              Devfolio
            </ButtonPrimary>
          </a>
        </Container>
      </div>
      <div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-black z-10 bg-opacity-30 lg:flex">
        <div className="logo-container border-y-[1.25rem] border-fluo-green py-4 opacity-1">
          <Image
            className="px-12 py-3 max-w-[18.75rem] h-auto"
            src="/logo-portrait.png"
            width={324}
            height={236}
            alt="Panic Panini logo"
          />
        </div>
        <Tagline />
      </div>
    </>
  );
}
