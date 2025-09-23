"use client";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function ContactForm() {
	const formHandler = (event) => {
		event.preventDefault();
		console.log("form submitted!");
	};

	return (
		<form className="mt-6 w-full max-w-140 xl:max-w-xl" onSubmit={formHandler}>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">
						Your Name
					</label>
					<input className="block w-full bg-transparent rounded-md border shadow-none p-2.5 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 sm:leading-0 text-xs" type="text" name="name" id="name" />
				</div>
				<div className="flex flex-col">
					<label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">
						Your Email
					</label>
					<input className="block w-full bg-transparent rounded-md border p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-hidden focus:ring-2 sm:leading-0 text-xs" type="text" name="email" id="email" />
				</div>
			</div>
			<div>
				<label className="lock text-sm font-medium leading-6 text-gray-900" htmlFor="message">
					Your message
				</label>
				<textarea className="block w-full bg-transparent rounded-md border p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-hidden focus:ring-2 sm:leading-0 text-xs resize-none" id="message" rows="8"></textarea>
			</div>
			<div className="flex mt-3 lg:justify-end">
				<ButtonPrimary>Send it</ButtonPrimary>
			</div>
		</form>
	);
}
