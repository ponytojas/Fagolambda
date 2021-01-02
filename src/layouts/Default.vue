<template>
  <div class="layout container h-auto">
    <div class="grid grid-cols-1 md:grid-cols-7 content">
      <div class="container sm:min-h-full h-auto col-span-1 md:col-span-2 w-full">
        <div class="flex flex-row">
          <g-image :immediate=false width="250" fit="inside" blur="0" class="responsive-image mt-2 -mb-10 mx-auto" src="~/assets/fago_blanco.png" />
        </div>
        <p
          class="text-center text-3xl font-normal sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl sm:font-thin md:font-normal"
        >
          Fagolambda
        </p>
        <div class="flex flex-col items-center">
          <div class="flex flex-row">
            <g-link
              to="/"
              class="text-center font-light text-2xl sm:text-base lg:text-3xl md:text-xl mt-10 lg:mt-8 md:mt-4 sm:mt-4 sm:mb-4"
            >
              Artículos
            </g-link>
          </div>
          <div class="flex flex-row mt-2 md:mt-4 lg:mt-8 sm:mt-4 sm:mb-4">
            <g-link
              to="/fagolambda/"
              class="text-center font-light text-2xl sm:text-base lg:text-3xl md:text-xl mt-10 lg:mt-8 md:mt-4 sm:mt-4 sm:mb-4"
            >
              ¿Qué es Fagolambda?
            </g-link>
          </div>
          <div class="flex flex-row mt-2 md:mt-4 lg:mt-8 sm:mt-4 sm:mb-4">
            <g-link
              to="/about/"
              class="text-center font-light text-2xl sm:text-base lg:text-3xl md:text-xl mt-10 lg:mt-8 md:mt-4 sm:mt-4 sm:mb-4"
            >
              Sobre mí, Lorena
            </g-link>
          </div>
          <div class="flex flex-row mt-2 md:mt-4 lg:mt-8 sm:mt-4 sm:mb-4">
            <g-link
              to="/tfg"
              class="text-center font-light text-2xl sm:text-base lg:text-3xl md:text-xl mt-10 lg:mt-8 md:mt-4 sm:mt-4 sm:mb-4"
              >Mi trabajo de fin de grado</g-link
            >
          </div>
          <div
            v-if="
              this.$route.path != '/about/' &&
                this.$route.path != '/fagolambda/'
            "
          >
            <div
              v-if="this.$page.allWordPressPost"
              class="flex flex-row mt-10 md:mt-4 pb-4 w-full my-20 px-10 sm:px-6 md:px-6 xl:px-20"
            >
              <autocomplete
                :search="search"
                @submit="handleSubmit"
                placeholder="Busca un artículo"
                ref="autocomplete"
                aria-label="Busca un artículo"
                class="text-black w-full"
                style="font-size: 1rem !important"
                :debounce-time="500"
              ></autocomplete>
            </div>
            <div v-if="!this.$page.allWordPressPost" class="mb-10"></div>
          </div>
        </div>
      </div>
      <div
        class="container col-span-5 min-h-screen sm:mx-auto lg:mr-0 h-auto md:h-full w-full overflow-auto side"
      >
        <transition name="slide-fade" appear>
          <main>
            <slot />
          </main>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
export default {
  components: {
    Autocomplete,
  },

  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.$page.allWordPressPost.edges
        .filter((post) => {
          return (
            post.node.title.toLowerCase().includes(input.toLowerCase()) ||
            post.node.acf.subtitle.toLowerCase().includes(input.toLowerCase())
          );
        })
        .map((post) => "Título: " + post.node.title);
    },
    handleSubmit(result) {
      let title = result.substring(result.indexOf(":") + 2);
      let pathToArticle = this.$page.allWordPressPost.edges
        .filter((el) => el.node.title == title)
        .map((el) => el.node.path)[0];
      this.$router.push(pathToArticle);
    },
  },
};
</script>

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
  transition: all 0.6s;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.responsive-image {
  height: auto;
  width: 100%;
  max-width: 250px;
}
</style>
