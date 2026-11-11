// Triggers a CSS animation (via a toggled class) every time a node scrolls
// into view -- including re-entering after having scrolled back out -- and
// replays it on every `mouseenter` too. Touch visitors get it each time the
// card comes on screen; desktop visitors also get it again on hover.
export function playOnView(
	node,
	{
		class: className = 'in-view',
		threshold = 0.4,
		rootMargin = '0px 0px -10% 0px',
		enterDelay = 0,
		replayOnHover = true
	} = {}
) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return {};
	}

	let timeoutId;
	let hasEnteredBefore = false;

	function play() {
		// remove + force reflow + re-add so the browser treats this as a new
		// animation run even if the class was already present (replay)
		node.classList.remove(className);
		void node.offsetWidth;
		node.classList.add(className);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					clearTimeout(timeoutId);
					// only the very first entrance waits for enterDelay (so it
					// doesn't clash with the card's own fade/slide-in); every
					// re-entry after scrolling away plays immediately
					const delay = hasEnteredBefore ? 0 : enterDelay;
					hasEnteredBefore = true;
					timeoutId = setTimeout(play, delay);
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);
	if (replayOnHover) node.addEventListener('mouseenter', play);

	return {
		destroy() {
			observer.disconnect();
			clearTimeout(timeoutId);
			if (replayOnHover) node.removeEventListener('mouseenter', play);
		}
	};
}
