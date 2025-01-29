<script>
import Project from "$lib/Project.svelte";
  import Cover from '$lib/images/AutomationZion-cover.png'
import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title='Automation Zion | My Projects'
  description="Explore my portfolio of automation projects, showcasing how I create efficient systems that save time and drive growth."
  canonical="https://www.automationzion.com/projects"
  openGraph={{
    title: `Automation Zion | My Projects`,
    description:`Explore my portfolio of automation projects, showcasing how I create efficient systems that save time and drive growth.`,
    image: `${Cover}`,
    type: "website",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary",
    site: "@AutomationZion",
    title: `Automation Zion | My Projects`,
    description:`Explore my portfolio of automation projects, showcasing how I create efficient systems that save time and drive growth.`,
    image: `${Cover}`,
  }}
/>

<Project />

