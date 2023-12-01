<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	//

	export let images: Array<string>;

	let index = 1;
	let showImages = [images[1], images[0]];

	onMount(() => {
		setInterval(() => {
			index = (index + 1) % images.length;
			showImages = [images[index], ...showImages];
			showImages.pop();
		}, 2000);
	});
</script>

<div>
	{#each showImages as src (src)}
		<img animate:flip transition:fade {src} alt="" />
	{/each}
</div>

<style>
	div {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: var(--c-main);
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
