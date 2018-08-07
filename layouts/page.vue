<template>
  <div>
		<section class="layout-page">
		<div class="row center">
			<div class="column small-full medium-two-third">
				<navigation></navigation>
			</div>
		</div>
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
import pietModal from "~/components/piet/piet-modal.vue";
import Navigation from "~/components/navigation.vue";
export default {
	components: {
		pietModal,
		Navigation
	}
};
</script>


<style lang="scss">
@import "~svd-style/ext";
.layout-page {
	min-height: 100vh;
	background-color: color(Black);
	h2 {
		color: color(White);
		width: grid(6);
		font-size: grid(1);
	}
}
</style>

