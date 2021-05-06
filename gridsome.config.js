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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
  plugins: [

    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/admin/index.js`,
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "_posts/Articles/*.md",
        typeName: "Articles",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "_posts/tfg/*.md",
        typeName: "tfg",
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
  templates: {
    Articles: [
      {
        path: "/:title",
        component: "./src/templates/Articles.vue",
      },
    ],
    tfg: [
      {
        path: "/tfg/:title",
        component: "./src/templates/TFG.vue",
      },
    ],
  },
};
