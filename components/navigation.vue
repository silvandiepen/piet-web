<template>
	<nav class="nav" :class="{'nav--dark' : darkMode}">
		<h1 class="nav__logo">
			<nuxt-link to="/">Piet</nuxt-link>
		</h1>
		<ul class="nav__list">
			<li class="nav__item">
				<nuxt-link to="/features" class="nav__link">
					<span class="nav__text">
						Features
					</span>
				</nuxt-link>
			</li>
			<li class="nav__item">
				<nuxt-link to="/docs" class="nav__link">
					<span class="nav__text">
						Docs
					</span>
				</nuxt-link>
			</li>
			<li class="nav__item">
				<nuxt-link to="/components" class="nav__link">
					<span class="nav__text">
						Components
					</span>
				</nuxt-link>
			</li>
			<li class="nav__item">
				<nuxt-link to="/tools" class="nav__link">
					<span class="nav__text">
						Tools
					</span>
				</nuxt-link>
			</li>
			<li class="nav__item">
				<a class="nav__link">
					<span class="nav__text button--pink">
						Install
					</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ["darkMode"]
};
</script>

<style lang="scss">
@import "~piet";
.nav {
	display: block;
	width: 100%;
	border-top: 6px solid color(Blue);
	color: white;
	position: relative;
	display: flex;
	justify-content: space-between;
	&__logo {
		display: inline-block;
		width: 100px;
		padding: 2rem;
		color: color(Black);
		&,
		a {
			font-size: 18px;
			line-height: 1;
		}
		a {
			margin: 0;
			text-decoration: none;
		}
	}
	&__list {
		display: flex;
		margin: 0;
	}
	&__item {
	}
	&__link {
		display: block;
		padding: 1.25rem 1rem;
		text-decoration: none;
		&:hover {
			cursor: pointer;
			.nav__text {
				color: color(Blue);
			}
		}
	}
	&__text {
		display: block;
		padding: 0.75rem 1rem;
		color: color(Black);
	}
	&:before {
		content: "";
		height: grid(1);
		width: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		background-color: color(Pink, 0.25);
	}
	&--dark {
		&__logo,
		.nav__text {
			color: color(White);
		}
	}
}

.button--pink {
	.nav__text {
		color: color(White) !important;
		background-color: color(Pink);
		border-radius: 4px;
	}
	&:hover {
		.nav__text {
			background-color: darken(Pink, 10%);
			color: color(White);
		}
	}
}
</style>