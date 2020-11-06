<template>
  <div class="layout container">
    <div class="grid grid-cols-1 md:grid-cols-7 content">
      <div class="container col-span-1 md:col-span-3 md:h-screen w-full">
        <p class="text-center text-6xl font-hairline">Fagolambda</p>
        <div class="flex flex-col justify-around items-center">
          <div class="flex flex-row">
            <p class="text-center text-2xl side-element">¿Qué es Fagolambda?</p>
          </div>
          <div class="flex flex-row side-element">
            <p class="text-center text-2xl">
              Sobre mi, Lorena
            </p>
          </div>
          <div class="flex flex-row side-element mb-12">
            <p class="text-center text-2xl">Mi trabajo de fin de grado</p>
          </div>
        </div>
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
  background-color: #1b97ad !important;
  color: white;
}

.side {
  background-color: #ececec;
}

.side-element{
  margin-top: 10vh;
}

</style>
