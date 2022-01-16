<script lang="ts">
	export let width: string;
	let height: number;
</script>

<div bind:clientWidth={height} style="--height: {height}px; --width: {width}">
	<slot />
</div>

<style>
	div {
		width: var(--width);
		height: var(--height);
	}
</style>
