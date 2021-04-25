<template>
  <Layout>
    <div class="w-full flex flex-col mx-auto items-center lg:w-7/12"></div>
    <p
      class="text-center text-4xl lg:text-6xl font-semibold mt-8 gradient-text-articles-1 pb-4"
      v-html="$page.wordPressPost.title"
    />
    <div
      class="mx-auto px-4 flex flex-col justify-center content-center align-middle items-center pb-10 w-full rounded-xl lg:w-6/12 border-0 lg:border shadow-none lg:shadow-xl"
    >
      <g-image
        v-if="$page.wordPressPost.featuredMedia"
        :src="$page.wordPressPost.featuredMedia.sourceUrl"
        :alt="$page.wordPressPost.featuredMedia.altText"
        class="mb-10 rounded-xl"
        width="2"
        height="2"
        fit="fill"
      />
      <p
        class="prose prose-xl prose-green sm:prose-lg lg:prose-xl xl:prose-2xl text-center font-normal mb-2 mt-10"
        style="color: rgb(16, 185, 129)"
        v-if="$page.wordPressPost.acf.subtitle"
        v-html="$page.wordPressPost.acf.subtitle"
      />

      <p class="text-black">
        Un artículo escrito por:
        <span
          v-html="$page.wordPressPost.author.name"
          class="prose prose-xl font-thin text-gray-700 mb-2"
        />
      </p>

      <p class="mt-5 italic text-black">
        Tiempo aprox. de lectura:
        <span
          class="font-thin text-gray-700"
          v-html="$page.wordPressPost.acf.timetoread"
        ></span
        ><span class="font-thin text-gray-700"> minutos</span>
      </p>

      <div
        class="text-justify w-11/12 sm:w-full prose prose-lg lg:prose-xl WPcontent"
        v-html="$page.wordPressPost.content"
      />
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
     author {
          name
        }
    acf{
      timetoread
      subtitle
      references
    }
    categories{
           title
           id
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
  data() {
    return {
      articleTitle: "",
    };
  },
};
</script>

<style>

.gradient-text-articles-1 {
  text-transform: uppercase;
  background: linear-gradient(to right, #813bf6 40%, #6d287b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

iframe {
  width: 100% !important;
}

.WPtitle::first-letter {
  font-weight: 400;
}

.tag {
  background-color: #ffb300;
}

.WPcontent,
.WPtitle {
  color: #484855 !important;
}

img {
  display: block;
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
}
</style>
