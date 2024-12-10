<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';

  let isInView: boolean = false; // Initialize visibility state
  const options: Options = {
    rootMargin: '-50px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView; // Update visibility state
  };
</script>

<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 my-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
      <div class="max-w-3xl mb-10 lg:mb-14" id="services" transition:fly={{ y: 200, duration: 1000, delay: 1000 }}>
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Services</h2>
        <p class="mt-1 text-neutral-400">I create custom automation solutions that simplify workflows, boost efficiency, and save time. Let’s transform your business processes for enhanced productivity.</p>
      </div>
      <!-- End Title -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6" transition:fly={{ y: 200, duration: 2000, delay: 1000 }}>
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Workflow Automation</h3>
                <p class="text-gray-600 dark:text-neutral-400">Automate repetitive tasks and streamline your processes to improve efficiency, reduce errors, and save valuable time.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
      
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="M12 17v4"/><path d="m15.2 4.9-.9-.4"/><path d="m15.2 7.1-.9.4"/><path d="m16.9 3.2-.4-.9"/><path d="m16.9 8.8-.4.9"/><path d="m19.5 2.3-.4.9"/><path d="m19.5 9.7-.4-.9"/><path d="m21.7 4.5-.9.4"/><path d="m21.7 7.5-.9-.4"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Custom System Design</h3>
                <p class="text-gray-600 dark:text-neutral-400">Tailor-made solutions that integrate seamlessly with your existing tools, enhancing productivity and simplifying complex workflows.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
      
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Data Analytics</h3>
                <p class="text-gray-600 dark:text-neutral-400">Gain valuable insights from your data. I help you analyze and visualize key metrics to make data-driven decisions that drive growth and improve performance.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">API Integrations</h3>
                <p class="text-gray-600 dark:text-neutral-400">Connect your tools and platforms with seamless API integrations, improving data flow and automating your operations for greater efficiency.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Consulting & Strategy</h3>
                <p class="text-gray-600 dark:text-neutral-400">Work with me to develop actionable strategies for improving your workflows, implementing automation, and achieving your business goals.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Ongoing Support & Optimization</h3>
                <p class="text-gray-600 dark:text-neutral-400">After implementation, I provide continuous support to optimize your systems and ensure they grow and evolve with your business.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
      </div>
  {/if}
  
</div>
<!-- End Icon Blocks -->