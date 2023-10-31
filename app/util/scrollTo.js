import { animateScroll } from "./animate-scroll";

const logError = () => console.error(`Invalid element, are you sure you've provided element id or react ref?`);

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000 }) => {
	// the position of the scroll bar before the user clicks the button
	const initialPosition = window.scrollY;

	// decide what type of reference that is
	// if neither ref or id is provided  set element to null
	const element = ref ? ref.current : id ? document.getElementById(id) : null;

	if (!element) {
		// log error if the reference passed is invalid
		logError();
		return;
	}

	animateScroll({
		targetPosition: getElementPosition(element),
		initialPosition,
		duration,
	});
};
