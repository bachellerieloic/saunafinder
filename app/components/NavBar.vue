<template>
  <div class="relative">
    <nav 
      class="fixed left-0 right-0 z-50 transition-all duration-1000 cubic-bezier-luxury border-b shadow-2xl"
      :class="[
        isScrolled || isMobileMenuOpen
          ? 'top-0 bg-om-cream/90 backdrop-blur-lg border-om-green/5 py-3' 
          : 'top-2 md:top-8 bg-transparent border-transparent py-5'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-12">
      <div class="flex items-center justify-between relative">
        
        <!-- Left: Navigation / Hamburger -->
        <div class="flex-1 flex items-center justify-start">
          <a href="#map" 
             class="hidden md:block uppercase tracking-[0.3em] font-light hover:text-om-gold transition-colors duration-500" 
             :class="[ 
               isScrolled || isMobileMenuOpen ? 'text-om-green text-[11px]' : 'text-om-cream text-[10px]' 
             ]">
            Locations
          </a>
          <!-- Mobile menu button -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden hover:text-om-gold transition-all duration-500 p-1 z-50" 
            :class="[ isScrolled || isMobileMenuOpen ? 'text-om-green' : 'text-om-cream' ]"
          >
            <div class="w-5 h-2.5 flex flex-col justify-between items-center">
              <span class="w-full h-[0.5px] bg-current transition-all duration-500" :style="isMobileMenuOpen ? 'transform: translateY(4.5px) rotate(45deg)' : ''"></span>
              <span class="w-full h-[0.5px] bg-current transition-all duration-500" :style="isMobileMenuOpen ? 'opacity: 0' : ''"></span>
              <span class="w-full h-[0.5px] bg-current transition-all duration-500" :style="isMobileMenuOpen ? 'transform: translateY(-4.5px) rotate(-45deg)' : ''"></span>
            </div>
          </button>
        </div>

        <!-- Center: Logo (Mathematically centered) -->
        <div class="absolute left-1/2 top-1/2 transform transition-all duration-1000 cubic-bezier-luxury"
             :class="[ isScrolled || isMobileMenuOpen ? 'logo-scrolled' : 'logo-initial' ]">
          <NuxtLink to="/" 
                    @click="isMobileMenuOpen = false"
                    class="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.1em] hover:opacity-80 transition-all duration-1000 ease-out whitespace-nowrap block" 
                    :class="[ isScrolled || isMobileMenuOpen ? 'text-om-green' : 'text-om-cream' ]">
            SAUNA FINDER
          </NuxtLink>
        </div>

        <!-- Right: Philosophy -->
        <div class="flex-1 flex items-center justify-end">
          <a href="#about" 
             class="hidden md:block uppercase tracking-[0.3em] font-light hover:text-om-gold transition-colors duration-500" 
             :class="[ 
               isScrolled || isMobileMenuOpen ? 'text-om-green text-[11px]' : 'text-om-cream text-[10px]' 
             ]">
            Philosophy
          </a>
          <!-- Mobile placeholder for visual balance -->
          <div class="md:hidden w-9 h-9"></div>
        </div>

      </div>
      </div>
    </nav>

    <!-- Full Screen Mobile Menu -->
    <Transition name="fade-overlay">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[40] pointer-events-none">
        <div class="absolute inset-0 bg-om-cream/98 backdrop-blur-xl pointer-events-auto"></div>
        <div class="relative h-full flex flex-col items-center justify-center pointer-events-auto">
          <div class="space-y-12 text-center">
            <div class="overflow-hidden">
              <a href="#map" @click="toggleMobileMenu" class="block text-4xl font-serif text-om-green hover:text-om-gold transition-colors duration-500 animate-slide-up">
                Locations
              </a>
            </div>
            <div class="overflow-hidden">
              <a href="#about" @click="toggleMobileMenu" class="block text-4xl font-serif text-om-green hover:text-om-gold transition-colors duration-500 animate-slide-up-delay-1">
                Philosophy
              </a>
            </div>
            <div class="overflow-hidden">
              <a href="#waitlist" @click="toggleMobileMenu" class="inline-block mt-8 px-12 py-5 bg-om-green text-om-cream uppercase tracking-[0.3em] text-[10px] hover:bg-om-gold transition-all duration-500 animate-slide-up-delay-2">
                Join Waitlist
              </a>
            </div>
          </div>

          <div class="absolute bottom-16 w-full text-center px-12 animate-fade-in delay-500">
            <p class="text-[9px] uppercase tracking-[0.4em] text-om-green/40 italic">
              Excellence in thermal pursuit
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

watch(isMobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.cubic-bezier-luxury {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

.logo-scrolled {
  transform: translate(-50%, -50%) scale(0.95);
}

.logo-initial {
  transform: translate(-50%, -50%) scale(1);
}

.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-slide-up { animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
.animate-slide-up-delay-1 { animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s forwards; opacity: 0; }
.animate-slide-up-delay-2 { animation: slideUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards; opacity: 0; }

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
