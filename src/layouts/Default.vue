<template>
  <div class="mx-auto w-full pb-4 lg:pb-0">
    <nav
      class="sticky top-0 lg:relative bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 w-full px-4 p-0 py-2 lg:py-6 lg:p-6"
    >
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <g-link to="/">
            <div class="flex flex-row h-auto">
              <img src="../assets/fago_azul.png" width="52" height="52" alt="Logo de Fagolambda" />
              <span class="my-auto ml-4 text-3xl lg:text-4xl font-thin"
                >Fagolambda</span
              >
            </div>
          </g-link>
        </div>
        <div class="flex flex-col">
          <div class="lg:hidden pt-4">
            <button @click="showSideMenu = !showSideMenu" class="my-auto">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-8 w-8 fill-current text-black"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden lg:block">
          <ul class="flex space-x-8 text-xl">
            <li>
              <g-link to="/fagolambda">¿Qué es fagolambda?</g-link>
            </li>
            <li>
              <g-link to="/about">Sobre mi, Lorena</g-link>
            </li>
            <li>
              <g-link to="/tfg">Mi trabajo de fin de grado</g-link>
            </li>
          </ul>
        </div>
        <transition name="slide-fade-background">
          <div
            class="z-10 fixed inset-0 transition-opacity"
            v-if="showSideMenu"
          >
            <div
              tabindex="0"
              class="absolute inset-0 bg-black opacity-30"
            ></div>
          </div>
        </transition>
        <transition name="slide-fade">
          <aside
            v-if="showSideMenu"
            class="p-5 open-transition transform top-0 rounded-bl-lg shadow right-0 w-auto bg-white fixed pb-20 pl-12 h-auto overflow-auto ease-in-out transition-all duration-500 z-30 translate-x-0"
          >
            <div class="close mb-10">
              <button
                class="absolute top-0 right-0 mt-7 mr-7"
                @click="showSideMenu = !showSideMenu"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <span class="flex w-full items-center p-4 border-b">
              <span class="text-gray-600 text-3xl text-center">
                Fagolambda</span
              ></span
            >
            <ul class="divide-y text-right">
              <li>
                <g-link to="/fagolambda" class="my-4 text-xl inline-block"
                  >¿Qué es fagolambda?</g-link
                >
              </li>
              <li>
                <g-link to="/about" class="my-4 text-xl inline-block"
                  >Sobre mi, Lorena</g-link
                >
              </li>
              <li>
                <g-link to="/tfg" class="my-4 text-xl inline-block"
                  >Mi trabajo de fin de grado</g-link
                >
              </li>
            </ul>
          </aside>
        </transition>
      </div>
    </nav>
    <main class="z-10 mt-10 mb-10 lg:mt-0 lg:pt-0">
      <slot />
    </main>
    <svg
      id="wave"
      class="absolute"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 0 1440 280"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(27, 151, 173, 1)" offset="0%"></stop>
          <stop stop-color="rgba(144, 216, 204, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,252L17.1,252C34.3,252,69,252,103,224C137.1,196,171,140,206,126C240,112,274,140,309,126C342.9,112,377,56,411,60.7C445.7,65,480,131,514,158.7C548.6,187,583,177,617,186.7C651.4,196,686,224,720,214.7C754.3,205,789,159,823,154C857.1,149,891,187,926,196C960,205,994,187,1029,182C1062.9,177,1097,187,1131,168C1165.7,149,1200,103,1234,79.3C1268.6,56,1303,56,1337,74.7C1371.4,93,1406,131,1440,121.3C1474.3,112,1509,56,1543,70C1577.1,84,1611,168,1646,196C1680,224,1714,196,1749,158.7C1782.9,121,1817,75,1851,56C1885.7,37,1920,47,1954,56C1988.6,65,2023,75,2057,98C2091.4,121,2126,159,2160,186.7C2194.3,215,2229,233,2263,224C2297.1,215,2331,177,2366,154C2400,131,2434,121,2451,116.7L2468.6,112L2468.6,280L2451.4,280C2434.3,280,2400,280,2366,280C2331.4,280,2297,280,2263,280C2228.6,280,2194,280,2160,280C2125.7,280,2091,280,2057,280C2022.9,280,1989,280,1954,280C1920,280,1886,280,1851,280C1817.1,280,1783,280,1749,280C1714.3,280,1680,280,1646,280C1611.4,280,1577,280,1543,280C1508.6,280,1474,280,1440,280C1405.7,280,1371,280,1337,280C1302.9,280,1269,280,1234,280C1200,280,1166,280,1131,280C1097.1,280,1063,280,1029,280C994.3,280,960,280,926,280C891.4,280,857,280,823,280C788.6,280,754,280,720,280C685.7,280,651,280,617,280C582.9,280,549,280,514,280C480,280,446,280,411,280C377.1,280,343,280,309,280C274.3,280,240,280,206,280C171.4,280,137,280,103,280C68.6,280,34,280,17,280L0,280Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  transition: {
    name: "page",
    mode: "out-in",
  },
  watch: {
    $route() {
      this.showSideMenu = false;
    },
  },
  data() {
    return {
      showSideMenu: false,
    };
  },
};
</script>

<style>
#wave {
  background-image: radial-gradient(
      #90d8cc 0.9500000000000001px,
      transparent 0.9500000000000001px
    ),
    radial-gradient(#90d8cc 0.9500000000000001px, #fafafa 0.9500000000000001px);
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #fafafa;
  background-color: #fafafa;
  opacity: 1;
  background-size: 38px 38px;
  background-position: 0 0, 19px 19px;
}

html {
  font-family: "Inter";
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f9f9f9;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(200%);
  opacity: 0;
}
.slide-fade-background-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-background-leave-active {
  transition: all 0.3s cubic-bezier(1.5, 0.5, 0.8, 1);
}
.slide-fade-background-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
