<template>
  <div class="layout container">
    <div class="grid grid-cols-1 md:grid-cols-7 content">
      <div class="container col-span-1 md:col-span-3 md:h-screen w-full">
        <p class="text-center text-6xl font-hairline">Fagolambda</p>
        <p class="text-center text-2xl">La nieve está mal</p>
        <p class="text-center text-2xl">Dije claramente rojo, no bermellón</p>
        <p class="text-center text-2xl">Eres parte de la cornisa Julio</p>
      </div>
      <div class="container col-span-4 md:h-screen w-full overflow-auto side">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.layout {
  max-width: 100%;
  font-family: "Inter", sans-serif;
  background-color: #1B97AD !important;
  color: white;
}

.side{
  background-color: #e9e9e9;
}
</style>