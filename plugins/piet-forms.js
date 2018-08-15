import Vue from "vue";
import inputCheck from "~/components/form/input-check.vue";
import inputGroup from "~/components/form/input-group.vue";
import inputField from "~/components/form/input-field.vue";

const Components = { inputCheck, inputGroup, inputField };

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key]);
});
