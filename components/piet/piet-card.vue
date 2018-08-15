<template>
	<div class="card">
		<div class="card__content" :class="{'card-equal' : equal}">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ["equal"]
};
</script>