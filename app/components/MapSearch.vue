<template>
  <div id="map" class="relative w-full bg-om-cream py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-20 space-y-6 text-om-green">
        <h2 class="font-serif text-4xl md:text-5xl">Global Sanctuaries</h2>
        <p class="font-light italic text-lg opacity-60">Discover curated thermal experiences across the continents</p>
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
              <button class="w-full bg-om-green text-om-cream py-4 border border-transparent hover:bg-transparent hover:text-om-green hover:border-om-green transition-all duration-500 uppercase tracking-[0.2em] text-xs font-medium">
                Search Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="relative w-full h-[700px] border-t border-b border-om-green/5 overflow-hidden">
        <div ref="mapContainer" class="w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-1000"></div>
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
      center: { lat: 45, lng: 0 },
      zoom: 3,
      mapId: "DEMO_MAP_ID",
      styles: mapStyle,
      disableDefaultUI: true,
      zoomControl: true,
      minZoom: 2,
    })

    const sanctuaries = [
      { 
        lat: 60.1517, lng: 24.9332, 
        title: "Löyly", 
        type: "Traditional Wood-Fired",
        location: "Hernesaari, Helsinki",
        image: "https://images.unsplash.com/photo-1543791187-df796fa1103c?q=80&w=600&auto=format&fit=crop"
      },
      { 
        lat: 50.1163, lng: -122.9574, 
        title: "Scandinave Spa", 
        type: "Nordic Spa",
        location: "Whistler, Canada",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
      },
      { 
        lat: 40.7169, lng: -74.0113, 
        title: "AIRE Ancient Baths", 
        type: "Thermal Spa",
        location: "Tribeca, NYC",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop"
      },
      { 
        lat: 46.6219, lng: 9.1794, 
        title: "Therme Vals", 
        type: "Thermal Spa",
        location: "Vals, Switzerland",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop"
      },
      { 
        lat: 36.6225, lng: 138.5966, 
        title: "Kusatsu Onsen", 
        type: "Onsen",
        location: "Gunma, Japan",
        image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop"
      },
      { 
        lat: 45.4981, lng: -73.5517, 
        title: "Bota Bota", 
        type: "Nordic Spa",
        location: "Old Port, Montreal",
        image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=600&auto=format&fit=crop"
      }
    ]

    const infoWindow = new InfoWindow({
        headerDisabled: true,
    })

    const createMarkerElement = () => {
      const el = document.createElement('div')
      el.className = 'custom-marker'
      el.innerHTML = `
        <div style="
          width: 14px;
          height: 14px;
          background: #15261D;
          border: 2px solid #C6A868;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.5s ease-out;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        " onmouseover="this.style.transform='scale(1.4)'; this.style.backgroundColor='#C6A868'; this.style.borderColor='#15261D';" 
           onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='#15261D'; this.style.borderColor='#C6A868';">
        </div>
      `
      return el
    }

    sanctuaries.forEach(s => {
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: s.lat, lng: s.lng },
        title: s.title,
        content: createMarkerElement()
      })

      marker.addListener("click", () => {
        const content = `
          <div style="background-color: #EADDC3; padding: 20px; font-family: 'Inter', sans-serif; min-width: 260px; border: 1px solid rgba(21, 38, 29, 0.1);">
            <div style="width: 100%; height: 140px; overflow: hidden; margin-bottom: 16px; border: 1px solid rgba(21, 38, 29, 0.05);">
              <img src="${s.image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <p style="margin: 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.25em; color: #C6A868; margin-bottom: 8px;">${s.type}</p>
            <h3 style="margin: 0; font-size: 20px; font-family: 'Playfair Display', serif; color: #15261D; margin-bottom: 6px;">${s.title}</h3>
            <p style="margin: 0; font-size: 13px; font-weight: 300; color: rgba(21, 38, 29, 0.6); margin-bottom: 20px;">${s.location}</p>
            <a href="#waitlist" style="display: block; width: 100%; border: 1px solid #15261D; background: transparent; color: #15261D; padding: 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; text-align: center; text-decoration: none; transition: all 0.3s;">
              Request Private Booking
            </a>
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
  max-width: none !important;
}
:deep(.gm-style-iw-d) {
  overflow: visible !important;
  max-height: none !important;
}
:deep(.gm-style-iw-ch) {
  display: none !important;
}
:deep(.gm-style-iw-tc) {
  display: none !important;
}
</style>
