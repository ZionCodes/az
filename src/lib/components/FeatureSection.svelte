<script>
	import { Spring } from 'svelte/motion';
	import { reveal } from '$lib/actions/reveal.js';
	import siteLight from '$lib/assets/images/site-light.webp';
	import siteDark from '$lib/assets/images/site-dark.webp';

	const initialSliderPercentage = 46;
	const sliderXPercent = new Spring(initialSliderPercentage, { stiffness: 0.15 });

	let sliderRef = $state(null);

	function pointerLeaveHandler() {
		sliderXPercent.set(initialSliderPercentage);
	}

	function handlePointerMove(e) {
		if (!sliderRef) return;
		const rect = sliderRef.getBoundingClientRect();
		const percent = ((e.clientX - rect.left) / rect.width) * 100;
		sliderXPercent.set(Math.max(0, Math.min(100, percent)));
	}

	function handleKeydown(e) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			sliderXPercent.set(Math.max(0, sliderXPercent.current - 5));
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			sliderXPercent.set(Math.min(100, sliderXPercent.current + 5));
		}
	}
</script>

<section>
	<div class="py-16 md:py-24">
		<div class="mx-auto w-full max-w-5xl px-2 md:px-6">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div
					use:reveal={{ delay: 0 }}
					class="col-span-full overflow-hidden rounded-xl border-b border-none border-secondary bg-foreground/5 pt-6 pl-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-6 text-primary"
					>
						<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
						<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
					</svg>
					<h3 class="mt-4 text-lg font-semibold text-foreground">One System, Any Starting Point</h3>
					<p class="mt-3 max-w-2xl text-base/normal text-muted-foreground">
						Whether you're already running a GTM stack, or building from zero, I build the systems
						that carry a deal from first signal to closed-won
					</p>
					<div class="-mt-2.5 mr-0.5 -ml-2 pt-2 pl-2">
						<div class="relative mx-auto mt-8 h-96 overflow-hidden rounded-tl-3xl">
							<div
								bind:this={sliderRef}
								class="relative h-full w-full cursor-col-resize overflow-hidden"
								role="slider"
								tabindex="0"
								aria-label="Drag or use arrow keys to compare light and dark mode"
								aria-valuenow={Math.round(sliderXPercent.current)}
								aria-valuemin="0"
								aria-valuemax="100"
								onpointermove={handlePointerMove}
								onpointerleave={pointerLeaveHandler}
								onkeydown={handleKeydown}
							>
								<div
									class="absolute top-0 z-40 m-auto h-full w-px bg-gradient-to-b from-transparent from-[5%] via-indigo-500 to-transparent to-[95%]"
									style="left: {sliderXPercent.current}%;"
								>
									<div
										class="absolute top-1/2 -right-2.5 z-30 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-md bg-white shadow-[0px_-1px_0px_0px_#FFFFFF40]"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="h-4 w-4 text-black"
											><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle
												cx="12"
												cy="19"
												r="1"
											/></svg
										>
									</div>
								</div>

								<div class="pointer-events-none relative z-20 h-full w-full overflow-hidden">
									<div
										class="absolute inset-0 z-20 h-full w-full overflow-hidden rounded-tl-2xl select-none"
										style="clip-path: inset(0 {100 - sliderXPercent.current}% 0 0);"
									>
										<img
											alt="AutomationZion's integration stack in light mode"
											src={siteLight}
											loading="lazy"
											class="absolute inset-0 z-20 h-full w-full object-cover object-top select-none dark:bg-black"
											draggable="false"
										/>
									</div>
								</div>

								<img
									class="absolute top-0 left-0 z-[19] h-full w-full rounded-tl-3xl object-cover object-top select-none"
									alt="AutomationZion's integration stack in dark mode"
									src={siteDark}
									loading="lazy"
									draggable="false"
								/>
							</div>
						</div>
					</div>
				</div>

				<div
					use:reveal={{ delay: 80 }}
					class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-primary" viewBox="0 0 24 24"
						><g fill="none"
							><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" /><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-width="1.5"
								d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
							/><path
								fill="currentColor"
								d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"
							/><ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5" /></g
						></svg
					>
					<h3 class="mt-4 text-lg font-semibold text-foreground">
						No Guesswork, Just Systems That Work
					</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Clear communication, steady updates and systems built to be understood, not a black box
						only I can maintain.
					</p>
				</div>

				<div
					use:reveal={{ delay: 160 }}
					class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-primary" viewBox="0 0 24 24"
						><g fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
							/><path
								stroke-linecap="round"
								d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"
							/></g
						></svg
					>
					<h3 class="mt-4 text-lg font-semibold text-foreground">Built to Scale With the Team</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Systems designed to grow as the business does, from one integration today to the full
						stack tomorrow.
					</p>
				</div>

				<div
					use:reveal={{ delay: 240 }}
					class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="size-6 text-primary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
						<path d="M7 11V7a5 5 0 0 1 9.9-1" />
					</svg>
					<h3 class="mt-4 text-lg font-semibold text-foreground">Documented, Not Dependent</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Everything I build is documented and handed off clean, so the team owns it fully.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
