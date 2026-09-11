<template>
  <footer class="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
    <div class="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
      <!-- Brand & Description -->
      <div class="space-y-4">
        <h3 class="text-3xl font-serif font-extrabold text-white tracking-wide">
          Pizzeria <span class="text-orange-500">Buongustaio</span>
        </h3>
        <p class="text-sm leading-relaxed text-stone-400">
          La vera tradizione italiana nel cuore della tua città. Sforniamo passione dal 1990 con ingredienti selezionati, farine biologiche e lievito madre.
        </p>
        <div class="pt-2">
          <a 
            href="tel:+39021234567" 
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs transition-colors shadow-md shadow-orange-600/20"
          >
            <UIcon name="i-lucide-phone-call" class="w-4 h-4" />
            <span>Chiama per Prenotare</span>
          </a>
        </div>
      </div>

      <!-- Contact Details -->
      <div>
        <h4 class="font-bold text-white mb-6 uppercase tracking-wider text-xs font-sans text-orange-400">
          Contatti & Posizione
        </h4>
        <ul class="space-y-4 text-sm">
          <li>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-start gap-3 hover:text-orange-400 transition-colors group"
            >
              <UIcon
                name="i-lucide-map-pin"
                class="w-5 h-5 text-orange-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
              />
              <span>Via Roma 123<br>20121 Milano (MI)</span>
            </a>
          </li>
          <li>
            <a 
              href="tel:+39021234567" 
              class="flex items-center gap-3 hover:text-orange-400 transition-colors group"
            >
              <UIcon
                name="i-lucide-phone"
                class="w-5 h-5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>+39 02 1234567</span>
            </a>
          </li>
          <li>
            <a 
              href="mailto:info@buongustaio.it" 
              class="flex items-center gap-3 hover:text-orange-400 transition-colors group"
            >
              <UIcon
                name="i-lucide-mail"
                class="w-5 h-5 text-orange-500 shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>info@buongustaio.it</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Opening Hours -->
      <div>
        <h4 class="font-bold text-white mb-6 uppercase tracking-wider text-xs font-sans text-orange-400">
          Orari di Apertura
        </h4>
        <ul class="space-y-3 text-sm">
          <li class="flex justify-between border-b border-stone-800/80 pb-2">
            <span>Lunedì - Giovedì:</span>
            <span class="text-white font-medium">18:30 - 23:30</span>
          </li>
          <li class="flex justify-between border-b border-stone-800/80 pb-2">
            <span>Venerdì - Domenica:</span>
            <span class="text-white font-medium">18:30 - 00:00</span>
          </li>
          <li class="flex justify-between pt-1 text-amber-400 font-medium">
            <span>Martedì:</span>
            <span>Chiuso per riposo</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
      <div>&copy; {{ new Date().getFullYear() }} Pizzeria Buongustaio. Tutti i diritti riservati.</div>
      <div class="flex gap-5">
        <a href="#" aria-label="Instagram" class="hover:text-orange-400 transition-colors">
          <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
        </a>
        <a href="#" aria-label="Facebook" class="hover:text-orange-400 transition-colors">
          <UIcon name="i-simple-icons-facebook" class="w-5 h-5" />
        </a>
        <a href="#" aria-label="TripAdvisor" class="hover:text-orange-400 transition-colors">
          <UIcon name="i-simple-icons-tripadvisor" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>

