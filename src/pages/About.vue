<template>
  <Layout>
    <p
      class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-about pb-4"
    >
      Sobre mi, Lorena
    </p>
    <div
      class="mx-auto flex flex-col justify-center content-center align-middle items-center pb-10 w-full rounded-xl 2xl:w-6/12 lg:w-11/12 border-0 2xl:border shadow-none 2xl:shadow-xl"
    >
      <g-image
        src="../assets/profile.png"
        width="250"
        height="250"
        class="rounded-full mb-10 mt-10"
      />

      <div
        class="mx-auto flex flex-col justify-center content-center align-middle items-center w-full px-10 lg:px-12"
      >
        <p class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content">
          Desde muy pequeña, cuando me preguntaban qué quería ser lo tenía muy
          claro: Bióloga.
        </p>
        <br />
        <p class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content">
          Algunos años después conseguí hacerlo realidad. Durante la carrera me
          di cuenta de lo fascinante que es la biología y decidí enfocar mis
          estudios en la Neurobiología.
        </p>
        <br />
        <p class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content">
          Actualmente estoy realizando prácticas externas en un laboratorio de
          neurobiología, en la Universidad de Alcalá, enfocado en la
          neurofisiología de la visión.
        </p>
        <br />
        <p class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content">
          Además, estoy realizando mi Trabajo de Fin de Grado:
          <span class="italic font-semibold"
            >"Evaluación de la respuesta fisiológica de células nerviosas
            sometidas a la acción de ligandos fotosensibles y estímulos
            lumínicos"</span
          >, basándome en el estudio de mis prácticas externas en las que
          realizo <span class="font-semibold">Electroretinografía</span> y
          <span class="font-bold">Patch Clamp</span>.
        </p>
      </div>
      <div class="flex flex-row">
        <button
          class="mt-12 shadow button-btn sm:text-lg xl:text-xl focus:outline-none text-white px-4 py-2 sm:px-4 xl:py-2 xl:px-4 rounded mx-2"
          type="button"
        >
          <g-link to="~/assets/CV-Lorena-Biologia-min.pdf" target="_blank"
            >Curriculum</g-link
          >
        </button>
        <button
          class="mt-12 shadow button-btn sm:text-lg xl:text-xl focus:outline-none text-white px-4 py-2 sm:px-4 xl:py-2 xl:px-4 rounded mx-2"
          type="button"
        >
          <g-link to="mailto:me@fagolambda.com" target="_blank"
            >Envíame un correo</g-link
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
.gradient-text-about {
  text-transform: uppercase;
  background: linear-gradient(to right, #ffdb30 10%, #e79723 100%);
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
