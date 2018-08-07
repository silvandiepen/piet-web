<template>
<div class="modal" :class="{'modal--active': modal.active}">
	<div class="modal__background"/>
	<div class="modal__content">
		<slot></slot>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			modal: {
				active: false
			}
		};
	}
};
</script>
<style lang="scss">
@import "~svd-style/ext";
.modal {
	position: fixed;
	width: 100%;
	height: 100%;
	top: -100%;
	left: 0;
	z-index: 10;
	display: flex;
	&--active {
		top: 0;
	}
	&__background {
		position: absolute;
		background-color: color(Black, 0.9);
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	&__content {
		position: absolute;
		align-self: center;
		justify-self: center;
		background-color: color(White);
		padding: 2rem;
	}
}
</style>
