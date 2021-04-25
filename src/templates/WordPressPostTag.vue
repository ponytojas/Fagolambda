<template>
  <Layout>
    <div class="side">
     <p class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-tags">
        {{ $page.wordPressPostTag.title }}
      </p>
      <div
        class="flex flex-row w-full flex-wrap mt-4 justify-center content-center items-center"
      >
         <div
          class="m-2 w-full lg:m-0 lg:w-4/12 z-0"
          v-for="{ node } in $page.wordPressPostTag.belongsTo.edges"
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
      title: this.$page.wordPressPostTag.title,
    };
  },
};
</script>

<style scoped>
.gradient-text-tags {
    text-transform: uppercase;
	background: linear-gradient(to right,#F79F77 30%, #EF6C00 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.side {
  color: #484855 !important;
}
</style>
