<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition';
    import WobbleCard from '$lib/WobbleCard.svelte';
  
    let isInView = $state(false);
    const options = {
      rootMargin: '-50px',
      unobserveOnEnter: true,
    };
  
    const handleChange = ({ detail }) => {
      isInView = detail.inView;
    };
  
    const steps = [
      {
        num: '01',
        title: 'Audit & Discover',
        desc: 'I map your current processes, identify what is taking the most time, and pinpoint exactly where automation will have the biggest impact.'
      },
      {
        num: '02',
        title: 'Design the System',
        desc: 'I design the full workflow architecture — tools, triggers, logic, and data flows — before writing a single line or setting up a single module.'
      },
      {
        num: '03',
        title: 'Build & Test',
        desc: 'I build and test the system end-to-end, handling edge cases and errors so it runs reliably even when things do not go as expected.'
      },
      {
        num: '04',
        title: 'Handoff & Support',
        desc: 'I document everything clearly so your team can manage the system. I stay available for optimization and support as your business evolves.'
      }
    ];
  </script>
  
  <!-- svelte-ignore event_directive_deprecated -->
  <div
    class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900"
    use:inview={options}
    on:inview_change={handleChange}
  >
    {#if isInView}
  
      <div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 800, delay: 500 }}>
        <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
          <span class="inline-block w-8 h-px bg-[#ff0]"></span>
          How I Work
        </p>
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
          From problem<br>to running system
        </h2>
      </div>
  
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        transition:fly={{ y: 200, duration: 800, delay: 500 }}
      >
        {#each steps as step}
          <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-5">
            <div class="flex flex-col gap-y-4 p-5 h-full">
  
              <p class="text-xs font-mono text-[#ff0] tracking-[0.2em]">
                Step — {step.num}
              </p>
  
              <h3 class="block font-bold text-gray-800 dark:text-white">
                {step.title}
              </h3>
  
              <p class="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">
                {step.desc}
              </p>
  
            </div>
          </WobbleCard>
        {/each}
      </div>
  
    {/if}
  </div>