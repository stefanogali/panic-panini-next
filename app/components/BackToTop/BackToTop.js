export default function BackToTop({ customClasses }) {
	const clickHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div
			className={`fixed bottom-2 border-solid border-2 border-white rounded right-2 bg-fluo-green p-3.5 z-99 opacity-90 cursor-pointer before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:top-[35%] before:left-[50%] before:content-[''] before:w-0 before:h-px before:border-solid before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-black${
				customClasses ? ` ${customClasses}` : ""
			}`}
			onClick={clickHandler}></div>
	);
}
