<script>
	import Cover from '$lib/images/AutomationZion-cover.png'
	import SvelteSeo from "svelte-seo";
	import CaseStudies from "$lib/CaseStudies.svelte";
    import Hero from "$lib/Hero.svelte";
    import Clients from "$lib/Clients.svelte";
	import Newsletter from "$lib/Newsletter.svelte";
	import Services from "$lib/Services.svelte";
	import Tools from "$lib/Tools.svelte";
	import ExampleTimeline from '$lib/ExampleTimeline.svelte';
	import WobbleCard from '$lib/WobbleCard.svelte';
	import MVP from '$lib/MVP.svelte';
	let { data } = $props();

</script>

<SvelteSeo
  title='Automation Zion | Systems & AI Automation Specialist'
  description="I create scalable systems, automations, and AI agents that help your business run smoothly and grow efficiently."
  canonical="https://www.automationzion.com/"
  openGraph={{
    title: `Automation Zion | Systems & AI Automation Specialist`,
    description:`I create scalable systems, automations, and AI agents that help your business run smoothly and grow efficiently.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion | Systems & AI Automation Specialist`,
    description:`I create scalable systems, automations, and AI agents that help your business run smoothly and grow efficiently.`,
    image: `${Cover}`,
  }}
/>


<Hero />
<Clients />
<ExampleTimeline />
<Services />
<Tools />
<MVP />
<CaseStudies data={data.records}/>
<Newsletter />