<template>
  <Layout>
    <div
      class="w-full flex flex-col mx-auto items-center lg:w-10/12 2xl:w-7/12"
    ></div>
    <p
      class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-articles-1 pb-10 px-10 2xl:px-52"
      v-html="$page.tfg.title"
    />
    <div
      class="mx-auto flex flex-col justify-center content-center align-middle items-center pb-10 w-full rounded-xl 2xl:w-6/12 lg:w-11/12 border-0 2xl:border shadow-none 2xl:shadow-xl"
    >
      <g-image
        v-if="$page.tfg.thumbnail != '/None'"
        :src="$page.tfg.thumbnail"
        class="mb-10 rounded-xl rounded-b-none"
        width="2"
        height="2"
        fit="fill"
      />
      <div
        class="mx-auto flex flex-col justify-center content-center align-middle items-center w-full px-10 lg:px-12"
      >
        
        <p class="text-black">
          Un artículo escrito por:
          <span
            v-html="$page.tfg.author"
            class="prose prose-xl font-thin text-gray-700 mb-2"
          />
        </p>

        <p class="italic text-black mb-12">
          Tiempo aprox. de lectura:
          <span
            class="font-thin text-gray-700"
            v-html="$page.tfg.time_to_read"
          ></span
          ><span class="font-thin text-gray-700"> minutos</span>
        </p>

        <div
          v-if="$page.tfg.update != 'None'"
          class="w-full h-auto text-gray-600 border-l-2 border-green-200 bg-gray-100 py-4 px-2 text-md text-left rounded-r-xl mb-10"
        >
          <div class="px-4">
            <p>
              <span class="text-lg mb-12">Actualización del artículo</span>
              <br />
              <span v-html="$page.tfg.update"></span>
            </p>
          </div>
        </div>

        <div
          class="text-justify max-w-none w-full prose prose-lg lg:prose-xl content"
          v-html="$page.tfg.content"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  tfg: tfg (path: $path) {
    id
    update
    title
    author
    content
    time_to_read
  }
}
</page-query>

<script>
export default {
};
</script>

<style>
.gradient-text-articles-1 {
  text-transform: uppercase;
  background: linear-gradient(to right, #813bf6 40%, #6d287b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tag {
  background-color: #ffb300;
}

.content {
  color: #484855 !important;
}

img {
  margin: 0 auto;
  border-radius: 10px;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
}
</style>
