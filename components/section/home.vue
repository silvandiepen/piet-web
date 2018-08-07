<template>
<section class="home">
	<div class="row center">
		<div class="column small-full medium-two-third">
			<navigation></navigation>
		</div>
	</div>
	<div class="row center">
		<div class="column small-full medium-two-third">
			<h2>Piet is another css
framework to make it easier
to create a  </h2>
		</div>
	</div>
</section>
</template>

<script>
import Navigation from "~/components/navigation.vue";
export default {
	components: {
		Navigation
	}
};
</script>

<style lang="scss">
@import "~svd-style/ext";
.home {
	min-height: 100vh;
	background-color: color(Black);
	h2 {
		color: color(White);
		width: grid(6);
		font-size: grid(1);
	}
}
</style>