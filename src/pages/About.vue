<template>
  <Layout>
    <div class="side">
      <p class="text-center text-6xl font-thin mt-8">
        <span class="font-normal">S</span>obre
        <span class="font-normal">m</span>i,
        <span class="font-normal">L</span>orena
      </p>

      <div
        class="flex flex-col align-center items-center justify-center mt-8 mb-8 px-6 md:px-32 py-10 h-auto"
      >
        <g-image
          src="../assets/profile.jpg"
          @mouseover="
            showingImage = showingImage == firtsRoute ? secondRoute : firtsRoute
          "
          width="250"
          height="250"
          class="rounded-full mb-10"
        />

        <div class="text-justify prose sm:prose lg:prose-lg xl:prose-xl">
          <p>
            Desde muy pequeña, cuando me preguntaban qué quería ser lo tenía muy
            claro: Bióloga.
          </p>
          <p>
            Algunos años después conseguí hacerlo realidad. Durante la carrera
            me di cuenta de lo fascinante que es la biología y decidí enfocar
            mis estudios en la Neurobiología.
          </p>
          <p>
            Actualmente estoy realizando prácticas externas en un laboratorio de
            neurobiología enfocado en la neurofisiología de la visión.
          </p>
        </div>
        <button
          class="mt-12 shadow bg-green-500 hover:bg-green-400 sm:text-lg xl:text-xl focus:outline-none text-white py-1 px-2 sm:py-1 sm:px-2 xl:py-2 xl:px-4 rounded"
          type="button"
        >
          <g-link to="~/assets/CV-Lorena.pdf" target="_blank"
            >Curriculum</g-link
          >
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
