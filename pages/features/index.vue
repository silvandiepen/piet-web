<template>
	<div class="page-features page row card__row small-full medium-half">
		<column>
			<card equal>
				<h3>Grid</h3>
				<h5>Rows and columns</h5>
				<p>Integer id enim vehicula, volutpat nibh vel, eleifend urna. </p>
				<nuxt-link class="button button-icon--arrow-right" to="/tools/columns">Show columns</nuxt-link>
			</card>
		</column>

		<column>
			<card equal>
				<h3>Colors</h3>
				<h5>List, manipulations and functions</h5>
				<p>Mauris ac bibendum orci, ut convallis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				<nuxt-link class="button button-icon--arrow-right" to="/docs/color">Show colors</nuxt-link>
			</card>
		</column>

		<column>
			<card equal>
				<h3>Forms</h3>
				<h5>Ready styled forms</h5>
				<p>Id gravida elit est sit amet nisi. Pulvinar iaculis mauris. Aliquam facilisis sed urna sed faucibus.</p>
				<nuxt-link class="button button-icon--arrow-right" to="/docs/forms">Show forms</nuxt-link>
			</card>
		</column>

		<column>
			<card equal>
				<h3>Components</h3>
				<h5>Breadcrumbs, dropdowns, panels, etc..</h5>
				<p>Mauris ac bibendum orci, ut convallis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				<nuxt-link class="button button-icon--arrow-right" to="/docs/components">Show components</nuxt-link>
			</card>
		</column>

		<column>
			<card equal>
				<h3>Functions &amp; Mixins</h3>
				<h5>Calcutions, elements, manipulations</h5>
				<p>Integer id enim vehicula, volutpat nibh vel, eleifend urna.</p>
				<nuxt-link class="button button-icon--arrow-right" to="/docs/components">Show components</nuxt-link>
			</card>
		</column>

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
</style>
