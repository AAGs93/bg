<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const itemRefs = ref({})

const selectCategory = (id) => {
  emit('update:modelValue', id)
  nextTick(() => {
    const el = itemRefs.value[id]
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  })
}
</script>

<template>
  <div class="sticky top-0 z-40 w-full bg-white/85 dark:bg-stone-950/85 backdrop-blur-md border-b border-stone-200/70 dark:border-stone-800/80 shadow-xs transition-colors duration-200">
    <div class="max-w-5xl mx-auto px-4 py-3 md:py-4">
      <div class="flex space-x-5 md:space-x-8 overflow-x-auto py-1 scrollbar-hide sm:justify-center items-center">
        <div 
          v-for="cat in categories" 
          :key="cat.id"
          :ref="el => { if (el) itemRefs[cat.id] = el }"
          class="flex flex-col items-center cursor-pointer shrink-0 group select-none transition-transform duration-200 active:scale-95"
          @click="selectCategory(cat.id)"
        >
          <div class="relative">
            <!-- Category Image Circle -->
            <div 
              class="w-16 h-16 md:w-20 md:h-20 rounded-full p-0.5 transition-all duration-300 relative"
              :class="[
                modelValue === cat.id 
                  ? 'bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 scale-105 shadow-md shadow-orange-500/25 ring-2 ring-orange-500/50' 
                  : 'bg-stone-200 dark:bg-stone-800 hover:scale-105 hover:bg-stone-300 dark:hover:bg-stone-700'
              ]"
            >
              <div class="w-full h-full rounded-full border-2 border-white dark:border-stone-950 overflow-hidden bg-stone-100 dark:bg-stone-900">
                <img 
                  :src="cat.image" 
                  :alt="cat.name" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>

            <!-- Item Count Badge -->
            <span 
              v-if="cat.count !== undefined" 
              class="absolute -top-1 -right-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full border border-white dark:border-stone-950 shadow-xs transition-colors duration-200"
              :class="[
                modelValue === cat.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              ]"
            >
              {{ cat.count }}
            </span>
          </div>

          <!-- Category Name -->
          <span 
            class="mt-2 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-200"
            :class="[
              modelValue === cat.id 
                ? 'text-orange-600 dark:text-orange-400 font-bold scale-105' 
                : 'text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-200'
            ]"
          >
            {{ cat.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

