<template>
	<div>
		<section-intro style="--color-black: #333333; --color-yellow: black; --color-pink: black;--color-blue: black;"></section-intro>
		<div class="row center navigation-row">
			<div class="column small-full medium-two-third">
				<navigation></navigation>
			</div>
		</div>
		<section class="layout-page">
			<div class="row center">
				<div class="column small-full medium-two-third">
					<nuxt/>
				</div>
			</div>
		</section>

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
import pietModal from "~/components/piet/piet-modal.vue";
import Navigation from "~/components/navigation.vue";
export default {
	components: {
		sectionIntro,
		Navigation,
		pietModal
	}
};
</script>



<style lang="scss">
@import "~piet";
.layout-page {
	min-height: 100vh;
	padding-top: grid(3);
}
.navigation-row {
	position: absolute;
}
</style>
