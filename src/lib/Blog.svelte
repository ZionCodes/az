<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';

  let isInView = $state(false); // Initialize visibility state
  const options: Options = {
    rootMargin: '-50px',
    unobserveOnEnter: false,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView; // Update visibility state
  };
  let { data } = $props();
</script>


<!-- Card Blog -->
<!-- svelte-ignore event_directive_deprecated -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
  <div class="max-w-3xl mb-10 lg:mb-14" transition:fly={{ y: 200, duration: 1000, delay: 1500 }}>
    <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Blog</h2>
    <p class="mt-1 text-neutral-400">Discover tips and insights on automation, workflow optimization, and system design to help your business grow.</p>
  </div>
  <!-- End Title -->
    <!-- Grid -->
    <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10" transition:fly={{ y: 200, duration: 2000, delay: 500 }}>
      <!-- Card -->
       {#each data as post}
       <a class="group block rounded-xl overflow-hidden focus:outline-none" href="/blog/{post.slug}">
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={`https://call-until.pockethost.io/api/files/posts/${post.id}/${post.thumbnail}`} alt="Blog">
          </div>
  
          <div class="grow">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              {post.title}
            </h3>
            <p class="mt-3 text-gray-600 dark:text-neutral-400">
              {post.introduction}
            </p>
            <p class="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
              Read more
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </p>
          </div>
        </div>
      </a>
       {/each}
      
      <!-- End Card -->
  
    </div>
    <!-- End Grid -->
  {/if}
  
</div>
  <!-- End Card Blog -->