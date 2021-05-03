const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Fagolambda",
  siteDescription: "Fagolambda",
  icon: {
    favicon: {
      src: "./src/favicon.png",
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: "./src/favicon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  templates: {
    WordPressCategory: "/category/:slug", // adds a route for the "category" post type (Optional)
    WordPressPost: "/:slug", // adds a route for the "post" post type (Optional)
    WordPressPostTag: "/tag/:slug", // adds a route for the "post_tag" post type (Optional)
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_URL,
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10,
      },
      downloadRemoteImagesFromPosts: true,
      downloadRemoteFeaturedImages: false,
    },
    {
      use: `gridsome-plugin-netlify-cms`,
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "_posts/**/*.md",
        typeName: "Articles",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
};
