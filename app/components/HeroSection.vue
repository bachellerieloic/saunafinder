<template>
  <div id="featured" class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-om-green">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-om-green/90 via-transparent to-om-green/20"></div>
    </div>

    <!-- Content Frame -->
    <div class="absolute inset-4 sm:inset-8 border border-om-cream/10 pointer-events-none z-20"></div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
      <span class="block text-om-gold text-xs md:text-sm tracking-[0.3em] uppercase animate-fade-in-up font-light">
        In Pursuit of the Perfect Steam
      </span>
      <h1 class="font-serif text-5xl md:text-7xl lg:text-9xl text-om-cream leading-[0.9] animate-fade-in-up delay-200">
        The Ritual of <br> <span class="italic text-om-gold-light font-light pr-4">Heat</span>
      </h1>
      <p class="text-om-cream/70 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto animate-fade-in-up delay-400 leading-relaxed">
        A curated atlas of the world's most authentic smoke, wood-fired, and wilderness saunas. Join the waitlist for private access.
      </p>
      
      <div class="pt-10 animate-fade-in-up delay-600">
        <a href="#waitlist" class="inline-block px-10 py-4 border border-om-gold/50 text-om-gold hover:bg-om-gold hover:text-om-green transition-all duration-700 uppercase tracking-[0.2em] text-xs">
          Join Waitlist
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
