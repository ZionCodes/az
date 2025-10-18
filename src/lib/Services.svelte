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
      <div class="max-w-3xl mb-10 lg:mb-14" id="services" transition:fly={{ y: 200, duration: 1000, delay: 1500 }}>
        <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Services</h2>
        <p class="mt-1 text-neutral-400">I create custom automation solutions that simplify workflows, boost efficiency, and save time. Let’s transform your business processes for enhanced productivity.</p>
      </div>
      <!-- End Title -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6" transition:fly={{ y: 200, duration: 2000, delay: 1500 }}>

        <!-- Card -->
        <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
    
          <div>
            <div>
              <h3 class="block font-bold text-gray-800 dark:text-white">Consulting & Strategy</h3>
              <p class="text-gray-600 dark:text-neutral-400">Work with me to pinpoint automation opportunities across your systems and design scalable setups that grow with your business.</p>
            </div>
          </div>
        </a>
        <!-- End Card -->
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">Workflow Automation</h3>
                <p class="text-gray-600 dark:text-neutral-400">I automate the boring stuff so you can focus on what matters. From hands-free workflows to systems that run on autopilot.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
      
          
           <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="#services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">AI Agents & Smart Automation</h3>
                <p class="text-gray-600 dark:text-neutral-400">I build intelligent AI agents that understand, decide, and execute, making your workflows smarter, faster, and fully autonomous.</p>
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
                <p class="text-gray-600 dark:text-neutral-400">Gain valuable insights from your data. I help you uncover trends, track key metrics, and make faster, smarter decisions.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
          <!-- Card -->
          <a class="hover:scale-110 group flex gap-y-6 size-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-5 dark:hover:bg-gray-800 dark:focus:bg-gray-800" href="services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>
      
            <div>
              <div>
                <h3 class="block font-bold text-gray-800 dark:text-white">API & App Integrations</h3>
                <p class="text-gray-600 dark:text-neutral-400">Connect your tools and platforms with seamless API and webhook integrations, so your systems talk to each other effortlessly.</p>
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
                <p class="text-gray-600 dark:text-neutral-400">Beyond implementation, we work with you to continuously improve and scale your systems to ensure they grow and evolve with your business.</p>
              </div>
            </div>
          </a>
          <!-- End Card -->
      </div>
  {/if}
  
</div>
<!-- End Icon Blocks -->