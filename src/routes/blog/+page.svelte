<script>
	import SvelteSeo from "svelte-seo";
	import Blog from "$lib/Blog.svelte";
	import Cover from '$lib/images/AutomationZion-cover.png'
	import Newsletter from "$lib/Newsletter.svelte";
	let { data } = $props();

</script>

<SvelteSeo
  title='Automation Zion Blog | Workflow Automation Tips'
  description="Explore tutorials, insights, and ideas on systems and workflow automation."
  canonical="https://www.automationzion.com/blog"
  openGraph={{
    title: `Automation Zion Blog | Workflow Automation Tips`,
    description:`Explore tutorials, insights, and ideas on systems and workflow automation.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Relocate for Work",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion Blog | Workflow Automation Tips`,
    description:`Explore tutorials, insights, and ideas on systems and workflow automation.`,
    image: `${Cover}`,
  }}
/>


<Blog data={data.records} />
<Newsletter />