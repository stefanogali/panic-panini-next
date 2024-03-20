"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.3,
};

export default function About() {
  const sectionRef = useRef(null);
  const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

  return (
    <section
      id="about"
      className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56 reveal${
        isIntersecting ? " visible" : ""
      }`}
      ref={sectionRef}
    >
      <Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
        <div className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
          <h2 className="font-bold text-6xl pb-6">About</h2>
          <p className="text-xl">
            CodeClash isn't just a hackathon—it's where over 200+ passionate
            developers collide, igniting sparks of innovation and birthing
            champions of the tech world. With themes spanning AI & web3,
            fintech, healthcare, edtech, and beyond, CodeClash offers a dynamic
            arena for collaboration, competition, and unbounded creativity.
          </p>
          <p className="pt-4 text-xl">
            Join us at CodeClash and immerse yourself in a vibrant community
            driving innovation forward. Whether you're a seasoned pro or a fresh
            face in the tech scene, CodeClash promises an exhilarating journey
            where ideas flourish, bonds form, and victors emerge. Secure your
            spot now and be a part of the electrifying tech renaissance at
            CodeClash!
          </p>
          <div className="flex pt-8 gap-4">
            <a
              href="https://discord.gg/n86fKrPNGG"
              className="invert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/discord.svg"}
                width={52}
                height={52}
                alt="discord"
              />
            </a>
            <a
              href="https://www.instagram.com/codeclash_glbajaj/"
              className="invert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/instagram.svg"}
                width={39}
                height={39}
                alt="instagram"
              />
            </a>
            <a
              href="https://x.com/CodeClashGLB"
              className="invert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/x-twitter.svg"}
                width={42}
                height={42}
                alt="twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/code-clash/"
              className="invert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/linkedin.svg"}
                width={38}
                height={38}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </Container>
      <Image
        className="mt-12 lg:hidden"
        src="/logo_circle.png"
        width={300}
        height={300}
        alt="logo"
      />
      <Image
        className="hidden mr-5  lg:max-w-lg lg:block xl:max-w-xl"
        src="/logo_circle.png"
        width={500}
        height={500}
        alt="logo"
      />
    </section>
  );
}
