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
	let progress = $state(0);

	$effect(() => {
		function update() {
			if (!wrapper) return;
			const scrollable = wrapper.offsetHeight - window.innerHeight;
			const scrolled = -wrapper.getBoundingClientRect().top;
			progress = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;
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
		<div class="content">
			<ul class="list">
				{#each items as item, i (item)}
					<li class:active={i === activeIndex}>{item}</li>
				{/each}
			</ul>
			<div class="fill" style="transform: scaleY({fillScale})"></div>
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
	.section {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #0b0b0d;
		color: #fffce1;
	}

	.intro h3,
	.outro {
		color: #fffce1;
	}

	.pin-wrapper {
		position: relative;
	}

	.pin-section {
		position: sticky;
		top: 0;
		border-top: dashed 2px rgba(255, 255, 255, 0.15);
		border-bottom: dashed 2px rgba(255, 255, 255, 0.15);
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
		color: #fffce1;
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
		color: #0ae448;
	}

	.fill {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 100%;
		background-color: #0ae448;
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

	@media (max-width: 640px) {
		.content {
			flex-direction: column;
			align-items: center;
			gap: 1.5rem;
		}

		.list {
			padding-right: 0;
		}

		.right {
			width: 100%;
			height: 200px;
		}

		.right .slide {
			right: 50%;
			transform: translate(50%, -50%);
		}
	}
</style>
