<template>
  <section id="waitlist" class="py-32 bg-om-cream border-t border-om-green/5">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <div v-if="!submitted" class="space-y-12 animate-fade-in">
        <div class="space-y-4">
          <span class="text-om-gold text-xs tracking-[0.3em] uppercase">Private Beta</span>
          <h2 class="font-serif text-4xl md:text-5xl text-om-green">Request an Invitation</h2>
          <p class="text-om-green/60 font-light italic text-lg max-w-xl mx-auto">
            Join a select group of thermal enthusiasts and be the first to experience the definitive sanctuary finder.
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="max-w-md mx-auto space-y-8">
          <div class="grid grid-cols-1 gap-8 text-left">
            <div class="space-y-2 group">
              <label class="block text-[10px] uppercase tracking-widest text-om-green/40 group-focus-within:text-om-gold transition-colors">Full Name</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                placeholder="Elias Thorne"
                class="w-full bg-transparent border-b border-om-green/10 py-3 focus:border-om-gold focus:outline-none transition-colors font-serif text-xl text-om-green placeholder:text-om-green/10"
              >
            </div>
            <div class="space-y-2 group">
              <label class="block text-[10px] uppercase tracking-widest text-om-green/40 group-focus-within:text-om-gold transition-colors">Email Address</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                placeholder="elias@thorne.com"
                class="w-full bg-transparent border-b border-om-green/10 py-3 focus:border-om-gold focus:outline-none transition-colors font-serif text-xl text-om-green placeholder:text-om-green/10"
              >
            </div>
          </div>

          <button 
            type="submit"
            class="w-full bg-om-green text-om-cream py-5 border border-transparent hover:bg-transparent hover:text-om-green hover:border-om-green transition-all duration-700 uppercase tracking-[0.3em] text-[10px] font-medium"
          >
            Apply for Access
          </button>
        </form>

        <p class="text-[9px] uppercase tracking-widest text-om-green/30 italic">
          Membership is limited to ensure service excellence.
        </p>
      </div>

      <div v-else class="py-12 space-y-8 animate-fade-in">
        <div class="inline-flex items-center justify-center w-20 h-20 border border-om-gold/30 rounded-full mb-4">
          <svg class="w-8 h-8 text-om-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="space-y-4">
          <h3 class="font-serif text-3xl text-om-green">Application Received</h3>
          <p class="text-om-green/60 font-light italic text-lg max-w-md mx-auto">
            Your request has been placed in our registry. You will receive a correspondence when a position becomes available.
          </p>
        </div>
        <div class="pt-8">
          <button 
            @click="submitted = false"
            class="text-[10px] uppercase tracking-widest text-om-green/40 hover:text-om-green transition-colors underline underline-offset-8"
          >
            Return to Collection
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)
const form = ref({
  name: '',
  email: ''
})

const handleSubmit = () => {
  // Simulate API call
  setTimeout(() => {
    submitted.value = true
    form.value = { name: '', email: '' }
  }, 800)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
