<template>
  <Layout>
    <div class="side">
      <p class="text-center text-6xl font-thin mt-8">
        {{ $page.wordPressCategory.title }}
      </p>
      <div class="flex align-start flex-row flex-wrap mb-8">
        <div
          v-for="{ node } in $page.wordPressCategory.belongsTo.edges"
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

    <Pager :info="$page.wordPressCategory.belongsTo.pageInfo" />
  </Layout>
</template>

<page-query>
query WordPressCategory ($id: ID!, $page: Int) {
  wordPressCategory(id: $id) {
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
          timetoread
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
      title: this.$page.wordPressCategory.title,
    };
  },
};
</script>
