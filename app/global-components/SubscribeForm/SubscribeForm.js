"use client";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

export default function SubscribeForm() {
	const formHandler = (event) => {
		event.preventDefault();
		console.log("form submitted!");
	};

	return (
		<form className="w-full max-w-140 lg:w-10/12" onSubmit={formHandler}>
			<div className="text-white">
				<label className="lock text-sm font-medium leading-6" htmlFor="email">
					Your email
				</label>
				<input className="block w-full bg-gray-800 rounded-md border-0 p-2.5 text-white shadow-xs ring-1 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:border-black sm:leading-0 text-xs" type="text" name="name" id="name" />
			</div>
			<div className="flex mt-3 lg:justify-end">
				<ButtonPrimary>Subscribe</ButtonPrimary>
			</div>
		</form>
	);
}
