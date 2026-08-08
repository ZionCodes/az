export function reveal(node, params = {}) {
	const {
		animation = 'fade-in slide-in-from-bottom-8',
		duration = 700,
		delay = 0,
		threshold = 0.15,
		rootMargin = '0px 0px -10% 0px'
	} = params;

	node.classList.add('opacity-0');

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
