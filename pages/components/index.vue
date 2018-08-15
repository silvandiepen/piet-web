<template>
	<div class="page page-components">
		<h2>Components</h2>
		<p>Besides all the scss glory, there are also some additional packages can make your development a lot faster. As far, these packages are all Vue based.</p>
		<row class="card__row">
			<column medium="1:2">
				<card class="card--component">
					<icon class="card__image" icon="modal" :original="true" />
					<h3>Modal</h3>
					<p>Modals are evil, but yeah.. you might still need them every once in a while.</p>
					<nuxt-link class="button" to="/components/modal">More info</nuxt-link>
				</card>
			</column>

			<column medium="1:2">
				<card class="card--component">
					<icon class="card__image" icon="grid" :original="true" />
					<h3>Grid</h3>
					<p>Write less code and let the code think for you. When you know the syntax, this is making it so much clearer and easier.</p>
					<nuxt-link class="button" to="/components/grid">More info</nuxt-link>
				</card>
			</column>

			<column medium="1:2">
				<card class="card--component">
					<icon class="card__image" icon="grid" :original="true" />
					<h3>Navigation</h3>
					<p>Almost, almost every website needs navigation, instead of typing your ass off. Let this component help you create easy navigation with less code and easy stylable.</p>
					<nuxt-link class="button" to="/components/navigation">More info</nuxt-link>
				</card>
			</column>

			<column medium="1:2">
				<card class="card--component">
					<icon class="card__image" icon="button" :original="true" />
					<h3>Button</h3>
					<p>Buttons are everywhere, we can create easy buttons with the button generator, but how easy would it be if we had this simple component which makes it even easier?</p>
					<nuxt-link class="button" to="/components/button">More info</nuxt-link>
				</card>
			</column>

			<column medium="1:2">
				<card class="card--component">
					<icon class="card__image" icon="forms" :original="true" />
					<h3>Forms</h3>
					<p>Creating inputs, and where do you put which tag to make it look good? Just implement the component for it and keep it clean.</p>
					<nuxt-link class="button" to="/components/forms">More info</nuxt-link>
				</card>
			</column>
		</row>
	</div>
</template>

<script>
import Card from "~/components/piet/piet-card.vue";
export default {
	components: {
		Card
	}
};
</script>

<style lang="scss">
@import "~piet";

.card--component {
	.card__content {
		padding-left: grid(2);
		@media #{$small-only} {
			padding-left: 80px;
		}
	}

	.card__image {
		width: grid(2);
		height: grid(2);
		margin-bottom: 1rem;
		margin-right: 2rem;
		position: absolute;
		left: 0rem;
		top: 50%;
		transform: translate(-20%, -50%) rotate(-3deg);
		@media #{$small-only} {
			width: 80px;
			height: 80px;
		}
	}
}
</style>