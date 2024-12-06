<script>
	import '../app.css';
	import { afterNavigate } from "$app/navigation";
	import Navbar from '../lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

  	afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  	});

	let { children } = $props();
</script>


<Navbar />
{@render children()}
<Footer />
