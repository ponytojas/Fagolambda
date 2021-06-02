<template>
  <g-link
    :to="path"
    class="flex flex-col md:h-72 xl:h-60 p-6 bg-white border m-4 rounded-md card w-full"
  >
    <div class="flex flex-col h-full">
      <div class="flex flex-row">
        <div class="flex flex-col">
          <h2
            class="md:text-xl xl:text-2xl font-bold text-gray-800 title-to-clamp"
            v-html="title"
          />
          <div v-if="subtitle">
            <p
              class="text-gray-700 text-base whitespace-normal subtitle-to-clamp"
              v-html="subtitle"
            ></p>
          </div>
        </div>
      </div>

     <div class="flex flex-col mt-auto">
        <p class="italic font-thin mt-3 inset-x-0 bottom-0">
        Tiempo aprox. de lectura:
        <span class="font-bold text-green-600"
          ><span class="font-semibold" v-html="time_to_read"></span>
          minutos</span
        >
      </p>
     </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    time_to_read: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.subtitle-to-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

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
