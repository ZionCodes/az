<script lang="ts">
  import BoxReveal from "$lib/BoxReveal.svelte";
  import CoolMode from "$lib/CoolMode.svelte";
  import mail from '$lib/images/mail.svg';
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
            `${mail}`,
    
        }}
      >
      <a
      class="inline-flex justify-center items-center gap-x-3 bg-[#ff0] text-neutral-800 text-sm font-medium rounded-full py-3 px-6 hover:shadow-lg focus:outline-none"
      href="mailto:hello@automationzion.com"
    >
      Contact
      <svg
        class="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </a>
      </CoolMode>
    </div>
    

  </div>
</div>
