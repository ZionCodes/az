<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import WobbleCard from '$lib/WobbleCard.svelte';

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
        Blog
      </p>
      <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
        Breakdowns, walkthroughs<br>and system thinking
      </h2>
    </div>

    <div class="grid lg:grid-cols-2 gap-6" transition:fly={{ y: 40, duration: 500, delay: 150, easing: cubicOut }}>
      {#each data as post}
        <WobbleCard containerClass="h-full hover:bg-gray-700" class="!p-0">
          <a class="group block focus:outline-none h-full" href="/blog/{post.slug}">
            <div class="flex flex-col sm:flex-row sm:items-stretch h-full">

              <!-- Thumbnail -->
              <div class="shrink-0 relative w-full sm:w-48 h-44 sm:h-auto overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                <img
                  class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover"
                  src={`https://call-until.pockethost.io/api/files/posts/${post.id}/${post.thumbnail}`}
                  alt={post.title} loading="lazy"
                />
              </div>

              <!-- Content -->
              <div class="p-6 flex flex-col justify-between grow">
                <div>
                  <h3 class="text-base font-bold text-white group-hover:text-[#ff0] transition-colors duration-200 leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p class="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {post.introduction}
                  </p>
                </div>
                <div class="mt-4 inline-flex items-center gap-1 text-sm font-mono text-[#ff0]">
                  Read more
                  <svg class="shrink-0 size-4 group-hover:translate-x-1 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

            </div>
          </a>
        </WobbleCard>
      {/each}
    </div>

  {/if}
</div>