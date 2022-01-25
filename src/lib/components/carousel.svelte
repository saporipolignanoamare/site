<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let images: Array<string>;

	onMount(() => {
		setInterval(() => {
			index = (index + 1) % images.length;
		}, 3000);
	});

	let index = 0;
</script>

<div>
	<div class="carousel-container">
		{#each [images[index]] as src (index)}
			<img transition:fade {src} alt="" />
		{/each}
	</div>
</div>

<style>
	.carousel-container {
		display: block;
		height: 50vh;
		width: 100%;
	}

	img {
		object-fit: fill;
		width: 100%;
		height: 100%;
	}
</style>
