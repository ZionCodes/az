<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import { scale } from 'svelte/transition';
    import make from '$lib/images/make-logo-freelogovectors.net_.png'
    import airtable from '$lib/images/Airtable_Logo.svg.png'
  
    let isInView: boolean = false; // Initialize visibility state
    const options: Options = {
      rootMargin: '-50px',
      unobserveOnEnter: true,
    };
  
    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
      isInView = detail.inView; // Update visibility state
    };
</script>

<!-- Clients -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900" use:inview={options} on:inview_change={handleChange}>
    {#if isInView}
        <!-- Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <img src={make} alt="Description" class="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-neutral-200" style="filter: invert(88%) sepia(10%) saturate(12%) hue-rotate(192deg) brightness(95%) contrast(92%);" />
        </div>
        <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <img src={make} alt="Description" class="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-neutral-200" style="filter: invert(88%) sepia(10%) saturate(12%) hue-rotate(192deg) brightness(95%) contrast(92%);" />
        </div>
        <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <img src={make} alt="Description" class="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-neutral-200" style="filter: invert(88%) sepia(10%) saturate(12%) hue-rotate(192deg) brightness(95%) contrast(92%);" />
        </div>
        <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <img src={make} alt="Description" class="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-neutral-200" style="filter: invert(88%) sepia(10%) saturate(12%) hue-rotate(192deg) brightness(95%) contrast(92%);" />
        </div>
        <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <img src={make} alt="Description" class="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-neutral-200" style="filter: invert(88%) sepia(10%) saturate(12%) hue-rotate(192deg) brightness(95%) contrast(92%);" />
        </div>
        <!-- <div class="p-4 md:p-7 bg-gray-800 rounded-lg hover:scale-110" transition:scale={{ duration: 1000, delay: 1000 }}>
            <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto  text-neutral-200" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 88 22" xml:space="preserve" enable-background="new 0 0 88 22"><path d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z" fill="#5A5A5A"/><path d="M37.7 0H40.8V17.1H37.7z" fill="#5A5A5A"/><path d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2" fill="#5A5A5A"/><path d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z" fill="#5A5A5A"/><path d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z" fill="#5A5A5A"/><path d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z" fill="#280"/></svg>
        </div> -->
    </div>
    <!-- End Grid -->
    {/if}
    
</div>
<!-- End Clients -->