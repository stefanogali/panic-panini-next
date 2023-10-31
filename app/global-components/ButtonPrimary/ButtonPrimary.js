export default function ButtonPrimary({ children, customClasses }) {
	return <button className={`px-5 uppercase py-2 mt-3 text-white whitespace-nowrap font-bold text-base bg-yellow-btn-primary rounded-full transition-all hover:bg-yellow-600${customClasses ? ` ${customClasses}` : ""}`}>{children}</button>;
}
