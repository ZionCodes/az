<script>
  import vida from '$lib/images/vida.svg';
  import dl from '$lib/images/dl.svg';
  import ss from '$lib/images/ss.png';
</script>

<!-- Clients Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-10">
    <h2 class="text-gray-600 dark:text-neutral-400 text-base md:text-lg font-medium">
      Companies and Teams I’ve Worked With
    </h2>
  </div>
  <!-- End Title -->

  <!-- Logo List -->
  <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16">

    <!-- Vida -->
    <div class="flex items-center gap-x-2">
      <div class="h-10 w-auto flex items-center">
        <img
          src={vida}
          alt="Vida"
          class="h-full w-auto object-contain"
        />
      </div>
      <span class="text-gray-600 text-sm md:text-base font-medium"></span>
    </div>

    <!-- DL -->
    <div class="flex items-center gap-x-2">
      <div class="h-10 w-auto flex items-center">
        <img
          src={dl}
          alt="DL"
          class="h-full w-auto object-contain"
        />
      </div>
      <span class="text-gray-600 text-sm md:text-base font-medium"></span>
    </div>

    <!-- SS -->
    <div class="flex items-center gap-x-2">
      <div class="h-10 w-auto flex items-center">
        <img
          src={ss}
          alt="SS"
          class="h-full w-auto object-contain"
        />
      </div>
      <span class="text-gray-600 text-sm md:text-base font-medium">Scaling Solutions</span>
    </div>

  </div>
</div>
