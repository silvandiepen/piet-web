// main.js
import Vue from "vue";
import SvgIcon from "vue-svgicon";
import "~/components/icons";

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: "icon"
});
