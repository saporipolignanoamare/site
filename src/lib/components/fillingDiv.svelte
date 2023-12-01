<script lang="ts">
	import { navHeight } from '$lib/stores';

	export let zIndex: 'auto' | number = 'auto';
</script>

<!-- +1 is used to account for navbar border-bottom -->
<div style="--navHeight: {$navHeight + 1}px; --z: {zIndex}">
	<slot />
</div>

<style>
	div {
		width: 100%;
		height: calc(100% - var(--navHeight));

		position: fixed;
		top: var(--navHeight);
		z-index: var(--z);
	}
</style>
