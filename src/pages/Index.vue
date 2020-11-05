<template>
  <Layout>
    <div class="side">
      <p class="text-center text-6xl font-thin mt-8">Artículos</p>
    <div class="flex align-start flex-row flex-wrap mb-8">
      <div
        v-for="{ node } in $page.allWordPressPost.edges"
        :key="node.id"
        class=" w-full h-auto md:w-1/2 px-2"
      >
        <div class="flex justify-center flex-row min-h-screen">
          <PostCard :post="node"></PostCard>
        </div>
      </div>
    </div>
    </div>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        acf {
          level
          subtitle
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "../components/PostCard";
export default {
  components: {
    PostCard,
  },
};
</script>
<style>
.side {
  color: #484855;
}
</style>