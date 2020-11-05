<template>
  <Layout>
    <h1>Tag: {{ $page.wordPressPostTag.title }} </h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.wordPressPostTag.belongsTo.edges" :key="node.id">
        <PostCard :post="node" />
      </li>
    </ul>
    <Pager :info="$page.wordPressPostTag.belongsTo.pageInfo"/>
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
import { Pager } from 'gridsome'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Pager,
    PostCard
  },
  metaInfo () {
    return {
      title: this.$page.wordPressPostTag.title
    }
  }
}
</script>
