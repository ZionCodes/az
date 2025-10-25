<script>
	import '../app.css';
	import { afterNavigate } from "$app/navigation";
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import SmoothCursor from '$lib/SmoothCursor.svelte';

  	afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  	});

	let { children } = $props();
</script>

<SmoothCursor />
<Navbar />
{@render children()}
<Footer />
