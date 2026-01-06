<template>
  <div class="bg-om-cream text-om-green min-h-screen flex flex-col font-sans selection:bg-om-gold selection:text-white relative">
    <div class="grain-overlay"></div>
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
