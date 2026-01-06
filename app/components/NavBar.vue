<template>
  <nav 
    class="fixed left-0 right-0 z-50 transition-all duration-700 ease-out border-b"
    :class="[
      isScrolled 
        ? 'top-0 bg-om-cream/95 backdrop-blur-md border-om-green/5 py-4 shadow-sm' 
        : 'top-10 bg-transparent border-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center relative">
        
        <!-- Left: Navigation (Desktop) -->
        <div class="hidden md:flex items-center space-x-12 flex-1">
          <a href="#featured" class="text-xs uppercase tracking-[0.2em] hover:text-om-gold transition-colors duration-500" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">Collection</a>
          <a href="#map" class="text-xs uppercase tracking-[0.2em] hover:text-om-gold transition-colors duration-500" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">Locations</a>
        </div>

        <!-- Center: Logo -->
        <div class="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink to="/" class="font-serif text-3xl tracking-wide hover:opacity-80 transition-opacity duration-500" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            SAUNA FINDER
          </NuxtLink>
        </div>

        <!-- Right: Actions (Desktop) -->
        <div class="hidden md:flex items-center justify-end space-x-12 flex-1">
          <a href="#about" class="text-xs uppercase tracking-[0.2em] hover:text-om-gold transition-colors duration-500" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">Philosophy</a>
          <a href="#waitlist" class="text-xs uppercase tracking-[0.2em] hover:text-om-gold transition-colors duration-500" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            Join Waitlist
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center absolute right-0">
          <button class="hover:text-om-gold transition-colors p-2" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
