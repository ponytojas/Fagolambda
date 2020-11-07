import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/Inter/inter.css";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(Autocomplete);
}
