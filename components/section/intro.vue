<template>
	<section class="intro">
		<div class="row center">
			<div class="column small-full medium-third">
				<h1>Piet</h1>
				<logo class="logo-element"></logo>
				<pre v-html="install.script">
			 </pre>
				<a class="switcher" @click="switchInstall" v-html="install.or"></a>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from "~/components/logo.vue";
export default {
	components: {
		Logo
	},
	data() {
		return {
			install: {}
		};
	},
	methods: {
		switchInstall() {
			if (this.install.script == "yarn add piet") {
				this.install = {
					script: "npm install piet",
					or: "or Yarn?"
				};
			} else {
				this.install = {
					script: "yarn add piet",
					or: "or npm?"
				};
			}
		}
	},
	created() {
		this.switchInstall();
	}
};
</script>

<style lang="scss">
@import "~piet";
.intro {
	height: 100vh;
	background-color: color(Black);
	color: color(White);
	display: flex;

	.center-vertical {
		align-self: middle;
		justify-self: center;
	}
	.logo-element {
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0%, 0%) rotate(-10deg) scale(5);
	}
}
h1 {
	text-align: center;
	& + pre {
		margin-top: 1rem;
	}
}

.switcher {
	display: block;
	text-align: right;
	padding: 1rem;
	color: color(Black, 0.25);
	font-style: italic;
}
</style>

