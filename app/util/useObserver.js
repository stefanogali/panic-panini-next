import { useState, useEffect } from "react";

export function useIsIntersecting(options, elementRef, callback, callbackRef) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		if (isIntersecting) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsIntersecting(true);
				if (callback) {
					callback(callbackRef);
				}
			}
		}, options);

		observer.observe(elementRef.current);
		return () => {
			observer.disconnect();
		};
	}, [callback, callbackRef, elementRef, isIntersecting, options]);

	return isIntersecting;
}
