<template>
  <div
    class="sticky top-0 pt-4 z-10 mt-10 pb-4 flex flex-shrink-0 h-auto w-full max-w-6xl items-center border-b-2 border-green-300"
    style="background-color: #fafafa"
  >
    <div class="md:flex flex-row px-4">
      <div class="flex flex-row">
        <g-link class="flex flex-row" to="/">
          <img
            class="w-16 md:w-20 h-16 md:h-20 my-auto"
            src="../assets/fago_azul.png"
          />
          <span
            class="text-4xl md:text-6xl font-thin my-auto ml-8"
            href="/"
            style="color: #1b97ad"
            >Fagolambda</span
          >
        </g-link>
      </div>
    </div>
    <button class="lg:hidden items-center px-4" @click="showMobileMenu">
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    showMobileMenu() {
      this.$emit("showMobileMenu"); // closes the mobile menu if in open state and when route changes
    },
  },
};
</script>