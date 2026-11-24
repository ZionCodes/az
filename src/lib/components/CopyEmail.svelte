<script>
	import { trackEvent } from '#lib/analytics.js';

	let { email = 'ziongonet@gmail.com', location = 'copy_email', class: className = '' } = $props();

	let copied = $state(false);
	let textEl = $state();
	let timer;

	// mailto links do nothing for visitors without a mail app set up, so the
	// address is always shown as text and can be copied in one click
	async function copy() {
		try {
			await navigator.clipboard.writeText(email);
		} catch {
			const range = document.createRange();
			range.selectNodeContents(textEl);
			const selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
		copied = true;
		trackEvent('email_copy', { location });
		clearTimeout(timer);
		timer = setTimeout(() => (copied = false), 2000);
	}
</script>

<span class={['inline-flex items-center gap-2 text-sm text-muted-foreground', className]}>
	<span bind:this={textEl} class="select-all">{email}</span>
	<button
		type="button"
		onclick={copy}
		class="inline-flex h-7 items-center gap-1 rounded-md border bg-background px-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
	>
		{#if copied}
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				class="size-3.5 text-emerald-600"
				aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg
			>
			Copied
		{:else}
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-3.5"
				aria-hidden="true"
				><rect width="14" height="14" x="8" y="8" rx="2" /><path
					d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
				/></svg
			>
			Copy
		{/if}
		<span class="sr-only">email address</span>
	</button>
	<span class="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
</span>
