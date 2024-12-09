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


<!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
  <div class="max-w-xl mx-auto" transition:fly={{ y: 200, duration: 1000, delay: 1000 }}>
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Contact us
      </h1>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">
        We'd love to talk about how we can help you.
      </p>
    </div>
  </div>

  <div class="mt-12 max-w-lg mx-auto" transition:fly={{ y: 200, duration: 1000, delay: 1000 }}>
    <!-- Card -->
    <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
      <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
        Fill in the form
      </h2>

      <form>
        <div class="grid gap-4 lg:gap-6" id="contact">
          <!-- Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="firstname" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Name</label>
              <input type="text" name="firstname" id="firstname" class="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input type="email" name="email" id="email" autocomplete="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 border disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </div>
          </div>
          <!-- End Grid -->

          <div>
            <label for="message" class="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Details</label>
            <textarea id="message" name="message" rows="4" class="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send Message</button>
        </div>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you ASAP.
          </p>
        </div>
      </form>
    </div>
    <!-- End Card -->
  </div>
  {/if}
    
</div>
  <!-- End Contact Us -->