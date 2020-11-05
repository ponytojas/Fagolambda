const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Fagolambda",
  siteDescription: "Fagolambda",

  templates: {
    WordPressCategory: "/category/:slug", // adds a route for the "category" post type (Optional)
    WordPressPost: "/:year/:month/:day/:slug", // adds a route for the "post" post type (Optional)
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
        baseUrl: process.env.WORDPRESS_URL, // required
        typeName: "WordPress", // GraphQL schema name (Optional)
      },
    },
  ],
};
