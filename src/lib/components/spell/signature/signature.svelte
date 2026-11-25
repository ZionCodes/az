<script>
	import { browser } from '$app/env';
	import { cn } from '#lib/utils.js';
	import { signature } from './zion-gonet.js';

	let {
		color = '#000',
		duration = 1.5,
		delay = 0,
		class: className,
		inView = false,
		once = true,
		...restProps
	} = $props();

	const { width, height } = signature;
	const paths = signature.paths.map((d, i) => ({ id: `path-${i}`, d, delay: delay + i * 0.2 }));

	let visible = $state(false);
	let svgEl = $state(null);

	function playAnimation() {
		visible = false;
		requestAnimationFrame(() => requestAnimationFrame(() => (visible = true)));
	}

	$effect(() => {
		if (!browser || !svgEl) return;
		if (!inView) {
			playAnimation();
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						playAnimation();
						if (once) observer.disconnect();
					} else if (!once) {
						visible = false;
					}
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(svgEl);
		return () => observer.disconnect();
	});
</script>

<svg
	bind:this={svgEl}
	{width}
	{height}
	viewBox={`0 0 ${width} ${height}`}
	fill="none"
	role="img"
	aria-label="Zion Gonet signature"
	class={cn('overflow-visible', className)}
	{...restProps}
>
	{#each paths as path (path.id)}
		<path
			d={path.d}
			pathLength="1"
			stroke={color}
			stroke-width="2"
			fill={color}
			vector-effect="non-scaling-stroke"
			stroke-linecap="butt"
			stroke-linejoin="round"
			style="stroke-dasharray: 1; stroke-dashoffset: {visible ? 0 : 1}; fill-opacity: {visible
				? 1
				: 0}; transition:
				stroke-dashoffset {duration}s ease-in-out {path.delay}s,
				fill-opacity {Math.min(0.25, duration * 0.35)}s ease-in-out {path.delay + duration * 0.65}s;"
		></path>
	{/each}
</svg>
