<template>
  <div class="sticky top-0">
    <div
      class="sticky top-0 w-full flex z-40 inset-0 p-10"
      style="background-color: #1b97ad"
    >
      <div class="overflow-y-auto">
        <ExternalLinks />
      </div>
      <div class="absolute top-0 right-0 pt-6 pr-10">
        <button
          @click="closeMobileMenu"
          class="ml-1 flex items-center justify-center h-10 w-10 rounded-full text-4xl text-white"
        >
          <font-awesome-icon icon="times" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLinks from "./ExternalLinks";
export default {
  components: { ExternalLinks },
  methods: {
    closeMobileMenu() {
      this.$emit("closeMobileMenu");
    },
  },
};
</script>