<template>
  <div class="flex flex-col h-80 p-6 bg-white border m-4 rounded-md card w-full">
    <h2 class="text-2xl xl:text-xl font-bold text-gray-800" v-html="post.title" />
    <div v-if="post.categories[0].id == '2'">
      <p
        class="text-gray-700 text-base whitespace-normal"
        v-html="post.acf.subtitle"
      ></p>
    </div>
    <p class="italic font-thin mt-3">
      Tiempo aprox. de lectura:
      <span class="font-bold text-green-600"
        ><span class="font-semibold" v-html="post.acf.timetoread"></span>
        minutos</span
      >
    </p>
  </div>
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
