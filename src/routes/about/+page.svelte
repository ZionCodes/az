<script>
	import SvelteSeo from "svelte-seo";
	import Cover from '$lib/images/AutomationZion-cover.png'
	import About from "$lib/About.svelte";
	import Certifications from "$lib/Certifications.svelte";

</script>

<SvelteSeo
  title='About Automation Zion | Your Workflow Automation Partner'
  description="Discover how Automation Zion helps businesses optimize operations, save time, and achieve growth with tailored workflow automation solutions."
  canonical="https://www.automationzion.com/about"
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

<div class="flex flex-auto items-center p-4 m-8 justify-center">
  <a href="https://airtable.com/apptczz1Z37dJqKHA/pagw800Gw7i9TAPCz/form">
    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-[#ff0] shadow-sm hover:scale-110 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 rounded-full">
      Contact
    </button>
  </a>
</div>


