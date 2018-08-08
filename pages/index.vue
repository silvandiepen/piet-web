<template>
	<div class="page-home">
		<h2>Piet is another css framework to make it easier to create a </h2>
		<div class="shields">
			<img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT" />
			<img src="https://badge.fury.io/js/piet.svg" alt="Piet NPM" />

		</div>
	</div>
</template>

<script>
export default {
	layout: "intro"
};
</script>
	


<style lang="scss">
.shields {
	display: block;
	padding: 2rem 0;
	img + img {
		margin-left: 1rem;
	}
}
</style>