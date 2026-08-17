<script>
	import { tick } from 'svelte';
	import { browser } from '$app/environment';
	import { Spring } from 'svelte/motion';
	import { backOut, cubicOut } from 'svelte/easing';

	const phrases = ['GTM stack', 'revenue engine', 'CRM system'];

	let phraseIndex = $state(0);
	let reducedMotion = $state(false);
	let currentPhrase = $derived(phrases[phraseIndex]);

	// staggerFrom: "last" — the rightmost character animates first, matching the reference.
	// Flat (not nested per-word) because Svelte doesn't fire in:/out: transitions on elements
	// inside a two-level-deep keyed {#each} — confirmed by direct testing (getAnimations()
	// stayed empty through an entire transition with word->character nesting, worked once flattened).
	let phraseChars = $derived([...currentPhrase]);
	let totalChars = $derived(phraseChars.length);

	// smoothly animates the pill's width between phrases, mirroring the reference's
	// shared layout animation (motion-sv's `layout` prop) without pulling in that dependency —
	// this project already uses Spring from svelte/motion for the same kind of numeric tween
	let widthProbeEl = $state(null);
	let pillWidth = new Spring(0, { stiffness: 0.3, damping: 0.75 });
	let hasMeasured = $state(false);

	function measurePillWidth() {
		if (!widthProbeEl) return;
		pillWidth.set(widthProbeEl.offsetWidth);
		hasMeasured = true;
	}

	$effect(() => {
		currentPhrase;
		if (!browser) return;
		tick().then(measurePillWidth);
	});

	// the initial measurement can race the custom heading font swapping in
	// (fallback-font metrics are narrower), so re-measure once fonts are confirmed ready
	$effect(() => {
		if (!browser || !document.fonts) return;
		document.fonts.ready.then(() => tick().then(measurePillWidth));
	});

	$effect(() => {
		if (!browser) return;
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion) return;

		const interval = setInterval(() => {
			phraseIndex = (phraseIndex + 1) % phrases.length;
		}, 2000);
		return () => clearInterval(interval);
	});

	// mirrors the reference's character transition — spring(damping: 25, stiffness: 300),
	// initial/exit states (y: 100%/-120%, opacity: 0) — as a duration+easing transition
	function riseIn(node, { delay = 0 } = {}) {
		return {
			delay: Math.max(0, delay),
			duration: 350,
			easing: backOut,
			css: (t) => {
				const c = Math.min(1, Math.max(0, t));
				return `transform: translateY(${(1 - c) * 100}%); opacity: ${c}`;
			}
		};
	}

	function riseOut(node, { delay = 0 } = {}) {
		return {
			delay: Math.max(0, delay),
			duration: 250,
			easing: cubicOut,
			css: (t) => {
				const c = Math.min(1, Math.max(0, t));
				return `transform: translateY(${(1 - c) * -120}%); opacity: ${c}`;
			}
		};
	}
</script>

<section class="relative -top-14 mx-auto w-full max-w-5xl px-4">
	<div
		aria-hidden="true"
		class="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
	>
		<div
			class="absolute inset-0 top-0 isolate -z-20 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent)] contain-strict"
		></div>
	</div>

	<div
		aria-hidden="true"
		class="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
	>
		<div
			class="absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
		<div
			class="absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
		></div>
	</div>

	<div class="relative flex flex-col items-center justify-center gap-5 pt-46 pb-10">
		<a
			class="group mx-auto flex w-fit animate-in items-center gap-3 rounded-full border bg-card px-3 py-1 shadow transition-all delay-500 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
			href="/"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-3 text-muted-foreground"
			>
				<path
					d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
				/>
			</svg>
			<span class="text-xs">GTM Systems Engineer for B2B revenue teams</span>
			<span class="block h-5 border-l"></span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-3 duration-150 ease-out group-hover:translate-x-1"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>

		<h1
			class="animate-in text-center font-heading text-4xl font-medium tracking-tight text-balance delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 [text-shadow:0_0_50px_color-mix(in_oklab,var(--foreground)_20%,transparent)] fade-in md:text-5xl lg:text-6xl"
		>
			A
			<span
				class="relative inline-grid overflow-hidden rounded-lg bg-[#ff5941] px-2 py-0.5 align-baseline text-white sm:px-2 sm:py-1 md:px-3 md:py-2"
				style={hasMeasured ? `width: ${pillWidth.current}px;` : ''}
			>
				<span
					bind:this={widthProbeEl}
					aria-hidden="true"
					class="pointer-events-none invisible fixed top-0 left-[-10000px] inline-flex flex-nowrap justify-center px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-2"
				>
					{#each phraseChars as char, i (i)}
						<span class="inline-block whitespace-pre">{char}</span>
					{/each}
				</span>
				<span class="col-start-1 row-start-1 inline-flex flex-nowrap justify-center">
					{#each phraseChars as char, i (`${phraseIndex}-${i}`)}
						<span
							class="inline-block whitespace-pre"
							in:riseIn={{ delay: reducedMotion ? 0 : (totalChars - 1 - i) * 8 }}
							out:riseOut={{ delay: reducedMotion ? 0 : (totalChars - 1 - i) * 5 }}>{char}</span
						>
					{/each}
				</span>
			</span>
			that finally
			<br />
			works as hard as you do
		</h1>

		<p
			class="mx-auto max-w-md animate-in text-center text-base tracking-wider text-foreground/80 delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl"
		>
			Data you can trust, tools that talk to each other and no more leads slipping through the
			cracks
		</p>

		<div
			class="flex animate-in flex-row flex-wrap items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in"
		>
			<a
				href="/case-studies"
				class="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow-xs transition-all hover:bg-secondary/80"
			>
				View Case Studies
			</a>
			<a
				href="mailto:ziongonet@gmail.com"
				class="hover-smile inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
			>
				Get in touch
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="size-4"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
		</div>
	</div>
</section>
