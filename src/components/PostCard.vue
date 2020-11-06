<template>
  <g-link :to="post.path">
    <div class="w-8/12 h-64 rounded overflow-hidden card">
      <div class="px-6 py-8">
        <div class="text-2xl font-hairline mb-2">
          <h2 v-html="post.title" />
        </div>
        <p
          class="text-gray-700 text-base whitespace-normal"
          v-html="post.acf.subtitle"
        ></p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  margin-top: 5vh;
  background-color: #fafafa;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
