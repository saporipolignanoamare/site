<script lang="ts">
	import { t, locale } from '$lib/translations';
	import { client } from '$lib/client';

	import type { ICategoria } from '$lib/types';

	import HomeCategory from '$lib/components/homeCategory.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';

	//

	async function getCategories(): Promise<Array<ICategoria>> {
		// Requesting categories
		const data = await client.getEntries({
			content_type: 'categoria',
			locale: $locale
		});
		// Casting type
		let categories = data.items as Array<ICategoria>;
		// Sorting
		categories = categories.sort(sortCategories);
		//
		return categories;
	}

	function sortCategories(a: ICategoria, b: ICategoria) {
		return a.fields.ordine - b.fields.ordine;
	}

	//

	let promise;
	$: {
		$locale;
		promise = getCategories();
	}
</script>

<!--  -->

<div class="heading">
	<h1>{$t('home.intro')}</h1>
</div>

{#await promise}
	<LoadingScreen />
{:then categories}
	<div class="max-width">
		<h2>{$t('home.cta')}</h2>
		<div class="categories grid">
			{#each categories as category}
				<HomeCategory {category} />
			{/each}
		</div>
	</div>
{:catch error}
	{JSON.parse(error.message).message}
{/await}

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
