<template>
	<div class="page-features page row small-full">
		<section>

			<h3>Grid</h3>
			<h5>Rows and sections</h5>
			<p>Integer id enim vehicula, volutpat nibh vel, eleifend urna. </p>

		</section>

		<section>
			<h3>Colors</h3>
			<h5>List, manipulations and functions</h5>
			<p>Mauris ac bibendum orci, ut convallis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

		</section>

		<section>
			<h3>Styled forms</h3>
			<h5>Ready styled forms</h5>
			<p>Id gravida elit est sit amet nisi. Pulvinar iaculis mauris. Aliquam facilisis sed urna sed faucibus.</p>
		</section>

		<section>
			<h3>Components</h3>
			<h5>Breadcrumbs, dropdowns, panels, etc..</h5>
			<p>Mauris ac bibendum orci, ut convallis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		</section>

		<section>
			<h3>Functions &amp; Mixins</h3>
			<h5>Calcutions, elements, manipulations</h5>
			<p>Integer id enim vehicula, volutpat nibh vel, eleifend urna.</p>
		</section>

	</div>
</template>

<script>
import Card from "~/components/piet/piet-card.vue";
export default {
	layout: "full",
	components: {
		Card
	}
};
</script>

<style lang="scss">
@import "~piet";
</style>
