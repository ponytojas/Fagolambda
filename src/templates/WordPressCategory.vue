<template>
  <Layout>
    <div class="side">
      <p class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-articles">
        {{ $page.wordPressCategory.title }}
      </p>
      <div
        class="flex flex-row w-full flex-wrap mt-4 justify-center content-center items-center"
      >
         <div
          class="m-2 w-full lg:m-0 lg:w-4/12 z-0"
          v-for="{ node } in $page.wordPressCategory.belongsTo.edges"
          :key="node.id"
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
         categories{
           title
           id
        }
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
