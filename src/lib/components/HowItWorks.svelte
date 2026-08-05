<script>
	const items = ['Animate', 'Anything', 'With', 'GSAP'];
	const images = [
		'https://assets.codepen.io/16327/portrait-number-01.png',
		'https://assets.codepen.io/16327/portrait-number-02.png',
		'https://assets.codepen.io/16327/portrait-number-03.png',
		'https://assets.codepen.io/16327/portrait-number-04.png'
	];

	const scrollVh = items.length * 50;

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

		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);

		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	});

	let activeIndex = $derived(Math.min(items.length - 1, Math.floor(progress * items.length)));
	let fillScale = $derived(1 / items.length + (1 - 1 / items.length) * progress);
</script>

<section class="section intro">
	<h3>scroll down</h3>
</section>

<div class="pin-wrapper" bind:this={wrapper} style="height: calc(100vh + {scrollVh}vh)">
	<section class="section pin-section">
		<div class="content" bind:this={contentEl}>
			<ul class="list" bind:this={listEl} bind:clientHeight={listHeight}>
				{#each items as item, i (item)}
					<li class:active={i === activeIndex}>{item}</li>
				{/each}
			</ul>
			<div
				class="fill"
				style="left: {fillLeft}px; top: {fillTop}px; height: {listHeight}px; transform: scaleY({fillScale})"
			></div>
			<div class="right">
				{#each images as src, i (src)}
					<div class="slide" class:visible={i === activeIndex}>
						<img {src} alt="" />
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<section class="section outro"></section>

<style>
	* {
		box-sizing: border-box;
	}

	.section {
		width: 100%;
		height: 100vh;
		height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--background);
		color: var(--foreground);
	}

	.pin-wrapper {
		position: relative;
	}

	.pin-section {
		position: sticky;
		top: 0;
		border-top: dashed 2px var(--border);
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
		font-size: 30px;
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
		color: #16a34a;
	}

	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		background-color: #16a34a;
		transform-origin: top left;
		transition: transform 0.1s linear;
	}

	.right {
		flex-grow: 1;
		position: relative;
	}

	.right .slide {
		position: absolute;
		width: 50%;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		opacity: 0;
		visibility: hidden;
		border-radius: var(--radius);
		transition:
			opacity 0.2s ease,
			visibility 0.2s ease;
	}

	.right .slide.visible {
		opacity: 1;
		visibility: visible;
	}

	.right img {
		width: 100%;
		max-width: 300px;
		border-radius: var(--radius);
	}

	@media (max-width: 1023px) {
		.list {
			font-size: 24px;
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
			font-size: 20px;
			padding-right: 0;
		}

		.right {
			flex-grow: 0;
			width: min(70vw, 280px);
			aspect-ratio: 3 / 4;
			margin: 0 auto;
		}

		.right .slide {
			width: 100%;
			right: 0;
		}
	}
</style>
