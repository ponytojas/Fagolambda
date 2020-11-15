<template>
  <Layout>
    <div
      class="flex flex-col align-center items-center justify-center mt-8 mb-8 px-6 md:px-32"
    >
      <p class="text-6xl mb-2 font-thin WPtitle" v-html="$page.wordPressPost.title" />

      <div class="square-brackets-quote">
        <blockquote>
          <p
            v-html="$page.wordPressPost.acf.subtitle"
            class="text-lg font-thin text-gray-700 mb-2"
          />
        </blockquote>
      </div>

      <div class="mb-12"></div>
      <g-image
        v-if="$page.wordPressPost.featuredMedia"
        :src="$page.wordPressPost.featuredMedia.sourceUrl"
        :alt="$page.wordPressPost.featuredMedia.altText"
        class="mb-20 w-3/4"
      />
      <div class="text-justify text-lg WPcontent" v-html="$page.wordPressPost.content" />
      <template v-if="$page.wordPressPost.tags.length">
        <div class="px-6 pt-4 pb-2">
          <span
            v-for="tag in $page.wordPressPost.tags"
            :key="tag.id"
            class="tag inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
            ><g-link :to="tag.path">#{{ tag.title }}</g-link></span
          >
        </div>
      </template>
    </div>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
     title 
    content
    featuredMedia{
      sourceUrl
    }
    acf{
      level
      subtitle
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title,
    };
  },
};
</script>

<style>
.tag {
  background-color: #ffb300;
}

.blockquote-wrapper {
  display: flex;
  height: 100vh;
  padding: 0 20px;
}

/* Blockquote main style */
.blockquote {
  position: relative;
  font-weight: 800;
  color: #ffffff;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

.WPcontent, .WPtitle{
  color: #484855 !important;
}

/* Blockquote header */
.blockquote p {
  position: relative;
  color: #fff;
  font-weight: 800;
  line-height: 1;
  margin: 0;
}

/* Blockquote right double quotes */
.blockquote:after {
  position: absolute;
  content: "”";
  color: #fff;
  font-size: 10rem;
  line-height: 0;
  bottom: -43px;
  right: 30px;
}

img {
    display:block;
    margin:auto;
    margin-top: 3vh;
    margin-bottom: 3vh;

}

/* increase header size after 600px */
@media all and (min-width: 600px) {

}
</style>

<style lang="scss" scoped>
$bg: #ececec;
.square-brackets-quote {
  display: inline-block;
  font-family: sans-serif;
  margin: 1em;
  max-width: 60em;
  blockquote {
    border: solid 0.5em #a75764;
    display: inline-block;
    margin: 0;
    padding: 1em;
    position: relative;
    &:before {
      background-color: $bg;
      bottom: -1em;
      content: "";
      left: 2em;
      position: absolute;
      right: 2em;
      top: -1em;
    }
    cite {
      color: white;
      display: block;
      font-size: small;
      font-style: normal;
      text-align: right;
      text-transform: uppercase;
    }
    > * {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
