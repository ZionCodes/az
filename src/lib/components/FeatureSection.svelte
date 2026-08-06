<script>
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';
	import siteLight from '$lib/assets/images/site-light.png';
	import siteDark from '$lib/assets/images/site-dark.png';

	const initialSliderPercentage = 46;
	const sliderXPercent = new Spring(initialSliderPercentage, { stiffness: 0.15 });

	let sliderRef = $state(null);

	function mouseLeaveHandler() {
		sliderXPercent.set(initialSliderPercentage);
	}

	function handleMouseMove(e) {
		if (!sliderRef) return;
		const rect = sliderRef.getBoundingClientRect();
		const percent = ((e.clientX - rect.left) / rect.width) * 100;
		sliderXPercent.set(Math.max(0, Math.min(100, percent)));
	}
</script>

<section>
	<div class="py-16 md:py-24">
		<div class="mx-auto w-full max-w-5xl px-2 md:px-6">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div
					class="col-span-full overflow-hidden rounded-xl border-none border-b border-secondary bg-foreground/5 pt-6 pl-6 text-card-foreground dark:bg-muted/80"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 text-primary"
						><g fill="none"
							><path
								fill="currentColor"
								d="M2.75 12A9.25 9.25 0 0 0 12 21.25V2.75A9.25 9.25 0 0 0 2.75 12"
							/><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 21.25a9.25 9.25 0 0 0 0-18.5m0 18.5a9.25 9.25 0 0 1 0-18.5m0 18.5V2.75"
							/></g
						></svg
					>
					<h3 class="mt-4 text-lg font-semibold text-foreground">Polished, Down to the Details</h3>
					<p class="mt-3 max-w-2xl text-base/normal text-muted-foreground">
						Every system I build gets the same care as this site, right down to how it looks in
						both light and dark mode.
					</p>
					<div class="-mt-2.5 mr-0.5 -ml-2 pt-2 pl-2">
						<div class="relative mx-auto mt-8 h-96 overflow-hidden rounded-tl-3xl">
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								bind:this={sliderRef}
								class="relative h-full w-full cursor-col-resize overflow-hidden"
								onmousemove={handleMouseMove}
								onmouseleave={mouseLeaveHandler}
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
											alt="AutomationZion site in light mode"
											src={siteLight}
											class="absolute inset-0 z-20 h-full w-full object-cover object-top select-none dark:bg-black"
											draggable="false"
										/>
									</div>
								</div>

								<img
									class="absolute top-0 left-0 z-[19] h-full w-full rounded-tl-3xl object-cover object-top select-none"
									alt="AutomationZion site in dark mode"
									src={siteDark}
									draggable="false"
								/>
							</div>
						</div>
					</div>
				</div>

				<div class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground dark:bg-muted/80">
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
					<h3 class="mt-4 text-lg font-semibold text-foreground">Straightforward to Work With</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Clear scoping, fast kickoffs, and no jargon, just a plan and steady updates.
					</p>
				</div>

				<div class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground dark:bg-muted/80">
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
					<h3 class="mt-4 text-lg font-semibold text-foreground">Built to Scale With You</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Systems designed to grow with your GTM stack, from a single integration to full
						automation.
					</p>
				</div>

				<div class="rounded-xl border-none bg-foreground/5 p-6 text-card-foreground dark:bg-muted/80">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						class="size-6 text-primary"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M9 10v10M20.5 9.5h-17M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"
						/></svg
					>
					<h3 class="mt-4 text-lg font-semibold text-foreground">Works With Your Stack</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						HubSpot, Salesforce, Clay, Claude, and more, plugged into one connected system instead
						of scattered tools.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
