<script lang="ts">
	export let side: string;
	let height: number;
</script>

<!--  -->

<div bind:clientWidth={height} style=" --width: {side}; --height: {height}px">
	<slot />
</div>

<!--  -->
<style>
	div {
		width: var(--width);
		height: var(--height);
	}
</style>
