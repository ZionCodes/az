<script>
	import { Spring } from 'svelte/motion';

	// the same chores on both layers, so dragging the handle turns each manual
	// step into its automated version in place
	const chores = [
		{ before: 'Form entry retyped into the CRM', after: 'Synced the moment it is submitted' },
		{
			before: 'Payment matched to the deal in a spreadsheet',
			after: 'Matched and logged against the deal'
		},
		{
			before: 'Status chased in Slack every Friday',
			after: 'Update posted to the channel on its own'
		}
	];

	// 0 shows the automated side in full; 100 shows the manual side in full
	const resting = 0;
	const position = new Spring(resting, { stiffness: 0.06, damping: 0.75 });

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
	// the panel moves before they touch it
	$effect(() => {
		if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				observer.disconnect();
				position.set(100, { instant: true });
				setTimeout(() => position.set(resting), 450);
			},
			{ threshold: 0.6 }
		);
		observer.observe(box);
		return () => observer.disconnect();
	});
</script>

{#snippet layer(kind)}
	<div
		class={[
			'absolute inset-0 flex flex-col justify-center gap-3 px-6 pt-10 sm:px-12',
			kind === 'before' ? 'bg-muted' : 'bg-card'
		]}
	>
		<span
			class={[
				'absolute top-4 rounded-full border bg-background/90 px-2.5 py-1 text-xs font-medium',
				kind === 'before'
					? 'left-6 text-muted-foreground sm:left-12'
					: 'right-6 text-emerald-700 sm:right-12 dark:text-emerald-400'
			]}>{kind === 'before' ? 'By hand' : 'Automated'}</span
		>
		{#each chores as chore (chore.before)}
			<div
				class={[
					'flex items-center gap-3 rounded-xl p-3.5 text-sm sm:p-4 sm:text-base',
					kind === 'before'
						? 'border border-dashed border-foreground/20 bg-background/50 text-muted-foreground'
						: 'flex-row-reverse justify-start border bg-background text-right text-foreground shadow-sm'
				]}
			>
				{#if kind === 'before'}
					<span
						class="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600 dark:text-red-400"
					>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							class="size-3.5"
							aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg
						>
					</span>
					<span class="line-through decoration-red-500/40">{chore.before}</span>
				{:else}
					<span
						class="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
					>
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
					</span>
					<span>{chore.after}</span>
				{/if}
			</div>
		{/each}
	</div>
{/snippet}

<div
	bind:this={box}
	class="relative h-80 w-full cursor-col-resize touch-pan-y overflow-hidden select-none sm:h-96"
	role="slider"
	tabindex="0"
	aria-label="Compare work done by hand with the automated version. Use the arrow keys to move the divider."
	aria-valuemin="0"
	aria-valuemax="100"
	aria-valuenow={Math.round(position.current)}
	aria-valuetext={position.current > 50
		? 'Showing work done by hand'
		: 'Showing the automated version'}
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
		class="pointer-events-none absolute inset-y-0 z-20 w-px bg-foreground/60"
		style="left: clamp(1.25rem, {position.current}%, calc(100% - 1.25rem));"
		aria-hidden="true"
	>
		<span
			class="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-4 text-foreground"><path d="m9 18-6-6 6-6M15 6l6 6-6 6" /></svg
			>
		</span>
	</div>
</div>
