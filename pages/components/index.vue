<template>
	<div class="page page-components">
		<h2>Components</h2>
		<p>Besides all the scss glory, there are also some additional packages can make your development a lot faster. As far, these packages are all Vue based.</p>
		<row class="card__row">
			<column class="card" medium="1:2">
				<div class="card__content">
					<icon class="card__bg nocolor" icon="modal" :original="true" />
					<icon class="card__image" icon="modal" :original="true" />
					<h3>Modal</h3>
					<p>Modals are evil, but yeah.. you might still need them every once in a while.</p>
					<nuxt-link class="button" to="components/modal">More info</nuxt-link>
				</div>
			</column>

			<column class="card" medium="1:2">
				<div class="card__content">
					<icon class="card__bg nocolor" icon="grid" :original="true" />
					<icon class="card__image" icon="grid" :original="true" />
					<h3>Grid</h3>
					<p>Write less code and let the code think for you. When you know the syntax, this is making it so much clearer and easier.</p>
					<nuxt-link class="button" to="components/grid">More info</nuxt-link>
				</div>
			</column>

			<column class="card" medium="1:2">
				<div class="card__content">
					<icon class="card__bg nocolor" icon="navigation" :original="true" />
					<icon class="card__image" icon="grid" :original="true" />
					<h3>Navigation</h3>
					<p>Almost, almost every website needs navigation, instead of typing your ass off. Let this component help you create easy navigation with less code and easy stylable.</p>
					<nuxt-link class="button" to="components/navigation">More info</nuxt-link>
				</div>
			</column>

			<column class="card" medium="1:2">
				<div class="card__content">
					<icon class="card__bg nocolor" icon="button" :original="true" />
					<icon class="card__image" icon="button" :original="true" />
					<h3>Button</h3>
					<p>Buttons are everywhere, we can create easy buttons with the button generator, but how easy would it be if we had this simple component which makes it even easier?</p>
					<nuxt-link class="button" to="components/button">More info</nuxt-link>
				</div>
			</column>

			<column class="card" medium="1:2">
				<div class="card__content">
					<icon class="card__bg nocolor" icon="forms" :original="true" />
					<icon class="card__image" icon="forms" :original="true" />
					<h3>Forms</h3>
					<p>Creating inputs, and where do you put which tag to make it look good? Just implement the component for it and keep it clean.</p>
					<nuxt-link class="button" to="components/forms">More info</nuxt-link>
				</div>
			</column>
		</row>
	</div>
</template>
<style lang="scss">
@import "~piet";
.page {
	--card-padding: 2rem;
	--card-space: 1rem;
}
.card {
	padding: 0 calc(var(--card-padding) / 2);

	&__content {
		border-radius: 4px;
		padding: var(--card-padding);
		color: color(Black);
		background-color: color(White);
		padding-left: calc(#{grid(1)} + 4rem);
		overflow: hidden;
		position: relative;
		z-index: 2;
		pre {
			margin-left: -1rem;
			width: calc(100% + 2rem);
		}
	}
	&__image {
		width: grid(1);
		height: grid(1);
		margin-bottom: 1rem;
		margin-right: 2rem;
		position: absolute;
		left: 2rem;
		top: 2rem;
		transform: rotate(-3deg);
	}
	&__bg {
		position: relative;
		z-index: -1;
		width: grid(5);
		height: grid(5);
		display: block;
		position: absolute;
		top: 0;
		opacity: 0.05;
		left: 0;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		transform: translate(0%, 0%) rotate(-10deg) scale(1.1);
	}
}
</style>