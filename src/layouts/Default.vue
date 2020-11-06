<template>
  <div class="layout container">
    <div class="grid grid-cols-1 md:grid-cols-7 content">
      <div class="container col-span-1 md:col-span-3 md:h-screen w-full">
        <p class="text-center text-6xl font-thin mt-8">Fagolambda</p>
        <div class="flex flex-col justify-around items-center">
          <div class="flex flex-row">
            <g-link to="/" class="text-center text-2xl mt-10 md:mt-20">
              Artículos
            </g-link>
          </div>
          <div class="flex flex-row">
            <p class="text-center text-2xl mt-10 md:mt-20">¿Qué es Fagolambda?</p>
          </div>
          <div class="flex flex-row mt-10 md:mt-20">
            <p class="text-center text-2xl">
              Sobre mi, Lorena
            </p>
          </div>
          <div class="flex flex-row mt-10 md:mt-20 mb-12">
            <g-link to="/tfg" class="text-center text-2xl">Mi trabajo de fin de grado</g-link>
          </div>
        </div>
      </div>
      <div class="container col-span-4 min-h-screen h-auto md:h-screen w-full overflow-auto side">
       <transition name="slide-fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
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

.slide-fade-enter-active {
  transition: all .6s
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

