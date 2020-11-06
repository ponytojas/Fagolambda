<template>
  <Layout>
    <div class="side">
      <p class="text-center text-6xl font-thin mt-8">
        {{ $page.wordPressPostTag.title }}
      </p>
      <div class="flex align-start flex-row flex-wrap mb-8">
        <div
          v-for="{ node } in $page.wordPressPostTag.belongsTo.edges"
          :key="node.id"
          class=" w-full h-auto md:w-1/2 px-2"
        >
          <div class="flex justify-center flex-row">
            <g-link :to="node.path" class="flex justify-center flex-row">
              <PostCard :post="node"></PostCard>
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <Pager :info="$page.wordPressPostTag.belongsTo.pageInfo" />
  </Layout>
</template>

<page-query>
query WordPressPostTag ($id: ID!, $page: Int) {
  wordPressPostTag(id: $id) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
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
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Pager,
    PostCard,
  },
  metaInfo() {
    return {
      title: this.$page.wordPressPostTag.title,
    };
  },
};
</script>

<style scoped>
.side {
  color: #484855 !important;
}
</style>
