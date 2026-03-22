<script>
	import Cover from '$lib/images/AutomationZion-cover.png'
	import SvelteSeo from "svelte-seo";
	import CaseStudies from "$lib/CaseStudies.svelte";
    import Hero from "$lib/Hero.svelte";
    import Clients from "$lib/Clients.svelte";
	import Services from "$lib/Services.svelte";
	import Tools from "$lib/Tools.svelte";
	import Process from "$lib/Process.svelte";
	import CTA from "$lib/CTA.svelte";
	let { data } = $props();

</script>

<SvelteSeo
  title='Zion Gonet | Automation Engineer'
  description="I design and build automation systems that eliminate manual work, connect your tools, and let your business scale without adding headcount."
  canonical="https://www.automationzion.com/"
  openGraph={{
    title: `Zion Gonet | Automation Engineer`,
    description: `I design and build automation systems that eliminate manual work, connect your tools, and let your business scale without adding headcount.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@AutomationZion",
    title: `Zion Gonet | Automation Engineer`,
    description: `I design and build automation systems that eliminate manual work, connect your tools, and let your business scale without adding headcount.`,
    image: `${Cover}`,
  }}
/>


<Hero />
<Clients />
<Services />
<CaseStudies data={data.records}/>
<Tools />
<Process />
<CTA />