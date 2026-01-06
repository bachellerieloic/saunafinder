<template>
  <div id="featured" class="bg-om-cream pb-32 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center justify-center mb-16 space-y-4">
        <span class="text-om-gold text-xs tracking-[0.2em] uppercase">The Collection</span>
        <h2 class="font-serif text-3xl md:text-4xl text-om-green">Curated Experiences</h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <div v-for="(sauna, index) in saunas" :key="index" class="group cursor-pointer">
          <!-- Image Frame -->
          <div class="relative aspect-[3/4] overflow-hidden mb-6 border border-om-green/5 bg-om-green/5">
            <img :src="sauna.image" :alt="sauna.name" class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0">
            
            <div class="absolute top-0 right-0 p-4">
               <span class="bg-om-cream/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-om-green border border-om-green/10">
                {{ sauna.type }}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="text-center space-y-3">
            <div class="flex items-center justify-center space-x-1 text-om-gold text-[10px]">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <h3 class="font-serif text-2xl text-om-green group-hover:text-om-gold transition-colors duration-500">{{ sauna.name }}</h3>
            <p class="text-xs uppercase tracking-widest text-om-green/50">{{ sauna.location }}</p>
            
            <div class="pt-4">
              <span class="inline-block text-[10px] uppercase tracking-[0.2em] text-om-green/40 group-hover:text-om-green border-b border-transparent group-hover:border-om-gold transition-all duration-500 pb-1">
                View Sanctuary
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const saunas = [
  {
    name: "Löyly Helsinki",
    location: "Helsinki, Finland",
    type: "Public Sauna",
    image: "https://images.unsplash.com/photo-1543791187-df796fa1103c?q=80&w=2669&auto=format&fit=crop"
  },
  {
    name: "Therme Vals",
    location: "Vals, Switzerland",
    type: "Thermal Spa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Yume Meguri",
    location: "Hakone, Japan",
    type: "Onsen",
    image: "https://images.unsplash.com/photo-1558231454-02758156db36?q=80&w=2670&auto=format&fit=crop"
  }
]
</script>
