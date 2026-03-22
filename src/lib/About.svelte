<script lang="ts">
  import { inview } from 'svelte-inview';
  import { cubicOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import automationzion from '$lib/images/automationzion profile.webp?enhanced';

  let isInView = false;
  const options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => {
    isInView = detail.inView;
  };
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div
  class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
  use:inview={options}
  on:inview_change={handleChange}
>
  {#if isInView}
    <div
      class="flex justify-center"
      transition:fly={{ y: 40, duration: 500, delay: 0, easing: cubicOut }}
    >
      <div class="max-w-4xl w-full">
        <div class="flex flex-col sm:flex-row sm:items-stretch gap-6">

          <!-- Image -->
          <div class="relative mx-auto rounded-xl overflow-hidden w-3/4 sm:w-1/2 aspect-square sm:aspect-auto sm:h-auto">
            <enhanced:img
              src={automationzion}
              alt="Zion Gonet — Automation Engineer"
              sizes="(min-width: 640px) 50vw, 75vw"
              fetchpriority="high"
              class="transition-transform duration-500 ease-in-out absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>

          <!-- Text -->
          <div class="w-full sm:w-1/2 flex flex-col justify-center gap-4">

            <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] flex items-center gap-2">
              <span class="inline-block w-8 h-px bg-[#ff0]"></span>
              About Me
            </p>

            <h2 class="text-white font-semibold text-2xl md:text-3xl md:leading-tight">
              I build systems.<br>Not just workflows.
            </h2>

            <p class="text-base leading-relaxed text-neutral-400">
              I'm Zion Gonet, a generalist and automation engineer who turns messy, manual processes into reliable systems. With experience across automation tools, APIs, CRMs, and AI agents, I build end-to-end solutions that eliminate repetitive work and let businesses scale without adding headcount.
            </p>

            <p class="text-base leading-relaxed text-neutral-400">
              I've worked inside agencies and directly with clients which means I understand both the technical side and the business problem behind every build.
            </p>

            <p class="text-base leading-relaxed text-neutral-400">
              Outside of work, I enjoy the outdoors and I'm an avid reader constantly exploring new ideas, technologies and the principles and laws that govern our lives.
            </p>

            <div class="pt-2">
              <a
                href="https://cal.com/automationzion/intro-call"
                target="_blank"
                class="inline-flex items-center gap-x-2 py-3 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Book a Free Call
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  {/if}
</div>