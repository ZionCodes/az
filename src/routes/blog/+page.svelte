<script>
	import SvelteSeo from "svelte-seo";
	import Blog from "$lib/Blog.svelte";
	import Cover from '$lib/images/AutomationZion-cover.png'
	let { data } = $props();

</script>

<SvelteSeo
  title='Blog | Zion Gonet — Automation Engineer'
  description="Breakdowns, walkthroughs, and honest takes on automation tools, workflows, and building systems that actually work."
  canonical="https://www.automationzion.com/blog"
  openGraph={{
    title: `Blog | Zion Gonet — Automation Engineer`,
    description: `Breakdowns, walkthroughs, and honest takes on automation tools, workflows, and building systems that actually work.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@AutomationZion",
    title: `Blog | Zion Gonet — Automation Engineer`,
    description: `Breakdowns, walkthroughs, and honest takes on automation tools, workflows, and building systems that actually work.`,
    image: `${Cover}`,
  }}
/>


<Blog data={data.records} />