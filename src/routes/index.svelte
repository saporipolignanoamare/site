<script lang="ts">
	import { t } from '$lib/translations';
	import { categories } from '$lib/stores';

	import HomeCategory from '$lib/components/homeCategory.svelte';
</script>

<!--  -->

<div class="heading">
	<h1>{$t('home.intro')}</h1>
</div>

<div class="max-width">
	<h2>{$t('home.cta')}</h2>
	<div class="categories grid">
		{#each $categories as category}
			<HomeCategory {category} />
		{/each}
	</div>
</div>

<!--  -->
<style>
	h1 {
		font-size: 25px;
		font-weight: 400;
		text-align: center;
		color: white;
	}

	h2 {
		color: var(--accent);
		font-weight: 400;
		text-align: center;
		margin-top: var(--spacing);
	}

	.heading {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		background-color: var(--accent);
		padding: 50px;
	}
</style>
