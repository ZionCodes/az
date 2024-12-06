<script>
	import SvelteSeo from "svelte-seo";
	import Cover from '$lib/images/AutomationZion-cover.png'
	import About from "$lib/About.svelte";
	import Certifications from "$lib/Certifications.svelte";
	import Contact from "$lib/Contact.svelte";

</script>

<SvelteSeo
  title='About Automation Zion | Your Workflow Automation Partner'
  description="Discover how Automation Zion helps businesses optimize operations, save time, and achieve growth with tailored workflow automation solutions."
  openGraph={{
    title: `About Automation Zion | Your Workflow Automation Partner`,
    description:`Discover how Automation Zion helps businesses optimize operations, save time, and achieve growth with tailored workflow automation solutions.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `About Automation Zion | Your Workflow Automation Partner`,
    description:`Discover how Automation Zion helps businesses optimize operations, save time, and achieve growth with tailored workflow automation solutions.`,
    image: `${Cover}`,
  }}
/>


<About />
<Certifications />
<Contact />