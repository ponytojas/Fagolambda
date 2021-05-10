<template>
  <Layout>
    <p class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-tfg pb-4">Trabajo Fin de Grado</p>
    <div class="h-auto w-full lg:w-8/12 mx-auto">
      <div class="mt-8 flex flex-row content-center">
        <autocomplete
          class="w-11/12 sm:w-6/12 mx-auto"
          :search="search"
          @submit="handleSubmit"
          placeholder="Busca un artículo"
          aria-label="Busca un artículo"
        ></autocomplete>
      </div>

      <div
        class="flex flex-row w-full flex-wrap mt-4 justify-center content-center items-center"
      >
        <div
          class="m-2 w-full lg:m-0 lg:w-4/12 z-0"
          v-for="tfg in $page.tfg.edges"
          :key="tfg.id"
        >
           <PostCard
              :title="tfg.node.title"
              :time_to_read="tfg.node.time_to_read"
              :path="tfg.node.path"
            ></PostCard>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query TFG {
  tfg: allTfg {
    edges {
      node {
        id
        title
        path
        time_to_read
      }
    }
  }
}
</page-query>

<script>
import PostCard from "../components/PostCard";
import Autocomplete from "@trevoreyre/autocomplete-vue";

export default {
  components: {
    PostCard,
    Autocomplete,
  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.$page.allWordPressPost.edges
        .filter((article) => {
          return (
            article.node.title.toLowerCase().includes(input.toLowerCase()) ||
            article.node.acf.subtitle
              .toLowerCase()
              .includes(input.toLowerCase()) ||
            article.node.tags.some((tag) =>
              tag.slug.includes(input.toLowerCase())
            )
          );
        })
        .map((article) => "Título: " + article.node.title);
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

.gradient-text-tfg {
    text-transform: uppercase;
	background: linear-gradient(to right,#EABD7D 40%, #502E2D 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.side {
  color: #484855;
}
</style>
