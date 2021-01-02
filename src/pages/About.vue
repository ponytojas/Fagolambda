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
          src="../assets/profile.png"
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
            Actualmente estoy realizando prácticas externas en un laboratorio
            de neurobiología, en la Universidad de Alcalá, enfocado en la
            neurofisiología de la visión.
          </p>
          <p>
            Además, estoy realizando mi Trabajo de Fin de Grado:
            <span class="italic font-semibold"
              >"Evaluación de la respuesta fisiológica de células nerviosas
              sometidas a la acción de ligandos fotosensibles y estímulos
              lumínicos"</span
            >, basándome en el estudio de mis prácticas externas en las que
            realizo <span class="font-semibold">E</span>lectroretinografía y
            <span class="font-bold">P</span>atch
            <span class="font-bold">C</span>lamp.
          </p>
        </div>
        <div class="flex flex-row">
          <button
          class="mt-12 mx-4 shadow button-btn sm:text-lg xl:text-xl focus:outline-none text-white py-3 px-4 sm:py-3 sm:px-4 xl:py-2 xl:px-4 rounded"
          type="button"
        >
          <g-link to="~/assets/CV-Lorena-Biologia-min.pdf" target="_blank"
            >Curriculum</g-link
          >
        </button>
        <button
          class="mt-12 mx-4 shadow button-btn sm:text-lg xl:text-xl focus:outline-none text-white py-3 px-4 sm:py-3 sm:px-4 xl:py-2 xl:px-4 rounded"
          type="button"
        >
          <g-link to="mailto:me@fagolambda.com" target="_blank"
            >Envíame un correo</g-link
          >
        </button>
        </div>
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

.button-btn {
  background-color: #1b97ad;
}

.button-btn:hover {
  background-color: #177686;
}
</style>
