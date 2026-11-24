<script>
	import { reveal } from '#lib/actions/reveal.js';

	const steps = [
		{
			number: '01',
			title: 'Map the Process',
			deliverable: 'Process map',
			description:
				'You get a map of where data breaks, where handoffs fail and where the team is doing work a system should.',
			accent: 'blue'
		},
		{
			number: '02',
			title: 'Design the Architecture',
			deliverable: 'System design',
			description:
				'You see the full design before anything is built: data model, workflow logic, integrations and what happens when something fails.',
			accent: 'violet'
		},
		{
			number: '03',
			title: 'Build and Ship',
			deliverable: 'Working v1',
			description:
				'A working v1 goes live fast, tested on real data, then improved by what breaks in production.',
			accent: 'orange'
		},
		{
			number: '04',
			title: 'Own and Improve',
			deliverable: 'Docs and ongoing fixes',
			description:
				'I document everything and keep improving the system after launch as the business grows.',
			accent: 'emerald'
		}
	];

	// full class strings so Tailwind generates them
	const accents = {
		blue: {
			text: 'text-blue-700 dark:text-blue-400',
			soft: 'bg-blue-500/10',
			dot: 'bg-blue-600',
			bar: 'bg-blue-600'
		},
		violet: {
			text: 'text-violet-700 dark:text-violet-400',
			soft: 'bg-violet-500/10',
			dot: 'bg-violet-600',
			bar: 'bg-violet-600'
		},
		orange: {
			text: 'text-orange-700 dark:text-orange-400',
			soft: 'bg-orange-500/10',
			dot: 'bg-orange-600',
			bar: 'bg-orange-600'
		},
		emerald: {
			text: 'text-emerald-700 dark:text-emerald-400',
			soft: 'bg-emerald-500/10',
			dot: 'bg-emerald-600',
			bar: 'bg-emerald-600'
		}
	};

	// how much page scroll each step gets while the section is pinned
	const stepVh = 45;

	let wrapper = $state();
	let progress = $state(0);

	$effect(() => {
		function update() {
			if (!wrapper) return;
			const scrollable = wrapper.offsetHeight - window.innerHeight;
			const scrolled = -wrapper.getBoundingClientRect().top;
			progress = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;
		}

		// one layout read per frame, however often scroll fires
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

	// scroll the page to the middle of a step's share of the pinned range
	function goTo(i) {
		if (!wrapper) return;
		const scrollable = wrapper.offsetHeight - window.innerHeight;
		const top = wrapper.getBoundingClientRect().top + window.scrollY;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({
			top: top + scrollable * ((i + 0.5) / steps.length),
			behavior: reduce ? 'auto' : 'smooth'
		});
	}
</script>

<div class="mx-auto max-w-2xl space-y-4 px-6 pt-16 text-center opacity-0 md:pt-24" use:reveal>
	<p
		class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
	>
		<span class="inline-block h-px w-8 bg-foreground/30"></span>
		The Process
		<span class="inline-block h-px w-8 bg-foreground/30"></span>
	</p>
	<h2 class="font-heading text-3xl font-semibold lg:text-4xl">
		Four Steps From Broken Handoff to Running System
	</h2>
	<p class="text-muted-foreground">
		The same four steps every time, so you always know what comes next.
	</p>
</div>

<div class="relative" bind:this={wrapper} style="height: calc(100vh + {steps.length * stepVh}vh)">
	<section class="sticky top-0 flex h-screen items-center">
		<div
			class="mx-auto grid w-full max-w-5xl items-center gap-8 px-6 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-16"
		>
			<!-- step list with a progress rail -->
			<ol class="relative hidden md:block">
				<span class="absolute top-3 bottom-3 left-[0.6875rem] w-px bg-border" aria-hidden="true"
				></span>
				<span
					class="rail-fill absolute top-3 left-[0.6875rem] w-px origin-top bg-foreground"
					style="height: calc((100% - 1.5rem) * {activeIndex / (steps.length - 1)});"
					aria-hidden="true"
				></span>
				{#each steps as step, i (step.title)}
					<li class="relative">
						<button
							type="button"
							onclick={() => goTo(i)}
							aria-current={i === activeIndex ? 'step' : undefined}
							class="group flex w-full items-start gap-5 rounded-lg py-4 pr-3 text-left"
						>
							<span
								class={[
									'step-dot relative z-10 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300',
									i <= activeIndex
										? 'border-foreground bg-foreground'
										: 'border-border bg-background'
								]}
							>
								{#if i < activeIndex}
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										class="size-3 text-background"
										aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg
									>
								{:else if i === activeIndex}
									<span class="size-2 rounded-full bg-background"></span>
								{/if}
							</span>
							<span class="min-w-0">
								<span
									class={[
										'block font-heading text-2xl transition-colors duration-300 lg:text-3xl',
										i === activeIndex
											? 'text-foreground'
											: 'text-muted-foreground/60 group-hover:text-muted-foreground'
									]}>{step.title}</span
								>
								<span
									class={[
										'mt-1 block text-sm transition-colors duration-300',
										i === activeIndex ? accents[step.accent].text : 'text-muted-foreground/60'
									]}>{step.number} · {step.deliverable}</span
								>
							</span>
						</button>
					</li>
				{/each}
			</ol>

			<!-- compact step switcher for small screens -->
			<div class="flex items-center justify-center gap-2 md:hidden">
				{#each steps as step, i (step.title)}
					<button
						type="button"
						onclick={() => goTo(i)}
						aria-label="Step {step.number}: {step.title}"
						aria-current={i === activeIndex ? 'step' : undefined}
						class={[
							'h-1.5 rounded-full transition-all duration-300',
							i === activeIndex ? 'w-10 bg-foreground' : 'w-5 bg-border'
						]}
					></button>
				{/each}
			</div>

			<!-- card deck -->
			<div class="relative mx-auto h-[26rem] w-full max-w-[22rem] md:h-[28rem]">
				{#each steps as step, i (step.title)}
					{@const a = accents[step.accent]}
					<article
						class={[
							'deck-card absolute inset-0 flex flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-lg',
							i < activeIndex && 'is-past',
							i === activeIndex && 'is-active',
							i > activeIndex && 'is-next'
						]}
						aria-hidden={i !== activeIndex}
					>
						<span class="absolute inset-x-0 top-0 h-1 {a.bar}"></span>
						<div class="flex items-baseline justify-between">
							<span class="text-xs tracking-[0.2em] text-muted-foreground uppercase">Step</span>
							<span class="font-heading text-4xl font-bold {a.text}">{step.number}</span>
						</div>

						<!-- a small example of what this step produces -->
						<div class="my-5 flex flex-1 items-center">
							{#if i === 0}
								<div class="w-full space-y-2.5 text-xs">
									{#each [{ from: 'Form', to: 'CRM', ok: true }, { from: 'CRM', to: 'Finance sheet', ok: false, note: 'Copied by hand' }, { from: 'Finance sheet', to: 'Invoice', ok: false, note: 'Retyped' }] as edge, k (k)}
										<div class="art-row flex items-center gap-2" style="--k: {k};">
											<span class="rounded-md border bg-background px-2 py-1">{edge.from}</span>
											<span
												class={[
													'h-px flex-1',
													edge.ok ? 'bg-border' : 'border-t border-dashed border-red-500'
												]}
											></span>
											<span class="rounded-md border bg-background px-2 py-1">{edge.to}</span>
										</div>
										{#if !edge.ok}
											<p
												class="art-row -mt-1 text-right text-[11px] text-red-600 dark:text-red-400"
												style="--k: {k};"
											>
												{edge.note}
											</p>
										{/if}
									{/each}
								</div>
							{:else if i === 1}
								<div class="w-full space-y-2 text-xs">
									<div class="art-row flex items-center gap-2" style="--k: 0;">
										<span class="rounded-md border bg-background px-2 py-1">Order form</span>
										<span class="text-muted-foreground">→</span>
										<span class="rounded-md px-2 py-1 font-medium {a.soft} {a.text}">Workflow</span>
										<span class="text-muted-foreground">→</span>
										<span class="rounded-md border bg-background px-2 py-1">Billing</span>
									</div>
									<div class="art-row ml-[5.5rem] flex items-center gap-2" style="--k: 1;">
										<span class="text-muted-foreground">↳ if it fails</span>
										<span class="rounded-md border border-dashed bg-background px-2 py-1"
											>Retry, then alert</span
										>
									</div>
									<div
										class="art-row mt-3 rounded-md border bg-background p-2 font-mono text-[11px] text-muted-foreground"
										style="--k: 2;"
									>
										order: plan, seats, start_date<br />
										owner: billing team
									</div>
								</div>
							{:else if i === 2}
								<ul class="w-full space-y-2.5 text-xs">
									{#each ['Tested on real records', 'Edge cases handled', 'Errors alert the team'] as check, k (check)}
										<li class="art-row flex items-center gap-2" style="--k: {k};">
											<span
												class="flex size-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
											>
												<svg
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="3"
													class="size-2.5"
													aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg
												>
											</span>
											{check}
										</li>
									{/each}
									<li class="art-row pt-1" style="--k: 3;">
										<span
											class="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-1 font-medium"
										>
											<span class="size-1.5 rounded-full bg-emerald-500"></span>
											v1 live
										</span>
									</li>
								</ul>
							{:else}
								<ul class="w-full space-y-2 text-xs">
									{#each [{ icon: 'doc', label: 'Handover doc' }, { icon: 'play', label: 'Recorded walkthrough' }, { icon: 'cal', label: 'Regular check-ins as the business grows' }] as item, k (item.label)}
										<li
											class="art-row flex items-center gap-2.5 rounded-md border bg-background px-2.5 py-2"
											style="--k: {k};"
										>
											<svg
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="1.75"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="size-4 shrink-0 {a.text}"
												aria-hidden="true"
											>
												{#if item.icon === 'doc'}
													<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
													<path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h5" />
												{:else if item.icon === 'play'}
													<rect width="20" height="14" x="2" y="5" rx="2" />
													<path d="m10 9 5 3-5 3Z" />
												{:else}
													<rect width="18" height="18" x="3" y="4" rx="2" />
													<path d="M16 2v4M8 2v4M3 10h18" />
												{/if}
											</svg>
											{item.label}
										</li>
									{/each}
								</ul>
							{/if}
						</div>

						<h3 class="font-heading text-xl font-semibold">{step.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.rail-fill {
		transition: height 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* the deck: the outgoing card lifts and shrinks back, the incoming one
	   slides up from below; a firm ease-out so each change reads as one move */
	.deck-card {
		transition:
			transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
			opacity 0.45s ease;
		will-change: transform, opacity;
	}
	.deck-card.is-active {
		transform: none;
		opacity: 1;
		z-index: 3;
	}
	.deck-card.is-past {
		transform: translateY(-1.5rem) scale(0.9);
		opacity: 0;
		z-index: 1;
		pointer-events: none;
	}
	.deck-card.is-next {
		transform: translateY(3rem) rotate(2.5deg);
		opacity: 0;
		z-index: 2;
		pointer-events: none;
	}

	/* the example inside the active card builds itself line by line */
	@keyframes art-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	.deck-card.is-active .art-row {
		animation: art-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) backwards;
		animation-delay: calc(0.25s + var(--k) * 0.1s);
	}

	@media (prefers-reduced-motion: reduce) {
		.deck-card,
		.rail-fill {
			transition: none;
		}
		.deck-card.is-past,
		.deck-card.is-next {
			transform: none;
		}
		.deck-card.is-active .art-row {
			animation: none;
		}
	}
</style>
