<script setup>
defineProps({
  categoryName: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  searchQuery: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8 pb-24">
    <!-- Category Title Bar -->
    <div class="mb-8 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
        <span>Menù Digitale</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white capitalize font-serif tracking-tight">
        {{ categoryName || 'I Nostri Piatti' }}
      </h2>
      <div class="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-3 rounded-full"></div>
    </div>

    <!-- Items Grid -->
    <div v-if="items && items.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="group relative bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <!-- Header with Title & Price -->
          <div class="flex justify-between items-start gap-4 mb-2">
            <h3 class="text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {{ item.name }}
            </h3>
            
            <div class="shrink-0 bg-stone-100 dark:bg-stone-800 text-orange-600 dark:text-orange-400 font-extrabold text-base md:text-lg px-3 py-1 rounded-xl border border-stone-200/50 dark:border-stone-700/50 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              € {{ item.price }}
            </div>
          </div>

          <!-- Ingredients / Description -->
          <p class="text-xs md:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
            {{ item.description }}
          </p>
        </div>

        <!-- Tags / Attributes -->
        <div v-if="item.tags && item.tags.length > 0" class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-stone-100 dark:border-stone-800/60">
          <span 
            v-for="tag in item.tags" 
            :key="tag"
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium"
            :class="{
              'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20': tag === 'popular' || tag === 'Consigliato',
              'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20': tag === 'spicy' || tag === 'Piccante',
              'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20': tag === 'veg' || tag === 'Vegetariano',
              'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20': tag === 'gluten_free' || tag === 'Senza Glutine'
            }"
          >
            <span v-if="tag === 'popular' || tag === 'Consigliato'">⭐ Consigliato</span>
            <span v-else-if="tag === 'spicy' || tag === 'Piccante'">🌶️ Piccante</span>
            <span v-else-if="tag === 'veg' || tag === 'Vegetariano'">🌱 Vegetariano</span>
            <span v-else-if="tag === 'gluten_free' || tag === 'Senza Glutine'">🌾 Senza Glutine</span>
            <span v-else>{{ tag }}</span>
          </span>
        </div>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else class="text-center py-16 px-4 bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800">
      <UIcon name="i-lucide-utensils-crossed" class="w-12 h-12 text-stone-400 mx-auto mb-3" />
      <h3 class="text-lg font-bold text-stone-700 dark:text-stone-300">Nessun elemento trovato</h3>
      <p class="text-sm text-stone-500 dark:text-stone-400 mt-1">Non ci sono piatti disponibili in questa categoria o ricerca.</p>
    </div>
  </div>
</template>

