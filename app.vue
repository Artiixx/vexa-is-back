<script setup lang="ts">
useSeoMeta({
  title: 'Vexa Studio',
  ogTitle: 'Vexa Studio',
  description: `Vexa est une agence de graphisme spécialisée dans la conception d'idenditées visuelles ainsi que l'élaboration de contenu graphique pour les PME.`,
  ogDescription: `Vexa est une agence de graphisme spécialisée dans la conception d'idenditées visuelles ainsi que l'élaboration de contenu graphique pour les PME.`,
  ogImage: 'https://iili.io/2MFrVOx.png',
  twitterCard: 'summary_large_image',
  
})
</script>
<template>
  <div class="min-h-screen bg-cover bg-center bg-[url('/public/assets/vexafond.png')]">
    <div class="flex h-screen">
      <div class="m-auto">
        <img class="h-auto max-w-full hover:skew-y-6 transition my-8" src="/public/assets/logovs.svg" alt="image description">
        <h1 class="text-center text-5xl text-white font-bold font-['Montserrat'] m-auto transition duration-700 hover:scale-125">Vexa 2025</h1>
        <h1 class="italic hover:underline text-center text-2xl font-bold font-['Montserrat'] m-auto text-[#06f47c]">#StayTuned</h1>
        <a href="https://discord.gg/vwQeUCcZEe" target="_blank">
        <img class="block mx-auto w-12 my-4 fill-current text-white transition-transform duration-300 transform hover:scale-125" src="/public/assets/discord-icon-svgrepo-com.svg" alt="image description">
      </a>
      </div>
    </div>
  </div>
</template>


