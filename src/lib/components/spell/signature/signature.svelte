<script>
	import { browser } from '$app/env';
	import { cn } from '#lib/utils.js';

	let {
		text = 'Signature',
		color = '#000',
		fontSize = 14,
		duration = 1.5,
		delay = 0,
		class: className,
		inView = false,
		once = true,
		...restProps
	} = $props();

	const height = 100;

	let paths = $state([]);
	let width = $state(300);
	let visible = $state(false);
	let intersected = $state(false);
	let svgEl = $state(null);

	let horizontalPadding = $derived(fontSize * 0.1);
	let topMargin = $derived(Math.max(5, (height - fontSize) / 2));
	let baseline = $derived(Math.min(height - 5, topMargin + fontSize));

	let requestId = 0;

	async function buildPaths() {
		if (!browser) return;
		const currentRequest = ++requestId;

		try {
			const [{ default: opentype }, response] = await Promise.all([
				import('opentype.js'),
				fetch('/LastoriaBoldRegular.otf')
			]);

			if (!response.ok) throw new Error(`Failed to load font: ${response.status}`);

			const font = opentype.parse(await response.arrayBuffer());
			const nextPaths = [];
			const fontOptions = { kerning: true, features: { liga: true, rlig: true } };

			font.forEachGlyph(
				text,
				horizontalPadding,
				baseline,
				fontSize,
				fontOptions,
				(glyph, glyphX, glyphY, glyphFontSize) => {
					const pathData = glyph.getPath(glyphX, glyphY, glyphFontSize).toPathData(3).trim();
					if (pathData) {
						nextPaths.push({
							id: `path-${nextPaths.length}`,
							d: pathData,
							delay: delay + nextPaths.length * 0.2
						});
					}
				}
			);

			if (currentRequest !== requestId) return;

			paths = nextPaths;
			width = Math.max(
				font.getAdvanceWidth(text, fontSize, fontOptions) + horizontalPadding * 2,
				fontSize
			);
		} catch {
			if (currentRequest !== requestId) return;
			paths = [];
			width = Math.max(text.length * fontSize * 0.6, fontSize * 2);
		}
	}

	function playAnimation() {
		visible = false;
		requestAnimationFrame(() => requestAnimationFrame(() => (visible = true)));
	}

	$effect(() => {
		text;
		fontSize;
		baseline;
		horizontalPadding;
		delay;
		// Don't fetch the font + parse glyphs until the signature is actually about to be
		// seen — avoids shipping opentype.js and the font file for a decorative flourish
		// that might never scroll into view.
		if (inView && !intersected) return;
		buildPaths();
	});

	$effect(() => {
		if (!browser || !inView || !svgEl) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						intersected = true;
						if (once) observer.disconnect();
					} else if (!once) {
						intersected = false;
						visible = false;
					}
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(svgEl);
		return () => observer.disconnect();
	});

	$effect(() => {
		if (!browser || paths.length === 0) return;
		if (inView && !intersected) return;
		playAnimation();
	});
</script>

<svg
	bind:this={svgEl}
	{width}
	{height}
	viewBox={`0 0 ${width} ${height}`}
	fill="none"
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
