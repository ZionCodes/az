<script lang="ts">
  import BoxReveal from "$lib/BoxReveal.svelte";
  import CoolMode from "$lib/CoolMode.svelte";
  import call from '$lib/images/call.svg';
</script>

<div class="bg-gradient-to-b from-violet-600/10 via-transparent bg-gray-900">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">

    <div class="max-w-3xl text-center mx-auto">
      <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <div class="flex justify-center mx-auto">
          <BoxReveal boxColor="#ff0" duration={0.5}>
            Hi, I’m Zion.
          </BoxReveal>
        </div>
        
         
        <BoxReveal boxColor="#ff0" duration={0.5}>
          <span>
            I Build <span class="text-[#ff0]">Systems that Scale</span>
          </span>
        </BoxReveal>
      </h1>        
    </div>

    <div class="max-w-3xl text-center mx-auto">
      <BoxReveal boxColor="#ff0" duration={0.5}>
        <p class="text-lg text-white/70">
        I create efficient systems that bring clarity, save time, and help your business grow with confidence.
      </p>
      </BoxReveal>
      
    </div>
    <div class="text-center">
      <CoolMode
        options={{
          particle:
            `${call}`,
    
        }}
      >
    <a class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none" href="https://cal.com/automationzion/intro-call" target="_blank">
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
      Schedule a call
    </a>
      </CoolMode>
    </div>
    

  </div>
</div>
