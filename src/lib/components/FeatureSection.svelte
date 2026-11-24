<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { playOnView } from '#lib/actions/playOnView.js';

	import BeforeAfterSlider from '#lib/components/BeforeAfterSlider.svelte';
</script>

<section>
	<div class="py-16 md:py-24">
		<div class="mx-auto w-full max-w-5xl px-2 md:px-6">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<div
					use:reveal={{ delay: 0 }}
					use:playOnView={{ class: 'feat-play', enterDelay: 600 }}
					class="feat-card col-span-full overflow-hidden rounded-xl bg-foreground/5 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<div class="p-6 md:p-8">
						<div
							class="feat-icon-badge flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20 dark:text-blue-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.75"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="size-5"
							>
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
								<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
							</svg>
						</div>
						<h3 class="mt-4 font-heading text-xl font-medium text-foreground">
							One System, Any Starting Point
						</h3>
						<p class="mt-3 max-w-2xl text-base/normal text-muted-foreground">
							Whether you already run a revenue system or need one process automated somewhere in
							the business, I start with what you have and build from there.
						</p>
					</div>

					<div class="border-t">
						<BeforeAfterSlider />
					</div>
				</div>

				<div
					use:reveal={{ delay: 80 }}
					use:playOnView={{ class: 'feat-play', enterDelay: 680 }}
					class="feat-card rounded-xl bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<div
						class="feat-icon-badge flex size-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-5"
						>
							<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
							<path d="M8 12h.01" />
							<path d="M12 12h.01" />
							<path d="M16 12h.01" />
						</svg>
					</div>
					<h3 class="mt-4 font-heading text-lg font-medium text-foreground">Straight Answers</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Steady updates while it's being built and a plain warning when a fix you want would
						break something else.
					</p>
				</div>

				<div
					use:reveal={{ delay: 160 }}
					use:playOnView={{ class: 'feat-play', enterDelay: 760 }}
					class="feat-card rounded-xl bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<div
						class="feat-icon-badge flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 ring-1 ring-orange-500/20 dark:text-orange-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-5"
						>
							<path
								d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
							/>
							<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
							<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
						</svg>
					</div>
					<h3 class="mt-4 font-heading text-lg font-medium text-foreground">
						Start With One Workflow
					</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						The first build solves one problem. Everything after it builds on the same foundation.
					</p>
				</div>

				<div
					use:reveal={{ delay: 240 }}
					use:playOnView={{ class: 'feat-play', enterDelay: 840 }}
					class="feat-card rounded-xl bg-foreground/5 p-6 text-card-foreground opacity-0 dark:bg-muted/80"
				>
					<div
						class="feat-icon-badge flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-5"
						>
							<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
							<path d="M14 2v4a2 2 0 0 0 2 2h4" />
							<path d="M10 13H8" />
							<path d="M16 17H8" />
							<path d="M16 13h-2" />
						</svg>
					</div>
					<h3 class="mt-4 font-heading text-lg font-medium text-foreground">
						Documented and Handed Over
					</h3>
					<p class="mt-3 text-base/normal text-muted-foreground">
						Documentation, walkthroughs and a clean handover, so the next person to touch the system
						isn't working from guesswork.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes feat-icon-pop {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	.feat-card:global(.feat-play) .feat-icon-badge {
		animation: feat-icon-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@media (prefers-reduced-motion: reduce) {
		.feat-icon-badge {
			animation: none !important;
		}
	}
</style>
