<template>
  <Layout>
    <div class="h-auto w-full lg:w-8/12 mx-auto">
     <p class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-articles">Artículos</p>
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
          class="m-2 w-full xl:m-0 xl:w-4/12 z-0"
          v-for="{ node } in $page.allWordPressPost.edges"
          :key="node.id"
        >
          <g-link :to="node.path" class="flex flex-row w-full mx-auto">
            <PostCard :post="node"></PostCard>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Home {
  allWordPressPost (filter: {categories: {id: {eq: "2"}}}){
    edges {
      node {
        id
        title
        path
        excerpt
        acf {
          subtitle
          timetoread
        }
        categories{
           title
           id
        }
        tags{
          id
          title
          slug
        }
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

.gradient-text-articles {
    text-transform: uppercase;
	background: linear-gradient(to right,#90D8CC 0%, #2196F3 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.autocomplete-result {
  cursor: pointer;
}
</style>