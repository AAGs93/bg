<script setup>
import { ref, computed } from 'vue'

const categories = [
  { id: 'pizze', name: 'Pizze', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80' },
  { id: 'primi', name: 'Primi', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=200&q=80' },
  { id: 'secondi', name: 'Secondi', image: 'https://images.unsplash.com/photo-1544025162-83569a4e3264?auto=format&fit=crop&w=200&q=80' },
  { id: 'insalate', name: 'Insalate', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80' },
  { id: 'dolci', name: 'Dolci', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80' },
  { id: 'bibite', name: 'Bibite', image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=200&q=80' }
]

const menus = {
  pizze: [
    { name: 'Margherita Verace', description: 'Pomodoro San Marzano DOP, mozzarella di bufala campana, basilico fresco, olio EVO', price: '8.50', tags: ['popular', 'veg'] },
    { name: 'Diavola Calabrese', description: 'Pomodoro, mozzarella fior di latte, spianata piccante, \'NDuja di Spilinga, basilico', price: '9.50', tags: ['spicy', 'popular'] },
    { name: 'Quattro Formaggi Cremosa', description: 'Mozzarella, gorgonzola DOP, fontina valdostana, scaglie di parmigiano reggiano 24 mesi', price: '10.50', tags: ['veg'] },
    { name: 'Capricciosa Ricca', description: 'Pomodoro, mozzarella, funghi porcini, carciofi alla contadina, prosciutto cotto scelto, olive taggiasche', price: '11.00', tags: [] },
    { name: 'Ortolana del Casale', description: 'Pomodoro, mozzarella, melanzane grigliate, zucchine, peperoni al forno, pesto fresco', price: '9.00', tags: ['veg'] },
    { name: 'Tartufata Speciale', description: 'Mozzarella di bufala, crema di tartufo nero, funghi chiodini, salsiccia fresca, scaglie di grana', price: '13.00', tags: ['popular'] }
  ],
  primi: [
    { name: 'Spaghetti alla Carbonara Tradizionale', description: 'Uovo fresco biologico, guanciale di Amatrice, pecorino romano DOP, pepe nero macinato al momento', price: '13.00', tags: ['popular'] },
    { name: 'Lasagna alla Bolognese al Forno', description: 'Sfoglia all\'uovo fatta in casa, ragù di chianina a lenta cottura, besciamella cremosa, parmigiano', price: '14.50', tags: ['popular'] },
    { name: 'Penne all\'Arrabbiata di Tropea', description: 'Pomodoro San Marzano, aglio rosato, peperoncino di Soverato, prezzemolo fresco', price: '10.50', tags: ['spicy', 'veg'] },
    { name: 'Trofie al Pesto Genovese & Pinoli', description: 'Basilico genovese DOP, pinoli tostati, pecorino, aglio e olio extravergine', price: '12.00', tags: ['veg'] }
  ],
  secondi: [
    { name: 'Tagliata di Manzo al Rosmarino', description: 'Controfiletto di manzo 300g, rucola selvatica, pomodorini datterini, scaglie di grana reggiano', price: '19.50', tags: ['popular'] },
    { name: 'Cotoletta alla Milanese con Osso', description: 'Carne di vitello impanata nel pane profumato ed fritta nel burro chiarificato, servita con patatine fritte', price: '16.50', tags: [] },
    { name: 'Grigliata Mista del Casale', description: 'Salsiccia nostrana, costolette d\'agnello, coppa di maiale, verdure di stagione alla griglia', price: '22.00', tags: ['popular'] }
  ],
  insalate: [
    { name: 'Insalata Mediterranea Ricca', description: 'Lattuga romana, pomodori datterini, carote julienne, mais dolce, olive taggiasche, cetrioli', price: '7.50', tags: ['veg', 'gluten_free'] },
    { name: 'Caprese di Bufala & Pomodori Cuore di Bue', description: 'Mozzarella di bufala campana 200g, pomodori freschi, basilico, riduzione di aceto balsamico', price: '10.50', tags: ['veg', 'popular', 'gluten_free'] },
    { name: 'Caesar Salad Gourmand', description: 'Petto di pollo grigliato, crostini dorati, scaglie di parmigiano, lattuga croccante, dressing Caesar', price: '12.00', tags: [] }
  ],
  dolci: [
    { name: 'Tiramisù Artigianale della Casa', description: 'Savoiardi sardi inzuppati nel caffè espresso, crema di mascarpone e cacao amaro in polvere', price: '6.00', tags: ['popular', 'veg'] },
    { name: 'Panna Cotta ai Frutti di Bosco', description: 'Panna fresca vanigliata con coulis di lamponi e mirtilli freschi', price: '5.50', tags: ['veg', 'gluten_free'] },
    { name: 'Cannolo Siciliano Scomposto', description: 'Cialda croccante al cacao, ricotta di pecora zuccherata, gocce di cioccolato fondente e pistacchio', price: '6.50', tags: ['veg'] }
  ],
  bibite: [
    { name: 'Acqua Minerale Naturale / Frizzante', description: 'Bottiglia di vetro 0.75L', price: '2.50', tags: ['gluten_free'] },
    { name: 'Coca Cola / Coca Zero', description: 'Bottiglia in vetro 33cl', price: '3.50', tags: [] },
    { name: 'Birra Artigianale Bionda "Buongustaio"', description: 'Birra chiara non filtrata 50cl - 5.2% vol.', price: '6.00', tags: ['popular'] },
    { name: 'Vino Rosso Chianti Classico DOCG', description: 'Calice 150ml / Bottiglia 750ml (14% vol)', price: '5.00', tags: [] }
  ]
}

const activeCategory = ref('pizze')
const searchQuery = ref('')
const activeTag = ref('all')

const categoriesWithCounts = computed(() => {
  return categories.map(cat => {
    const items = menus[cat.id] || []
    return {
      ...cat,
      count: items.length
    }
  })
})

const activeCategoryName = computed(() => {
  return categories.find(c => c.id === activeCategory.value)?.name || ''
})

const activeMenuItems = computed(() => {
  const items = menus[activeCategory.value] || []
  return items.filter(item => {
    const matchesSearch = !searchQuery.value || 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesTag = activeTag.value === 'all' || 
      (item.tags && item.tags.includes(activeTag.value))

    return matchesSearch && matchesTag
  })
})
</script>

<template>
  <div class="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Sticky Category Circles Navigation Bar -->
    <CategoryStories 
      v-model="activeCategory" 
      :categories="categoriesWithCounts" 
    />
    
    <!-- Search & Dietary Filters Container -->
    <div class="max-w-5xl mx-auto px-4 pt-6 pb-2 w-full">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-stone-900 p-3 sm:p-4 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs">
        <!-- Search Input -->
        <div class="relative w-full sm:w-72">
          <UIcon name="i-lucide-search" class="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Cerca un piatto o ingrediente..."
            class="w-full pl-9 pr-8 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 border border-transparent focus:border-orange-500 focus:outline-none transition-colors"
          />
          <button 
            v-if="searchQuery" 
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            @click="searchQuery = ''"
          >
            <UIcon name="i-lucide-x" class="w-4 h-4" />
          </button>
        </div>

        <!-- Dietary Tag Filter Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
          <button 
            class="px-3 py-1.5 rounded-xl font-medium shrink-0 transition-colors"
            :class="activeTag === 'all' ? 'bg-orange-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'"
            @click="activeTag = 'all'"
          >
            Tutti
          </button>
          <button 
            class="px-3 py-1.5 rounded-xl font-medium shrink-0 flex items-center gap-1 transition-colors"
            :class="activeTag === 'popular' ? 'bg-amber-500 text-white shadow-xs' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'"
            @click="activeTag = activeTag === 'popular' ? 'all' : 'popular'"
          >
            <span>⭐</span> Consigliati
          </button>
          <button 
            class="px-3 py-1.5 rounded-xl font-medium shrink-0 flex items-center gap-1 transition-colors"
            :class="activeTag === 'veg' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'"
            @click="activeTag = activeTag === 'veg' ? 'all' : 'veg'"
          >
            <span>🌱</span> Vegetariano
          </button>
          <button 
            class="px-3 py-1.5 rounded-xl font-medium shrink-0 flex items-center gap-1 transition-colors"
            :class="activeTag === 'spicy' ? 'bg-red-600 text-white shadow-xs' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'"
            @click="activeTag = activeTag === 'spicy' ? 'all' : 'spicy'"
          >
            <span>🌶️</span> Piccante
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu List -->
    <main class="flex-1">
      <MenuList 
        :categoryName="activeCategoryName" 
        :items="activeMenuItems" 
        :searchQuery="searchQuery"
      />
    </main>

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>

