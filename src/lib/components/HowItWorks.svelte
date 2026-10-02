<script>
	import { reveal } from '#lib/actions/reveal.js';

	const steps = [
		{
			number: '01',
			title: 'Understand the Stack',
			description:
				'I start by mapping the full GTM motion. Where data breaks, where handoffs fail, and where the team is spending time on work a system should handle.',
			card: 'bg-gradient-to-br from-blue-500 to-sky-600'
		},
		{
			number: '02',
			title: 'Design the Architecture',
			description:
				'I design the full system before touching any tool. CRM data models, workflow logic, integration layers, and failure handling all mapped out before building starts.',
			card: 'bg-gradient-to-br from-violet-500 to-purple-600'
		},
		{
			number: '03',
			title: 'Build and Ship',
			description:
				'I build end to end, handle edge cases, and test against real data. I ship v1 fast and iterate based on what breaks in production, not what looked good in a diagram.',
			card: 'bg-gradient-to-br from-orange-500 to-red-500'
		},
		{
			number: '04',
			title: 'Own and Improve',
			description:
				'I document everything and stay close to the system as the business grows, not just until launch.',
			card: 'bg-gradient-to-br from-emerald-500 to-teal-600'
		}
	];

	const scrollVh = steps.length * 50;

	let wrapper = $state();
	let contentEl = $state();
	let listEl = $state();
	let progress = $state(0);
	let listHeight = $state(0);
	let fillLeft = $state(0);
	let fillTop = $state(0);

	$effect(() => {
		function update() {
			if (!wrapper) return;
			const scrollable = wrapper.offsetHeight - window.innerHeight;
			const scrolled = -wrapper.getBoundingClientRect().top;
			progress = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;

			if (contentEl && listEl) {
				const listRect = listEl.getBoundingClientRect();
				const contentRect = contentEl.getBoundingClientRect();
				fillLeft = listRect.left - contentRect.left - 10;
				fillTop = listRect.top - contentRect.top;
			}
		}

		// Scroll fires far more often than the display can paint; without this, every
		// tick forces a synchronous layout read (getBoundingClientRect x3) even though
		// only one of them can actually show up on screen. Coalesce to one update per frame.
		let ticking = false;
		function onScrollOrResize() {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				update();
				ticking = false;
			});
		}

		update();
		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize);

		return () => {
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
		};
	});

	let activeIndex = $derived(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
	let fillScale = $derived(1 / steps.length + (1 - 1 / steps.length) * progress);
</script>

<div class="mx-auto max-w-2xl space-y-4 px-6 pt-16 text-center opacity-0 md:pt-24" use:reveal>
	<p
		class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
	>
		<span class="inline-block h-px w-8 bg-foreground/30"></span>
		The Process
		<span class="inline-block h-px w-8 bg-foreground/30"></span>
	</p>
	<h2 class="font-heading text-3xl font-semibold lg:text-4xl">A Clear Process From Day One</h2>
	<p class="text-muted-foreground">
		Every engagement follows the same four steps, so you always know what's happening and why.
	</p>
</div>

<div class="pin-wrapper" bind:this={wrapper} style="height: calc(100vh + {scrollVh}vh)">
	<section class="pin-section">
		<div class="content" bind:this={contentEl}>
			<ul class="list" bind:this={listEl} bind:clientHeight={listHeight}>
				{#each steps as item, i (item.title)}
					<li class:active={i === activeIndex}>{item.title}</li>
				{/each}
			</ul>
			<div
				class="fill"
				style="left: {fillLeft}px; top: {fillTop}px; height: {listHeight}px; transform: scaleY({fillScale})"
			></div>
			<div class="right">
				{#each steps as item, i (item.title)}
					<div class="slide" class:visible={i === activeIndex}>
						<div class="card {item.card}">
							<div class="card-header">
								<span class="card-label">Step</span>
								<span class="card-number">{item.number}</span>
							</div>

							<div class="card-illustration">
								{#if i === 0}
									<svg viewBox="0 0 160 160" fill="none">
										<g stroke="#fff" stroke-width="2" stroke-linecap="round">
											<line x1="80" y1="80" x2="32" y2="42" opacity="0.6" />
											<line x1="80" y1="80" x2="128" y2="42" opacity="0.6" />
											<line x1="80" y1="80" x2="32" y2="118" opacity="0.6" />
											<line x1="80" y1="80" x2="128" y2="118" opacity="0.6" />
										</g>
										<g stroke="#fff" stroke-width="2" fill="#fff" fill-opacity="0.15">
											<circle cx="80" cy="80" r="16" />
											<circle cx="32" cy="42" r="9" />
											<circle cx="128" cy="42" r="9" />
											<circle cx="32" cy="118" r="9" />
											<circle cx="128" cy="118" r="9" />
										</g>
									</svg>
								{:else if i === 1}
									<svg viewBox="0 0 160 160" fill="none">
										<g
											stroke="#fff"
											stroke-width="2"
											stroke-linejoin="round"
											fill="#fff"
											fill-opacity="0.12"
										>
											<path d="M80 24 138 52 80 80 22 52Z" />
											<path d="M80 64 138 92 80 120 22 92Z" fill-opacity="0.18" />
											<path d="M80 104 138 132 80 160 22 132Z" fill-opacity="0.24" />
										</g>
									</svg>
								{:else if i === 2}
									<svg viewBox="0 0 160 160" fill="none">
										<circle cx="34" cy="30" r="2.5" fill="#fff" opacity="0.6" />
										<circle cx="24" cy="60" r="1.5" fill="#fff" opacity="0.5" />
										<circle cx="46" cy="18" r="1.5" fill="#fff" opacity="0.5" />
										<g transform="translate(30 8) scale(5.4)">
											<path
												d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
												stroke="#fff"
												stroke-width="2"
												vector-effect="non-scaling-stroke"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
									</svg>
								{:else}
									<svg viewBox="0 0 160 160" fill="none">
										<g transform="translate(20 30) scale(5.4)">
											<path
												d="M3 3v16a2 2 0 0 0 2 2h16M7 16l4-4 3 3 5-6"
												stroke="#fff"
												stroke-width="2"
												vector-effect="non-scaling-stroke"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</g>
										<g fill="#fff">
											<circle cx="57.8" cy="116.4" r="4" />
											<circle cx="79.6" cy="94.6" r="4" />
											<circle cx="96.2" cy="110.2" r="4" />
											<circle cx="123" cy="78.4" r="4" />
										</g>
									</svg>
								{/if}
							</div>

							<h3 class="card-title">{item.title}</h3>
							<p class="card-description">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.pin-wrapper {
		position: relative;
	}

	.pin-section {
		width: 100%;
		height: 100vh;
		height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--foreground);
		position: sticky;
		top: 0;
		border-bottom: dashed 2px var(--border);
	}

	.content {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		padding: 0 10px;
		position: relative;
	}

	.list {
		font-size: 26px;
		color: var(--muted-foreground);
		margin: 0;
		padding: 0;
		padding-right: 10px;
		list-style: none;
		flex-grow: 0;
	}

	.list li {
		transition: color 0.2s ease;
	}

	.list li.active {
		color: var(--primary);
	}

	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		background-color: var(--primary);
		transform-origin: top left;
		transition: transform 0.1s linear;
	}

	.right {
		flex-grow: 1;
		position: relative;
	}

	.right .slide {
		position: absolute;
		width: 300px;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.2s ease,
			visibility 0.2s ease;
	}

	.right .slide.visible {
		opacity: 1;
		visibility: visible;
	}

	.card {
		width: 300px;
		height: 450px;
		border-radius: var(--radius);
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		color: #fff;
		box-shadow:
			0 20px 25px -5px rgb(0 0 0 / 0.15),
			0 8px 10px -6px rgb(0 0 0 / 0.15);
	}

	.card-header {
		flex-shrink: 0;
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.card-label {
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: rgb(255 255 255 / 0.7);
	}

	.card-number {
		font-family: var(--font-heading);
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1;
	}

	.card-illustration {
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 0;
		padding: 0.5rem 0;
	}

	.card-illustration svg {
		width: 100%;
		max-width: 150px;
		height: auto;
	}

	.card-title {
		flex-shrink: 0;
		font-family: var(--font-heading);
		font-size: 1.375rem;
		font-weight: 600;
		color: #fff;
		line-height: 1.25;
	}

	.card-description {
		flex-shrink: 0;
		font-size: 0.9375rem;
		line-height: 1.6;
		color: rgb(255 255 255 / 0.85);
		margin: 0.75rem 0 0;
	}

	@media (max-width: 1023px) {
		.list {
			font-size: 21px;
		}
	}

	@media (max-width: 640px) {
		.content {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;
			height: 100%;
		}

		.list {
			font-size: 18px;
			padding-right: 0;
			text-align: center;
		}

		.right {
			flex-grow: 0;
			width: min(85vw, 280px);
			aspect-ratio: 2 / 3;
			margin: 0 auto;
		}

		.right .slide {
			width: 100%;
			right: 0;
		}

		.card {
			width: 100%;
			height: 100%;
			padding: 1.25rem;
		}

		.card-illustration svg {
			max-width: 120px;
		}

		.card-description {
			font-size: 0.875rem;
		}
	}
</style>
