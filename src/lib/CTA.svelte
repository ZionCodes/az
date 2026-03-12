<script lang="ts">
    import { inview } from 'svelte-inview';
    import { fly } from 'svelte/transition';
    import CoolMode from '$lib/CoolMode.svelte';
    import call from '$lib/images/call.svg';
  
    let isInView = $state(false);
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
    class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900"
    use:inview={options}
    on:inview_change={handleChange}
  >
    {#if isInView}
      <div
        class="bg-gray-800 border border-white/5 rounded-2xl px-8 py-16 sm:px-16 text-center"
        transition:fly={{ y: 200, duration: 1000, delay: 300 }}
      >
  
        <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
          <span class="inline-block w-8 h-px bg-[#ff0]"></span>
          Let's Work Together
          <span class="inline-block w-8 h-px bg-[#ff0]"></span>
        </p>
  
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight mb-4">
          Got a process that<br>needs automating?
        </h2>
  
        <p class="text-neutral-400 text-base max-w-xl mx-auto mb-10">
          Book a free 30-minute call. I'll tell you exactly how I'd automate it and what it would take to build.
        </p>
  
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
  
          <CoolMode options={{ particle: `${call}` }}>
            <a
              href="https://cal.com/automationzion/intro-call"
              target="_blank"
              class="group inline-flex items-center gap-x-2 py-3 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none hover:opacity-90 transition-opacity"
            >
              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                <path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"/>
                <path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"/>
              </svg>
              Book a Free Call
            </a>
          </CoolMode>
  
          <a
            href="mailto:ziongonet@gmail.com"
            class="inline-flex items-center gap-x-2 py-3 px-6 border border-white/10 text-sm font-mono text-neutral-400 rounded-full hover:border-[#ff0]/30 hover:text-white transition-colors duration-200"
          >
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Mail
          </a>
  
        </div>
      </div>
    {/if}
  </div>