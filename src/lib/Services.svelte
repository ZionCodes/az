<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import WobbleCard from '$lib/WobbleCard.svelte';

  let isInView = false;
  const options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => {
    isInView = detail.inView;
  };
</script>

<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 my-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}

    <div class="max-w-3xl mb-10 lg:mb-14" id="services" transition:fly={{ y: 200, duration: 800, delay: 200 }}>
      <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
        <span class="inline-block w-8 h-px bg-[#ff0]"></span>
        What I Build
      </p>
      <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
        Systems that do<br>the heavy lifting
      </h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6" transition:fly={{ y: 200, duration: 800, delay: 500 }}>

      <!-- Workflow Automation -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Workflow Automation</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">End-to-end automation of repetitive business processes. From data entry to complex multi-step workflows that run 24/7 without human input.</p>
          </div>
        </a>
      </WobbleCard>

      <!-- AI Agents & Smart Automation -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">AI Agents</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">Workflows that use AI to make decisions, write content, enrich data, and handle tasks that used to require a human brain.</p>
          </div>
        </a>
      </WobbleCard>

      <!-- Backend Systems & Databases -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Database & Dashboard Systems</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">Custom Airtable and Notion databases with dashboards and interfaces so your team always knows what's happening and decisions stay data-driven.</p>
          </div>
        </a>
      </WobbleCard>

      <!-- API & App Integrations -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">API & System Integration</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">Connect your tools and systems so data flows seamlessly between them.</p>
          </div>
        </a>
      </WobbleCard>

      <!-- CRM & Sales Operations -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">CRM & Sales Operations</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">Set up and automate your CRM so leads are tracked, pipelines run cleanly, and your sales team focuses on selling.</p>
          </div>
        </a>
      </WobbleCard>

      <!-- Outbound & GTM Systems -->
      <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
        <a class="group flex gap-y-6 size-full focus:outline-none rounded-lg p-5 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-[#ff0]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <div>
            <h3 class="block font-bold text-gray-800 dark:text-white">Outbound & GTM Systems</h3>
            <p class="text-gray-600 dark:text-neutral-400 mt-1">Build data-driven outbound infrastructure using Clay for prospect enrichment, lead scoring, and automated personalized outreach at scale.</p>
          </div>
        </a>
      </WobbleCard>

    </div>
  {/if}
</div>