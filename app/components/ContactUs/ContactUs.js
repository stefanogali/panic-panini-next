"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ContactForm from "@/app/global-components/ContactForm/ContactForm";

export default function ContactUs() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });
	return (
		<section
			id="contacts"
			className={`relative flex flex-col-reverse items-center w-full mt-16 mx-auto max-w-600 lg:mt-56 lg:flex-row`}>
			<Image
				className="mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl"
				src="/contacts.jpg"
				width={750}
				height={533}
				alt="Band playing"
			/>
			<Container customClasses="flex flex-col overflow-hidden lg:items-end lg:justify-end lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div
					className="flex justify-end flex-col lg:items-end lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<div className="flex flex-col max-w-4xl lg:text-right">
						<div className="overflow-hidden">
							<h2
								className={`font-bold text-6xl pb-6 opacity-0 ${
									isInView ? "animate-slide-up" : ""
								}`}>
								Contact us
							</h2>
						</div>
						<p>
							And get us a drink in case you around. <br></br>Email us at{" "}
							<a
								className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
								href="https://www.paninopanini.co.uk/"
								target="_blank"
								rel="noreferrer">
								{" "}
								hello@panicpanini.com{" "}
							</a>{" "}
							or fill the form below.
						</p>
					</div>
					<ContactForm />
				</div>
			</Container>
		</section>
	);
}
