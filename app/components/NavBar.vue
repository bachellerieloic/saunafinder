<template>
  <nav 
    class="fixed left-0 right-0 z-50 transition-all duration-1000 cubic-bezier-luxury border-b"
    :class="[
      isScrolled 
        ? 'top-0 bg-om-cream/90 backdrop-blur-lg border-om-green/5 py-3 shadow-sm' 
        : 'top-8 bg-transparent border-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-12">
      <!-- 3-Column Grid for Perfect Centering -->
      <div class="grid grid-cols-3 items-center">
        
        <!-- Column 1: Left Navigation -->
        <div class="flex items-center justify-start space-x-12">
          <a href="#map" 
             class="hidden md:block text-[10px] uppercase tracking-[0.3em] font-light hover:text-om-gold transition-colors duration-500" 
             :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            Locations
          </a>
          <!-- Mobile menu button (Left on mobile for balance) -->
          <button class="md:hidden hover:text-om-gold transition-colors p-2" :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Column 2: Logo (Centered) -->
        <div class="flex items-center justify-center">
          <NuxtLink to="/" 
                    class="font-serif text-2xl md:text-3xl tracking-[0.1em] hover:opacity-80 transition-all duration-1000 cubic-bezier-luxury" 
                    :class="[ 
                      isScrolled ? 'text-om-green scale-85' : 'text-om-cream scale-100' 
                    ]">
            SAUNA FINDER
          </NuxtLink>
        </div>

        <!-- Column 3: Right Navigation -->
        <div class="flex items-center justify-end">
          <a href="#about" 
             class="hidden md:block text-[10px] uppercase tracking-[0.3em] font-light hover:text-om-gold transition-colors duration-500" 
             :class="[ isScrolled ? 'text-om-green' : 'text-om-cream' ]">
            Philosophy
          </a>
          <!-- Mobile placeholder to keep logo centered -->
          <div class="md:hidden w-9 h-9"></div>
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
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.cubic-bezier-luxury {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

.scale-85 {
  transform: scale(0.85);
}

.scale-100 {
  transform: scale(1);
}
</style>
