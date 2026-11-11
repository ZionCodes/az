<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { trackEvent } from '#lib/analytics.js';

	let { location = 'call_to_action' } = $props();
</script>

<section class="@container py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="text-center opacity-0" use:reveal>
			<span
				class="cta-status mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
			>
				<span class="relative flex size-2">
					<span
						class="cta-status-ping absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75"
					></span>
					<span class="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
				</span>
				Currently available
			</span>
			<h2 class="font-heading text-4xl font-medium text-balance">
				Open to Full-Time Roles & Client Work
			</h2>
			<p class="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
				Looking for a GTM Systems / AI Automation Engineer, full-time, part-time, or contract? Let's
				talk.
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-3">
				<a
					href="mailto:ziongonet@gmail.com"
					onclick={() => trackEvent('contact_click', { location })}
					class="hover-smile group inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary py-1 pr-1.5 pl-6 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90"
				>
					<span>Get in touch</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-4 opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/zion-gonet/"
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow-xs transition-all hover:bg-secondary/80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="size-4 text-[#0A66C2] transition-transform duration-150 ease-out group-hover:scale-110"
						fill="currentColor"
					>
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					Connect on LinkedIn
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-status-ping {
		animation: cta-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
	@keyframes cta-ping {
		0% {
			transform: scale(1);
			opacity: 0.75;
		}
		75%,
		100% {
			transform: scale(2.2);
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta-status-ping {
			animation: none !important;
			opacity: 0 !important;
		}
	}
</style>
