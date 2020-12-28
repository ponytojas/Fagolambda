<template>
  <Layout>
    <div class="side">
      <p class="text-center text-6xl font-thin mt-8">
        ¿<span class="font-normal">Q</span>ué es
        <span class="font-normal">F</span>agolambda?
      </p>

      <div
        class="flex flex-col align-center items-center justify-center mt-8 mb-8 px-6 md:px-32 py-10 h-auto"
      >
        <div
          class="flex flex-col align-middle justify-items-center justify-center"
        >
          <g-image
            src="../assets/profile.jpg"
            width="250"
            height="250"
            class="rounded-full mb-6 self-center"
          />
          <p class="text-center font-light italic mb-10">
            Fagolambda surge de la ilusión de compartir.
          </p>
        </div>

        <div class="text-justify prose sm:prose lg:prose-lg xl:prose-xl">
          <p>
            La ciencia no es algo de unos pocos, el conocimiento debe ser
            compartido.
          </p>
          <p>
            Este es un espacio para que la gente llegue a ver lo emocionante y
            curiosa que es la biología. Aquí encontraréis artículos sobre
            curiosidades biológicas explicadas para todo el mundo, porque
            considero que la base de la ciencia es la comunicación.
          </p>
          <p>
            Podréis leer artículos tan variados y de diferentes temáticas como
            la neurobiología (<span class="italic"
              >como algunas personas ciegas son capaces de esquivar
              objetos</span
            >), parasitología (<span class="italic"
              >caracoles que se dejan comer</span
            >), fisiología general (<span class="italic"
              >¿Por qué late tu corazón?</span
            >)...
          </p>
        </div>
        <button
          class="mt-12 shadow bg-green-500 hover:bg-green-400 sm:text-lg xl:text-xl focus:outline-none text-white py-1 px-2 sm:py-1 sm:px-2 xl:py-2 xl:px-4 rounded"
          type="button"
        >
          <g-link to="/">¡Visita Fagolambda!</g-link>
        </button>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
.side {
  color: #484855;
}
</style>
