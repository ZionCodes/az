<script>
	import { reveal } from '#lib/actions/reveal.js';
	import { playOnView } from '#lib/actions/playOnView.js';
	import ToolLogo from '#lib/components/ToolLogo.svelte';
</script>

<section class="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto mb-12 max-w-2xl space-y-4 text-center opacity-0" use:reveal>
			<p
				class="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase"
			>
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
				What I Do
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
			</p>
			<h2 class="font-heading text-3xl font-semibold lg:text-4xl">
				The Systems Behind Process and Revenue
			</h2>
			<p class="text-muted-foreground">
				CRM, data, integrations, AI and outbound, scoped and built by one engineer.
			</p>
		</div>
		<div class="relative">
			<div class="relative z-10 grid grid-cols-6 gap-3">
				<div
					use:reveal={{ delay: 0 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 600 }}
					class="svc-card relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm lg:col-span-2"
				>
					<div class="flex h-full flex-col justify-center px-6 py-6 text-center">
						<h3 class="font-heading text-3xl font-semibold text-balance">
							Built Around How Your Team Works
						</h3>
						<p class="mt-4 text-sm text-muted-foreground">
							Every build starts from how your team already sells, hands off and reports.
						</p>
					</div>
				</div>

				<div
					use:reveal={{ delay: 80 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 680 }}
					class="svc-card relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm sm:col-span-3 lg:col-span-2"
				>
					<div class="px-6 pt-6">
						<div
							class="svc-record mx-auto w-full max-w-60 rounded-lg border bg-background p-3 text-left text-xs shadow-sm"
							aria-hidden="true"
						>
							<div class="flex items-center justify-between">
								<span class="font-medium text-foreground">Acme Inc.</span>
								<span class="flex items-center gap-1">
									<ToolLogo name="hubspot" class="size-3.5" />
									<ToolLogo name="salesforce" class="size-4" />
								</span>
							</div>
							<dl class="mt-2 space-y-1.5 text-muted-foreground">
								<div class="svc-field flex justify-between">
									<dt>Lifecycle stage</dt>
									<dd class="text-foreground">SQL</dd>
								</div>
								<div class="svc-field flex justify-between">
									<dt>Owner</dt>
									<dd class="text-foreground">Assigned</dd>
								</div>
								<div class="svc-field flex justify-between">
									<dt>Validation</dt>
									<dd class="flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2.5"
											class="size-3"><path d="M20 6 9 17l-5-5" /></svg
										>Passed
									</dd>
								</div>
							</dl>
						</div>
						<div class="relative z-10 mt-6 space-y-2 text-center">
							<h3 class="font-heading text-lg font-medium transition">CRM Setup & Admin</h3>
							<p class="text-sm text-muted-foreground">
								Salesforce and HubSpot set up around how you sell. Records your reps don't
								second-guess, with validation and permissions kept current.
							</p>
						</div>
					</div>
				</div>

				<div
					use:reveal={{ delay: 160 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 760 }}
					class="svc-card relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm sm:col-span-3 lg:col-span-2"
				>
					<div class="px-6 pt-6">
						<div class="pt-6 lg:px-6">
							<svg
								class="w-full dark:text-muted-foreground"
								viewBox="0 0 386 123"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="386" height="123" rx="10" />
								<g clip-path="url(#clip0_svc_106p)">
									<circle class="text-violet-500" cx="29" cy="29" r="15" fill="currentColor" />
									<path d="M23 33h3v-9h-3zM27.5 33h3v-13h-3zM32 33h3v-6h-3z" fill="white" />
									<text x="55" y="34" font-size="15" font-weight="600" fill="currentColor">
										Reporting
									</text>
									<circle
										class="svc-live-dot text-emerald-500"
										cx="300"
										cy="30"
										r="4"
										fill="currentColor"
									/>
									<text
										x="330"
										y="34"
										text-anchor="end"
										font-size="12"
										fill="currentColor"
										opacity="0.6"
									>
										Live
									</text>
								</g>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
									fill="url(#paint0_linear_svc_106p)"
								/>
								<path
									class="svc-chart-line text-violet-500"
									d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
									stroke="currentColor"
									stroke-width="3"
									pathLength="1000"
								/>
								<defs>
									<linearGradient
										id="paint0_linear_svc_106p"
										x1="3"
										y1="60"
										x2="3"
										y2="123"
										gradientUnits="userSpaceOnUse"
									>
										<stop class="text-violet-500/15" stop-color="currentColor" />
										<stop
											class="text-transparent"
											offset="1"
											stop-color="currentColor"
											stop-opacity="0.103775"
										/>
									</linearGradient>
									<clip-path id="clip0_svc_106p">
										<rect width="358" height="30" fill="white" transform="translate(14 14)" />
									</clip-path>
								</defs>
							</svg>
						</div>
						<div class="relative z-10 mt-14 space-y-2 text-center">
							<h3 class="font-heading text-lg font-medium transition">
								Data Foundation & Reporting
							</h3>
							<p class="text-sm text-muted-foreground">
								Dashboards and reporting that hold up in front of leadership, because the numbers
								underneath are right and stay monitored.
							</p>
						</div>
					</div>
				</div>

				<div
					use:reveal={{ delay: 240 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 840 }}
					class="svc-card card variant-outlined relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm lg:col-span-3"
				>
					<div class="grid px-6 pt-6 sm:grid-cols-2">
						<div class="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
							<div
								class="svc-icon-badge flex size-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 ring-1 ring-orange-500/20 dark:text-orange-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-5"
								>
									<rect width="8" height="8" x="3" y="3" rx="2" />
									<path d="M7 11v4a2 2 0 0 0 2 2h4" />
									<rect width="8" height="8" x="13" y="13" rx="2" />
								</svg>
							</div>
							<div class="space-y-2">
								<h3 class="font-heading text-lg font-medium transition">Tool Integration</h3>
								<p class="text-sm text-muted-foreground">
									Every tool your team runs on, connected and kept in sync, so nothing gets
									re-entered by hand or drifts out of date.
								</p>
							</div>
						</div>
						<div
							class="relative mt-6 -mr-6 -mb-6 h-fit rounded-tl-(--radius) border-t border-l p-6 py-6 sm:ml-6"
						>
							<div class="absolute top-2 left-3 flex gap-1">
								<span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"
								></span>
								<span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"
								></span>
								<span class="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"
								></span>
							</div>
							<div class="relative w-full">
								{#each [{ t: 'hubspot', x: 19, y: 24 }, { t: 'salesforce', x: 81, y: 24 }, { t: 'clay', x: 19, y: 76 }, { t: 'n8n', x: 81, y: 76 }, { t: 'instantly', x: 50, y: 13 }] as node (node.t)}
									<span
										class="absolute z-10 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-sm"
										style="left: {node.x}%; top: {node.y}%;"
									>
										<ToolLogo name={node.t} class="size-5" />
									</span>
								{/each}
								<svg
									class="w-full"
									viewBox="0 0 366 231"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="183"
										y1="115"
										x2="70"
										y2="55"
										stroke="currentColor"
										stroke-width="1.5"
										class="svc-flow-line text-border"
									/>
									<line
										x1="183"
										y1="115"
										x2="296"
										y2="55"
										stroke="currentColor"
										stroke-width="1.5"
										class="svc-flow-line text-border"
									/>
									<line
										x1="183"
										y1="115"
										x2="70"
										y2="176"
										stroke="currentColor"
										stroke-width="1.5"
										class="svc-flow-line text-border"
									/>
									<line
										x1="183"
										y1="115"
										x2="296"
										y2="176"
										stroke="currentColor"
										stroke-width="1.5"
										class="svc-flow-line text-border"
									/>
									<line
										x1="183"
										y1="115"
										x2="183"
										y2="30"
										stroke="currentColor"
										stroke-width="1.5"
										class="svc-flow-line text-border"
									/>

									<circle cx="127" cy="85" r="3" class="text-orange-500" fill="currentColor" />
									<circle cx="240" cy="85" r="3" class="text-orange-500" fill="currentColor" />
									<circle cx="127" cy="146" r="3" class="text-orange-500" fill="currentColor" />
									<circle cx="240" cy="146" r="3" class="text-orange-500" fill="currentColor" />
									<circle cx="183" cy="72" r="3" class="text-orange-500" fill="currentColor" />

									<circle
										cx="183"
										cy="115"
										r="30"
										class="svc-hub-ping text-orange-500"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									/>
									<g class="svc-hub">
										<circle cx="183" cy="115" r="30" class="text-orange-500" fill="currentColor" />
										<path
											d="M183 100v30M168 115h30"
											class="text-white"
											stroke="currentColor"
											stroke-width="3"
											stroke-linecap="round"
										/>
									</g>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div
					use:reveal={{ delay: 320 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 920 }}
					class="svc-card card variant-outlined relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm lg:col-span-3"
				>
					<div class="grid h-full px-6 pt-6 sm:grid-cols-2">
						<div class="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
							<div
								class="svc-icon-badge flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-5"
								>
									<path d="M12 8V4H8" />
									<rect width="16" height="12" x="4" y="8" rx="2" />
									<path d="M2 14h2" />
									<path d="M20 14h2" />
									<path d="M15 13v2" />
									<path d="M9 13v2" />
								</svg>
							</div>
							<div class="space-y-2">
								<h3 class="font-heading text-lg font-medium transition">AI Systems & Workflows</h3>
								<p class="text-sm text-muted-foreground">
									I find where AI moves a number the business already tracks, then build and ship
									the agents and automations that do it.
								</p>
							</div>
						</div>
						<div class="relative mt-8 flex items-center sm:mt-0 sm:pl-6">
							<ol class="svc-run relative w-full space-y-4" aria-label="Example AI workflow run">
								{#each [{ tool: 'n8n', title: 'Call transcript received', note: 'Trigger', state: 'done' }, { tool: 'claude', title: 'Summary and next steps written', note: 'AI step', state: 'done' }, { tool: 'hubspot', title: 'Deal note added, follow-up drafted', note: 'Waiting for rep approval', state: 'review' }] as step (step.title)}
									<li class="svc-pill-wrap relative flex items-start gap-3">
										<span
											class="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-background shadow-sm"
										>
											<ToolLogo name={step.tool} class="size-4" />
										</span>
										<span class="min-w-0 pt-0.5">
											<span class="block text-sm font-medium text-foreground">{step.title}</span>
											<span
												class={[
													'mt-0.5 flex items-center gap-1.5 text-xs',
													step.state === 'review'
														? 'text-amber-700 dark:text-amber-400'
														: 'text-muted-foreground'
												]}
											>
												<span
													class={[
														'size-1.5 rounded-full',
														step.state === 'review' ? 'svc-wait-dot bg-amber-500' : 'bg-emerald-500'
													]}
												></span>
												{step.note}
											</span>
										</span>
									</li>
								{/each}
							</ol>
						</div>
					</div>
				</div>

				<div
					use:reveal={{ delay: 400 }}
					use:playOnView={{ class: 'svc-play', enterDelay: 1000 }}
					class="svc-card card variant-outlined relative col-span-full flex flex-col gap-6 overflow-hidden rounded-xl border bg-card py-6 text-card-foreground opacity-0 shadow-sm"
				>
					<div class="grid px-6 pt-6 sm:grid-cols-2">
						<div class="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
							<div
								class="svc-icon-badge flex size-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 dark:text-rose-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="size-5"
								>
									<path d="M22 2 11 13" />
									<path d="M22 2 15 22l-4-9-9-4Z" />
								</svg>
							</div>
							<div class="space-y-2">
								<h3 class="font-heading text-lg font-medium transition">Outbound Engineering</h3>
								<p class="text-sm text-muted-foreground">
									Signal-based prospecting, enrichment waterfalls and deliverability infrastructure,
									judged by the pipeline and revenue they bring in.
								</p>
							</div>
						</div>
						<div class="relative mt-8 flex items-center sm:mt-0 sm:pl-6">
							<ol
								class="svc-chain relative grid w-full gap-3 lg:grid-cols-3"
								aria-label="Example outbound pipeline"
							>
								{#each [{ tool: 'clay', title: 'Signal found, contact enriched', note: 'Hiring for SDRs' }, { tool: 'instantly', title: 'Sent from warmed domains', note: 'DMARC passing' }, { tool: 'hubspot', title: 'Positive reply routed', note: 'Owner notified' }] as step, i (step.title)}
									<li
										class="svc-pill-wrap relative flex items-start gap-3 rounded-lg border bg-background p-3 shadow-sm lg:flex-col lg:gap-2"
									>
										<span
											class="flex size-8 shrink-0 items-center justify-center rounded-full border bg-card"
										>
											<ToolLogo name={step.tool} class="size-4" />
										</span>
										<span class="min-w-0">
											<span class="block text-sm leading-snug font-medium text-foreground"
												>{step.title}</span
											>
											<span class="mt-0.5 block text-xs text-muted-foreground">{step.note}</span>
										</span>
										{#if i < 2}
											<span
												aria-hidden="true"
												class="absolute top-1/2 -right-3 z-10 hidden size-3 -translate-y-1/2 text-muted-foreground lg:block"
											>
												<svg
													viewBox="0 0 12 12"
													fill="none"
													stroke="currentColor"
													stroke-width="1.5"><path d="m4 2 4 4-4 4" /></svg
												>
											</span>
										{/if}
									</li>
								{/each}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* every flourish below is triggered by the `.svc-play` class, toggled by
	   the playOnView action: it fires once automatically when the card
	   scrolls into view (so touch visitors see it unprompted), and replays
	   on every `mouseenter` on desktop. Each animation starts and ends at
	   the element's normal resting look, so nothing is ever stuck mid-pose
	   and nothing depends on an active `:hover` state to stay visible. */

	/* icon badge: a springy lift + rotate, shared by every card that has
	   one (CRM, Tool Integration, AI Systems, Outbound) */
	@keyframes svc-icon-pop {
		0% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
	}
	.svc-card:global(.svc-play) .svc-icon-badge {
		animation: svc-icon-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	/* card 2: the record's fields fill in one after another */
	@keyframes svc-field-in {
		from {
			opacity: 0;
			transform: translateX(-6px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	.svc-card:global(.svc-play) .svc-field {
		animation: svc-field-in 0.35s ease-out backwards;
	}
	.svc-card:global(.svc-play) .svc-field:nth-child(2) {
		animation-delay: 120ms;
	}
	.svc-card:global(.svc-play) .svc-field:nth-child(3) {
		animation-delay: 240ms;
	}

	/* card 3: the live indicator pulses continuously, like a real status
	   dot -- not gated behind the play trigger, since that's how live
	   indicators actually behave; the chart line draws itself in and
	   stays drawn, since it's real content, not a decoration */
	.svc-live-dot {
		transform-box: fill-box;
		transform-origin: center;
		animation: svc-live-pulse 2s ease-out infinite;
	}
	@keyframes svc-live-pulse {
		0% {
			opacity: 0.9;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 0.9;
		}
	}
	.svc-chart-line {
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
	}
	@keyframes svc-chart-draw {
		to {
			stroke-dashoffset: 0;
		}
	}
	.svc-card:global(.svc-play) .svc-chart-line {
		animation: svc-chart-draw 1.1s ease forwards;
	}

	/* card 4: connector lines flow like a signal moving toward the hub for a
	   brief burst, the hub pops with a spring, and a ring pings outward from
	   it a couple of times, then everything settles back to resting */
	.svc-flow-line {
		stroke-dasharray: 6 6;
	}
	@keyframes svc-flow-dash {
		to {
			stroke-dashoffset: -24;
		}
	}
	.svc-card:global(.svc-play) .svc-flow-line {
		animation: svc-flow-dash 0.5s linear 4;
	}
	@keyframes svc-hub-pop {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.12);
		}
		100% {
			transform: scale(1);
		}
	}
	.svc-hub {
		transform-box: fill-box;
		transform-origin: center;
	}
	.svc-card:global(.svc-play) .svc-hub {
		animation: svc-hub-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.svc-hub-ping {
		transform-box: fill-box;
		transform-origin: center;
		opacity: 0;
	}
	@keyframes svc-hub-ping {
		0% {
			transform: scale(0.9);
			opacity: 0.6;
		}
		75%,
		100% {
			transform: scale(1.8);
			opacity: 0;
		}
	}
	.svc-card:global(.svc-play) .svc-hub-ping {
		animation: svc-hub-ping 1.4s cubic-bezier(0, 0, 0.2, 1) 2;
	}

	.svc-run::before {
		content: '';
		position: absolute;
		top: 1rem;
		bottom: 1rem;
		left: 1rem;
		width: 1px;
		background: var(--color-border);
	}
	.svc-wait-dot {
		animation: svc-live-pulse 2s ease-out infinite;
	}

	/* cards 5 & 6: the status pills are always fully shown at rest -- the
	   play trigger replays their arrival as a staggered cascade, landing
	   back on the exact same resting state every time */
	@keyframes svc-pill-cascade {
		from {
			opacity: 0;
			transform: translateY(10px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
	.svc-pill-wrap {
		opacity: 1;
	}
	.svc-card:global(.svc-play) .svc-pill-wrap {
		animation: svc-pill-cascade 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
	}
	.svc-card:global(.svc-play) .svc-pill-wrap:nth-child(1) {
		animation-delay: 0ms;
	}
	.svc-card:global(.svc-play) .svc-pill-wrap:nth-child(2) {
		animation-delay: 150ms;
	}
	.svc-card:global(.svc-play) .svc-pill-wrap:nth-child(3) {
		animation-delay: 300ms;
	}

	@media (prefers-reduced-motion: reduce) {
		.svc-icon-badge,
		.svc-field,
		.svc-chart-line,
		.svc-flow-line,
		.svc-hub,
		.svc-hub-ping,
		.svc-pill-wrap,
		.svc-live-dot,
		.svc-wait-dot {
			animation: none !important;
		}
		.svc-chart-line {
			stroke-dashoffset: 0 !important;
		}
		.svc-hub-ping {
			opacity: 0 !important;
		}
		.svc-pill-wrap {
			opacity: 1 !important;
			transform: none !important;
		}
	}
</style>
