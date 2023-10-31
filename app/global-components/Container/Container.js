export default function Container({ children, customClasses }) {
	return <div className={`container mx-auto px-2.5${customClasses ? ` ${customClasses}` : ""}`}>{children}</div>;
}
