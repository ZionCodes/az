<script>
	import SvelteSeo from "svelte-seo";
	import Cover from '$lib/images/AutomationZion-cover.png'
	import About from "$lib/About.svelte";

</script>

<SvelteSeo
  title='About | Zion Gonet — Automation Engineer'
  description="Zion Gonet is an automation engineer who designs and builds systems that eliminate manual work, connect tools, and help businesses scale without adding headcount."
  canonical="https://www.automationzion.com/about"
  openGraph={{
    title: `About | Zion Gonet — Automation Engineer`,
    description: `Zion Gonet is an automation engineer who designs and builds systems that eliminate manual work, connect tools, and help businesses scale without adding headcount.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@AutomationZion",
    title: `About | Zion Gonet — Automation Engineer`,
    description: `Zion Gonet is an automation engineer who designs and builds systems that eliminate manual work, connect tools, and help businesses scale without adding headcount.`,
    image: `${Cover}`,
  }}
/>


<About />




