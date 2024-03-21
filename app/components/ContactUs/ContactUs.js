"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Container from "@/app/global-components/Container/Container";
// import ContactForm from "@/app/global-components/ContactForm/ContactForm";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.3,
};

export default function ContactUs() {
  const sectionRef = useRef(null);
  const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

  return (
    <section
      id="contacts"
      className={`relative flex flex-col items-center w-full my-16 px-4 mx-auto max-w-[150rem] lg:pb-16 lg:mb-[22.5rem] lg:flex-row reveal${
        isIntersecting ? " visible" : ""
      }`}
      ref={sectionRef}
    >
      <Container customClasses="flex flex-col items-center">
        <div className="flex justify-end flex-col items-center lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
          <div className="flex flex-col max-w-4xl items-center text-center">
            <h2 className="font-bold text-6xl pb-6">Contact us</h2>
            <p>
              For any queries, you can email us at{" "}
              <a
                className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
                href="mailto:codeclash.glbitm@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                codeclash.glbitm@gmail.com
              </a>{" "}
              or fill the form below.
            </p>
          </div>
          {/* <ContactForm /> */}
        </div>
      </Container>
    </section>
  );
}
