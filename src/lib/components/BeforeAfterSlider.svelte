<script>
	import { Spring } from 'svelte/motion';
	import ToolLogo from '#lib/components/ToolLogo.svelte';

	// the same chores on both sides: the manual step on the light side, its
	// automated version on the dark side
	const chores = [
		{
			before: 'Form entry retyped into the CRM',
			after: 'Synced the moment it is submitted',
			manual: 'typing',
			flow: { from: 'form', to: 'hubspot' }
		},
		{
			before: 'Payment matched to the deal in a spreadsheet',
			after: 'Matched and logged against the deal',
			manual: 'sheet',
			flow: { from: 'stripe', to: 'hubspot' }
		},
		{
			before: 'Status chased in Slack every Friday',
			after: 'Update posted to the channel on its own',
			manual: 'chat',
			flow: { from: 'n8n', to: 'slack' }
		}
	];

	// the automated diagram: three sources feeding one hub, two destinations out
	const sources = [
		{ id: 'form', y: 25 },
		{ id: 'stripe', y: 50 },
		{ id: 'n8n', y: 75 }
	];
	const outputs = [
		{ id: 'hubspot', y: 35 },
		{ id: 'slack', y: 65 }
	];

	// the divider rests in the middle, so both sides are readable at a glance
	const resting = 50;
	const position = new Spring(resting, { stiffness: 0.15, damping: 0.8 });

	let box = $state();
	let dragging = $state(false);

	function setFromPointer(e) {
		if (!box) return;
		const rect = box.getBoundingClientRect();
		position.set(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
	}

	function onPointerDown(e) {
		dragging = true;
		box.setPointerCapture?.(e.pointerId);
		setFromPointer(e);
	}

	function onPointerMove(e) {
		// follow the pointer on hover with a mouse, or while dragging on touch
		if (e.pointerType === 'mouse' || dragging) setFromPointer(e);
	}

	function onPointerUp() {
		dragging = false;
	}

	function onPointerLeave() {
		if (!dragging) position.set(resting);
	}

	function onKeydown(e) {
		const step = e.shiftKey ? 20 : 5;
		if (e.key === 'ArrowLeft') position.set(Math.max(0, position.target - step));
		else if (e.key === 'ArrowRight') position.set(Math.min(100, position.target + step));
		else if (e.key === 'Home') position.set(0);
		else if (e.key === 'End') position.set(100);
		else return;
		e.preventDefault();
	}

	// a short sweep the first time it scrolls into view, so visitors see that
	// the divider moves before they touch it
	$effect(() => {
		if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				observer.disconnect();
				position.set(78);
				setTimeout(() => position.set(22), 600);
				setTimeout(() => position.set(resting), 1200);
			},
			{ threshold: 0.6 }
		);
		observer.observe(box);
		return () => observer.disconnect();
	});
</script>

<!-- both sides keep their own colours in either site theme, like the light
     and dark screenshots this panel replaces -->
<!-- one large illustration per side: a cluttered manual desk on the light
     side, a running automated flow on the dark side -->
{#snippet manualArt()}
	<div class="relative h-full w-full" aria-hidden="true">
		<div
			class="absolute top-[14%] left-[6%] w-[74%] -rotate-3 overflow-hidden rounded-lg border border-neutral-300 bg-white shadow-md"
		>
			<div class="flex items-center gap-1 border-b border-neutral-200 bg-neutral-100 px-2 py-1">
				<span class="size-1.5 rounded-full bg-neutral-300"></span>
				<span class="size-1.5 rounded-full bg-neutral-300"></span>
				<span class="size-1.5 rounded-full bg-neutral-300"></span>
				<span class="ml-1 truncate font-mono text-[9px] text-neutral-600">deals_FINAL_v3.xlsx</span>
			</div>
			<div class="grid grid-cols-4 gap-px bg-neutral-200">
				{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as c (c)}
					<span
						class={[
							'flex h-4 items-center justify-center text-[8px] sm:h-5',
							c === 6 ? 'cell-flag bg-amber-200 font-semibold text-amber-800' : 'bg-white'
						]}>{c === 6 ? '?' : ''}</span
					>
				{/each}
			</div>
		</div>
		<div
			class="absolute top-[46%] right-[4%] w-[66%] rotate-2 rounded-lg border border-neutral-300 bg-white p-2 shadow-md"
		>
			<p class="text-[9px] font-medium text-neutral-600">New lead</p>
			<p class="mt-1 text-[8px] text-neutral-600">Company</p>
			<div
				class="mt-0.5 flex h-5 items-center rounded border border-neutral-300 px-1.5 font-mono text-[10px] text-neutral-700"
			>
				Acme In<span class="caret ml-px h-3 w-px bg-neutral-800"></span>
			</div>
		</div>
		<div class="absolute bottom-[6%] left-[6%] flex max-w-[80%] flex-col items-start gap-0.5">
			<span
				class="rounded-lg rounded-bl-sm bg-neutral-200 px-2 py-1 text-[10px] leading-tight text-neutral-700"
				>Any update on this?</span
			>
			<span class="text-[9px] text-neutral-600">Fri 4:52 pm</span>
		</div>
		<svg
			viewBox="0 0 24 24"
			class="cursor-run absolute top-[30%] left-[40%] size-4 drop-shadow"
			fill="#111"
			stroke="#fff"
			stroke-width="1.5"><path d="M5 3l14 8-6 2-3 6Z" /></svg
		>
	</div>
{/snippet}

{#snippet autoArt()}
	<div class="relative h-full w-full" aria-hidden="true">
		<svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
			{#each sources as src, i (src.id)}
				<line x1="16" y1={src.y} x2="52" y2="50" class="wire" />
				<line
					x1="16"
					y1={src.y}
					x2="52"
					y2="50"
					pathLength="100"
					class="wire-pulse"
					style="animation-delay: {i * 0.45}s;"
				/>
			{/each}
			{#each outputs as out, i (out.id)}
				<line x1="52" y1="50" x2="86" y2={out.y} class="wire" />
				<line
					x1="52"
					y1="50"
					x2="86"
					y2={out.y}
					pathLength="100"
					class="wire-pulse"
					style="animation-delay: {0.9 + i * 0.45}s;"
				/>
			{/each}
		</svg>
		{#each sources as src (src.id)}
			<span
				class="absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 bg-neutral-900 sm:size-10"
				style="left: 16%; top: {src.y}%;"
			>
				{#if src.id === 'form'}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.75"
						class="size-4 text-neutral-300 sm:size-5"
						><rect x="4" y="3" width="16" height="18" rx="2" /><path
							d="M8 8h8M8 12h8M8 16h5"
						/></svg
					>
				{:else}
					<ToolLogo name={src.id} class="size-4 sm:size-5" />
				{/if}
			</span>
		{/each}
		<span
			class="hub absolute flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-neutral-950 sm:size-12"
			style="left: 52%; top: 50%;"
		>
			<svg viewBox="0 0 24 24" class="size-5 sm:size-6"
				><path d="M14.5 2 5 13.5h5.2L9 22l10-12h-5.6L14.5 2Z" fill="currentColor" /></svg
			>
		</span>
		{#each outputs as out (out.id)}
			<span
				class="absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 bg-neutral-900 sm:size-10"
				style="left: 86%; top: {out.y}%;"
			>
				<ToolLogo
					name={out.id}
					class={out.id === 'slack' ? 'size-4 text-white! sm:size-5' : 'size-4 sm:size-5'}
				/>
			</span>
		{/each}
	</div>
{/snippet}

{#snippet rows(kind)}
	<div class="flex h-full flex-col justify-center gap-3 pt-8">
		{#each chores as chore (chore.before)}
			<div
				class={[
					'flex h-20 items-center gap-2.5 rounded-xl px-3 text-xs leading-snug sm:h-16 sm:px-4 sm:text-sm',
					kind === 'before'
						? 'border border-dashed border-neutral-300 bg-neutral-50 text-neutral-600'
						: 'flex-row-reverse border border-white/10 bg-white/5 text-right text-white'
				]}
			>
				<span
					class={[
						'flex size-6 shrink-0 items-center justify-center rounded-full',
						kind === 'before' ? 'bg-red-500/10 text-red-600' : 'bg-emerald-400/15 text-emerald-400'
					]}
				>
					{#if kind === 'before'}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							class="size-3.5"
							aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg
						>
					{:else}
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-3.5"
							aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg
						>
					{/if}
				</span>
				<span class={kind === 'before' ? 'line-through decoration-red-500/40' : ''}
					>{kind === 'before' ? chore.before : chore.after}</span
				>
			</div>
		{/each}
	</div>
{/snippet}

<!-- both sides use the same two columns, so everything lines up across the
     divider, and each side carries only its own label -->
{#snippet layer(kind)}
	<div
		class={[
			'absolute inset-0 grid grid-cols-2 gap-6 p-4 sm:gap-10 sm:px-10',
			kind === 'before' ? 'bg-white' : 'bg-neutral-950'
		]}
	>
		{#if kind === 'before'}
			<div class="relative">
				<span
					class="absolute top-0 left-0 rounded-full border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-600"
					>By hand</span
				>
				{@render rows('before')}
			</div>
			{@render manualArt()}
		{:else}
			{@render autoArt()}
			<div class="relative">
				<span
					class="absolute top-0 right-0 rounded-full border border-white/15 px-2.5 py-1 text-xs font-medium text-emerald-400"
					>Automated</span
				>
				{@render rows('after')}
			</div>
		{/if}
	</div>
{/snippet}

<div
	bind:this={box}
	class="relative h-96 w-full cursor-col-resize touch-pan-y overflow-hidden select-none sm:h-96"
	role="slider"
	tabindex="0"
	aria-label="Compare work done by hand with the automated version. Use the arrow keys to move the divider."
	aria-valuemin="0"
	aria-valuemax="100"
	aria-valuenow={Math.round(position.current)}
	aria-valuetext="{Math.round(position.current)}% showing work done by hand"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
	onpointerleave={onPointerLeave}
	onkeydown={onKeydown}
>
	{@render layer('after')}
	<div
		class="absolute inset-0"
		style="clip-path: inset(0 {100 - position.current}% 0 0);"
		aria-hidden="true"
	>
		{@render layer('before')}
	</div>

	<div
		class="pointer-events-none absolute inset-y-0 z-20 w-px bg-gradient-to-b from-transparent from-[5%] via-indigo-500 to-transparent to-[95%]"
		style="left: {position.current}%;"
		aria-hidden="true"
	>
		<span
			class="absolute top-1/2 left-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-white shadow-md"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-4 text-black"
				><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle
					cx="12"
					cy="19"
					r="1"
				/></svg
			>
		</span>
	</div>
</div>

<style>
	.caret {
		animation: caret-blink 1s steps(1) infinite;
	}
	@keyframes caret-blink {
		50% {
			opacity: 0;
		}
	}
	.cell-flag {
		animation: cell-flag 2.4s ease-in-out infinite;
	}
	@keyframes cell-flag {
		50% {
			background-color: rgb(253 230 138 / 0.45);
		}
	}
	/* the pointer drifts between the spreadsheet and the form, copying by hand */
	.cursor-run {
		animation: cursor-run 4s ease-in-out infinite;
	}
	@keyframes cursor-run {
		0%,
		100% {
			transform: translate(0, 0);
		}
		45%,
		55% {
			transform: translate(60%, 280%);
		}
	}
	.wire {
		stroke: rgb(255 255 255 / 0.18);
		stroke-width: 1.25;
		vector-effect: non-scaling-stroke;
	}
	.wire-pulse {
		stroke: #34d399;
		stroke-width: 2;
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
		stroke-dasharray: 8 92;
		stroke-dashoffset: 100;
		animation: wire-run 1.8s linear infinite;
	}
	@keyframes wire-run {
		to {
			stroke-dashoffset: 0;
		}
	}
	.hub {
		box-shadow: 0 0 0 0 rgb(52 211 153 / 0.5);
		animation: hub-glow 1.8s ease-out infinite;
	}
	@keyframes hub-glow {
		70% {
			box-shadow: 0 0 0 10px rgb(52 211 153 / 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.caret,
		.cell-flag,
		.cursor-run,
		.wire-pulse,
		.hub {
			animation: none;
		}
		.wire-pulse {
			display: none;
		}
	}
</style>
