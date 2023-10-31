"use client";

import { useRef } from "react";
import { useIsIntersecting } from "@/app/util/useObserver";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ContactForm from "@/app/global-components/ContactForm/ContactForm";

const observerOptions = {
	rootMargin: "0px",
	threshold: 0.3,
};

export default function ContactUs() {
	const sectionRef = useRef(null);
	const isIntersecting = useIsIntersecting(observerOptions, sectionRef);

	return (
		<section id="contacts" className={`relative flex flex-col items-center w-full mt-16 mx-auto max-w-[150rem] lg:mt-56 lg:flex-row reveal${isIntersecting ? " visible" : ""}`} ref={sectionRef}>
			<Image className="hidden lg:block lg:max-w-lg xl:max-w-xl" src="/contacts.jpg" width={750} height={533} alt="Band playing" />
			<Container customClasses="flex flex-col lg:items-end lg:justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div className="flex justify-end flex-col lg:items-end lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
					<div className="flex flex-col max-w-4xl lg:text-right">
						<h2 className="font-bold text-6xl pb-6">Contact us</h2>
						<p>
							And get us a drink in case you around. <br></br>Email us at{" "}
							<a className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600" href="https://www.paninopanini.co.uk/" target="_blank" rel="noreferrer">
								{" "}
								hello@panicpanini.com{" "}
							</a>{" "}
							or fill the form below.
						</p>
					</div>
					<ContactForm />
				</div>
			</Container>
			<Image className="mt-10 lg:hidden" src="/contacts-mobile.jpg" width={1000} height={486} alt="Band playing" />
		</section>
	);
}
