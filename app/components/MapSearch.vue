<template>
  <div id="map" class="relative w-full bg-om-cream py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-6 text-[#1A2F23]">
        <h2 class="font-serif text-4xl md:text-5xl">Find Your Sanctuary</h2>
        <p class="font-light italic text-lg opacity-60">Search by region or experience type</p>
      </div>

      <!-- Search Controls -->
      <div class="relative z-10 -mb-12 max-w-5xl mx-auto">
        <div class="bg-om-cream p-8 border border-om-green/5 shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <!-- Location Input -->
            <div class="space-y-2 group">
              <label class="block text-[10px] uppercase tracking-widest text-om-green/40 group-hover:text-om-gold transition-colors">Region</label>
              <select class="w-full bg-transparent border-b border-om-green/10 py-3 focus:border-om-gold focus:outline-none transition-colors font-serif text-xl text-om-green cursor-pointer">
                <option>Worldwide</option>
                <option>Nordics</option>
                <option>Central Europe</option>
                <option>North America</option>
                <option>Japan</option>
              </select>
            </div>

            <!-- Type Input -->
            <div class="space-y-2 group">
              <label class="block text-[10px] uppercase tracking-widest text-om-green/40 group-hover:text-om-gold transition-colors">Experience</label>
              <select class="w-full bg-transparent border-b border-om-green/10 py-3 focus:border-om-gold focus:outline-none transition-colors font-serif text-xl text-om-green cursor-pointer">
                <option>Traditional Wood-Fired</option>
                <option>Smoke Sauna</option>
                <option>Infrared Wellness</option>
                <option>Private Spa</option>
              </select>
            </div>

            <!-- Action -->
            <div class="flex items-end">
              <button class="w-full bg-om-green text-om-cream py-4 border border-transparent hover:bg-transparent hover:text-om-green hover:border-om-green transition-all duration-500 uppercase tracking-[0.2em] text-xs">
                Search Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="relative w-full h-[700px] border-t border-b border-om-green/5 overflow-hidden">
        <div ref="mapContainer" class="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-1000"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

const mapContainer = ref(null)
const config = useRuntimeConfig()

onMounted(async () => {
  setOptions({
    key: config.public.googleMapsApiKey,
    v: "weekly",
  })

  try {
    const { Map, InfoWindow } = await importLibrary("maps")
    const { AdvancedMarkerElement } = await importLibrary("marker")

    const mapStyle = [
      { "elementType": "geometry", "stylers": [{ "color": "#f8f4ef" }] },
      { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
      { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
      { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] },
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
      { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }
    ]

    const map = new Map(mapContainer.value, {
      center: { lat: 60.1699, lng: 24.9384 },
      zoom: 12,
      mapId: "DEMO_MAP_ID",
      styles: mapStyle,
      disableDefaultUI: true,
      zoomControl: true,
      minZoom: 2,
      maxZoom: 18,
    })

    const sanctuaries = [
      { 
        lat: 60.1517, lng: 24.9332, 
        title: "Löyly Helsinki", 
        type: "Traditional Wood-Fired",
        location: "Hernesaari, Helsinki",
        image: "https://images.unsplash.com/photo-1543791187-df796fa1103c?q=80&w=400&auto=format&fit=crop"
      },
      { 
        lat: 60.1694, lng: 24.9542, 
        title: "Allas Sea Pool", 
        type: "Open Air & Sea",
        location: "Market Square, Helsinki",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop"
      }
    ]

    const infoWindow = new InfoWindow({
      pixelOffset: new google.maps.Size(0, -5)
    })

    sanctuaries.forEach(s => {
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: s.lat, lng: s.lng },
        title: s.title,
      })

      marker.addListener("gmp-click", () => {
        const content = `
          <div style="background-color: #F9F7F1; padding: 16px; font-family: 'Inter', sans-serif; min-width: 240px; border: 1px solid rgba(26, 47, 35, 0.1);">
            <div style="width: 100%; height: 120px; overflow: hidden; margin-bottom: 12px; border: 1px solid rgba(26, 47, 35, 0.05);">
              <img src="${s.image}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
            </div>
            <p style="margin: 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #D4AF37; margin-bottom: 6px;">${s.type}</p>
            <h3 style="margin: 0; font-size: 18px; font-family: 'Playfair Display', serif; color: #1A2F23; margin-bottom: 6px;">${s.title}</h3>
            <p style="margin: 0; font-size: 12px; font-weight: 300; color: rgba(26, 47, 35, 0.6); margin-bottom: 12px;">${s.location}</p>
            <div style="width: 100%; border: 1px solid #1A2F23; background: transparent; color: #1A2F23; padding: 8px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; text-align: center;">
              Refine Booking
            </div>
          </div>
        `
        infoWindow.setContent(content)
        infoWindow.open({
          anchor: marker,
          map,
        })
      })
    })

  } catch (error) {
    console.error("Error loading Google Maps:", error)
  }
})
</script>

<style scoped>
:deep(.gm-style-iw) {
  background-color: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
}
:deep(.gm-style-iw-d) {
  overflow: visible !important;
}
:deep(.gm-ui-hover-text) {
  display: none !important;
}
:deep(.gm-style-iw-tc) {
  display: none !important;
}
</style>
