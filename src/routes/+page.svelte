<script>
	import Cover from '$lib/images/AutomationZion-cover.png'
	import SvelteSeo from "svelte-seo";
	import Blog from "$lib/Blog.svelte";
    import Hero from "$lib/Hero.svelte";
    import Clients from "$lib/Clients.svelte";
	import Newsletter from "$lib/Newsletter.svelte";
	import Services from "$lib/Services.svelte";
	import Steps from "$lib/Steps.svelte";
	import Tools from "$lib/Tools.svelte";
	import ExampleTimeline from '$lib/ExampleTimeline.svelte';
	import WobbleCard from '$lib/WobbleCard.svelte';
	import MVP from '$lib/MVP.svelte';
	let { data } = $props();

</script>

<SvelteSeo
  title='Automation Zion | Workflow Automation Specialist'
  description="I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly."
  canonical="https://www.automationzion.com/"
  openGraph={{
    title: `Automation Zion | Workflow Automation Specialist`,
    description:`I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion | Workflow Automation Specialist`,
    description:`I create systems and workflow automations to save you time, eliminate busywork, and help your business scale effortlessly.`,
    image: `${Cover}`,
  }}
/>


<Hero />
<Clients />
<ExampleTimeline />
<Services />
<Tools />
<MVP />
<Blog data={data.records}/>
<Newsletter />