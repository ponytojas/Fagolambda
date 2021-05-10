<template>
  <Layout>
    <p
      class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-fago pb-4"
    >
      ¿Qué es Fagolambda?
    </p>

    <div
      class="mx-auto flex flex-col justify-center content-center align-middle items-center pb-10 w-full rounded-xl 2xl:w-6/12 lg:w-11/12 border-0 2xl:border shadow-none 2xl:shadow-xl"
    >
      <div
        class="mx-auto flex flex-col justify-center content-center align-middle items-center w-full px-10 lg:px-12"
      >
        <g-image
          src="../assets/fago_azul.png"
          width="200"
          height="200"
          fit="inside"
          class="rounded-full self-center mt-10"
        />
        <p class="text-center font-light italic mb-10">
          Fagolambda surge de la ilusión de compartir.
        </p>
      

      <div class="text-justify prose sm:prose lg:prose-lg xl:prose-xl">
        <p
          class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content"
        >
          La ciencia no es algo de unos pocos,
          <span class="font-semibold">el conocimiento debe ser compartido</span
          >.
        </p>
        <p
          class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content"
        >
          Este es un espacio para que la gente llegue a ver lo emocionante y
          curiosa que es la biología. Aquí encontraréis artículos sobre
          curiosidades biológicas explicadas para todo el mundo, porque
          considero que
          <span class="font-semibold"
            >la base de la ciencia es la comunicación</span
          >.
        </p>
        <p
          class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content"
        >
          Podréis leer artículos tan variados y de diferentes temáticas como la
          neurobiología (<span class="italic"
            >cómo algunas personas ciegas son capaces de esquivar objetos</span
          >), parasitología (<span class="italic"
            >caracoles que se dejan comer</span
          >), fisiología general (<span class="italic"
            >¿Por qué late tu corazón?</span
          >)...
        </p>
      </div>
      <button
        class="mt-12 shadow button-btn sm:text-lg xl:text-xl focus:outline-none text-white px-4 py-2 sm:px-4 xl:py-2 xl:px-4 rounded"
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
.gradient-text-fago {
  text-transform: uppercase;
  background: linear-gradient(to right, #ff6d70 20%, #6d287b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.side {
  color: #484855;
}

.button-btn {
  background-color: #1b97ad;
}

.button-btn:hover {
  background-color: #177686;
}
</style>
