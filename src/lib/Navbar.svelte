<script lang="ts">
  import automationzion from '$lib/images/AutomationZion.png';
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';

  let isOpen = $state(false);

  const closeMenu = () => (isOpen = false);

  // Close menu on route change
  $effect(() => {
    $page.url.pathname;
    isOpen = false;
  });

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];
</script>

<!-- ========== HEADER ========== -->
<header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-gray-800/20 before:backdrop-blur-md before:border before:border-white/5">
  <nav class="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">

    <div class="flex items-center justify-between">

      <!-- Logo -->
      <a
        href="/"
        aria-label="AutomationZion"
        onclick={closeMenu}
        class="flex-none rounded-md inline-block font-semibold focus:outline-none focus:opacity-80"
      >
        <img src={automationzion} alt="Automation Zion" class="w-28 h-auto" />
      </a>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onclick={() => (isOpen = !isOpen)}
          class="size-8 flex justify-center items-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff0]/30"
        >
          {#if isOpen}
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          {:else}
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          {/if}
        </button>
      </div>
    </div>

    <!-- Desktop nav -->
    <div class="hidden md:flex md:items-center md:justify-end md:ps-7 gap-1">
      {#each navLinks as link}
        <a
          href={link.href}
          class="px-3 py-4 text-sm text-neutral-400 hover:text-[#ff0] transition-colors focus:outline-none"
          aria-current={$page.url.pathname === link.href ? 'page' : undefined}
        >
          {link.label}
        </a>
      {/each}
      <div class="ps-3">
        <a
          href="https://cal.com/automationzion/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-x-2 py-2 px-4 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none hover:opacity-90 transition-opacity"
        >
          Book a Call
        </a>
      </div>
    </div>

    <!-- Mobile nav dropdown -->
    {#if isOpen}
      <div
        id="mobile-menu"
        transition:slide={{ duration: 200 }}
        class="md:hidden absolute top-full left-0 right-0 mt-2 mx-1 rounded-2xl bg-gray-900/95 backdrop-blur-md border border-white/10 overflow-hidden z-50"
      >
        <div class="flex flex-col items-center py-6 gap-1">
          {#each navLinks as link}
            <a
              href={link.href}
              onclick={closeMenu}
              aria-current={$page.url.pathname === link.href ? 'page' : undefined}
              class="w-full text-center px-6 py-3 text-sm text-neutral-400 hover:text-[#ff0] hover:bg-white/5 transition-colors rounded-xl focus:outline-none"
            >
              {link.label}
            </a>
          {/each}
          <div class="pt-2 pb-1">
            <a
              href="https://cal.com/automationzion/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              onclick={closeMenu}
              class="inline-flex items-center gap-x-2 py-2 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none hover:opacity-90 transition-opacity"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    {/if}

  </nav>
</header>
<!-- ========== END HEADER ========== -->