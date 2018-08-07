<template>
<div class="page-home">
	<section-intro />
	<section-home />
	<piet-modal>
		<h3>Install</h3>	
		<pre>npm install piet</pre>
		<pre>yarn add pie </pre>
		<h4>or download</h4>
	</piet-modal>
</div>
</template>

<script>
import sectionIntro from "~/components/section/intro.vue";
import sectionHome from "~/components/section/home.vue";
import pietModal from "~/components/piet/piet-modal.vue";
export default {
	components: {
		sectionIntro,
		sectionHome,
		pietModal
	}
};
</script>

<style lang="scss">
@import "~svd-style/ext";
</style>

