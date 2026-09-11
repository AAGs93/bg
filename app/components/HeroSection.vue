<template>
  <div class="relative min-h-[320px] md:min-h-[380px] w-full flex items-center justify-center overflow-hidden bg-stone-950 text-white">
    <!-- Background Image with Gradient Overlays -->
    <div
      class="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
      style="background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80');"
    >
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/50" />
      <div class="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center px-4 py-12 max-w-3xl mx-auto flex flex-col items-center">
      <!-- Status Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-700/60 backdrop-blur-md mb-4 text-xs md:text-sm font-medium text-emerald-400 shadow-lg">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Aperto ora • Asporto & Tavoli</span>
      </div>

      <!-- Brand Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif text-white drop-shadow-md">
        Pizzeria <span class="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">Buongustaio</span>
      </h1>
      
      <p class="mt-3 text-sm md:text-base text-stone-300 max-w-lg leading-relaxed font-light">
        La vera tradizione italiana nel cuore della città. Farine biologiche, lievito madre e ingredienti freschi a chilometro zero.
      </p>

      <!-- Quick Contact Pills -->
      <div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-stone-300">
        <a 
          href="https://maps.google.com" 
          target="_blank"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/70 hover:bg-stone-800 border border-stone-800 transition-colors backdrop-blur-xs"
        >
          <UIcon name="i-lucide-map-pin" class="w-4 h-4 text-orange-500" />
          <span>Via Roma 123, Milano</span>
        </a>
        <a 
          href="tel:+39021234567"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/70 hover:bg-stone-800 border border-stone-800 transition-colors backdrop-blur-xs"
        >
          <UIcon name="i-lucide-phone" class="w-4 h-4 text-orange-500" />
          <span>02 1234567</span>
        </a>
        <span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/70 border border-stone-800 backdrop-blur-xs text-amber-400">
          <UIcon name="i-lucide-clock" class="w-4 h-4" />
          <span>18:30 - 23:30</span>
        </span>
      </div>
    </div>
  </div>
</template>

