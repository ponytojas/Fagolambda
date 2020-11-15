module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue"],
    layers: ["utilities"],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
