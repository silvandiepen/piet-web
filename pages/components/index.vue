<template>
<div class="page page-components">
	<h2>Components</h2>	
	<p>Besides all the scss glory, there are also some additional packages can make your development a lot faster. As far, these packages are all Vue based.</p>
	<div class="row small-full medium-third card__row">
		
		<div class="column card">
			<div class="card__content">
				<h3>Modal</h3>
				<p>Modals are evil, but yeah.. you might still need them every once in a while.</p>
				<pre>npm install piet-modal</pre>
			</div>
		</div>
		
		<div class="column card">
			<div class="card__content">
				<h3>Grid</h3>			
				<p>Write less code and let the code think for you. When you know the syntax, this is making it so much clearer and easier.</p>
				<pre>npm install piet-grid</pre>
			</div>
		</div>
		
		<div class="column card">
			<div class="card__content">
				<h3>Navigation</h3>
				<p>Almost, almost every website needs navigation, instead of typing your ass off. Let this component help you create easy navigation with less code and easy stylable.</p>
				<pre>npm install piet-navigation</pre>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	layout: "page"
};
</script>



<style lang="scss">
@import "~svd-style/ext";
.page {
	--card-padding: 1rem;
	--card-space: 1rem;
}
.card {
	padding: 0 calc(var(--card-padding) / 2);

	&__content {
		border-radius: 4px;
		padding: var(--card-padding);
		color: color(Black);
		background-color: color(White);
		pre {
			margin-left: -1rem;
			width: calc(100% + 2rem);
		}
	}
}
</style>