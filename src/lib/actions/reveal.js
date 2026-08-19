export function reveal(node, params = {}) {
	const {
		animation = 'fade-in slide-in-from-bottom-8',
		duration = 700,
		delay = 0,
		threshold = 0.15,
		rootMargin = '0px 0px -10% 0px'
	} = params;

	// The node must already carry `opacity-0` in its own markup (not added
	// here) so it's hidden from the very first server-rendered paint. This
	// action only runs after hydration, so adding the class here would leave
	// a brief flash of fully-visible content between paint and hydration.
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.remove('opacity-0');
		return {};
	}

	node.style.animationDuration = `${duration}ms`;
	if (delay) node.style.animationDelay = `${delay}ms`;

	const animateClasses = ['animate-in', 'ease-out', ...animation.split(' ')];

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.remove('opacity-0');
					node.classList.add(...animateClasses);
					observer.disconnect();
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
