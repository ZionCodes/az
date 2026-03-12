<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  let isInView = $state(false);
  const options = {
    rootMargin: '0px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => {
    isInView = detail.inView;
  };

  let { data } = $props();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}

    <div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 40, duration: 500, delay: 0, easing: cubicOut }}>
      <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
        <span class="inline-block w-8 h-px bg-[#ff0]"></span>
        Case Studies
      </p>
      <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
        Real systems.<br>Real results.
      </h2>
    </div>

    <div class="grid lg:grid-cols-2 gap-2" transition:fly={{ y: 40, duration: 500, delay: 150, easing: cubicOut }}>
      {#each data as post}
        <div class="group bg-gray-800 border border-white/5 hover:border-[#ff0]/20 transition-colors duration-300 p-10">

          <p class="text-xs font-mono text-[#00c2ff] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <span class="inline-block w-5 h-px bg-[#00c2ff]"></span>
            Clay · Outbound · Email
          </p>

          <h3 class="text-white font-bold text-xl leading-snug mb-4 group-hover:text-[#ff0] transition-colors duration-200">
            {post.title}
          </h3>

          <p class="text-neutral-400 text-sm leading-relaxed mb-8">
            {post.introduction}
          </p>

          <a href="/blog/{post.slug}" class="inline-flex items-center gap-1 text-sm font-mono text-[#ff0] hover:underline">
            View case study
            <svg class="shrink-0 size-4 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>

        </div>
      {/each}
    </div>

  {/if}
</div>