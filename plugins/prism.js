// Import Vue and vue-highlgihtjs
import Vue from "vue";
import Prism from "vue-prismjs";

const Components = { Prism };

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key]);
});
