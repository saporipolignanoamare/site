<script lang="ts">
	import { locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { categories } from '$lib/stores';
	import type { ICategoria } from '$lib/types';
	import { getProductsByCategory } from '$lib/requestsUtils/queries';

	import Product from '$lib/components/product.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';

	//

	// Getting the current category
	const slug = $page.params.category;
	let category: ICategoria;
	$categories.forEach((element) => {
		if (element.fields.slug == slug) {
			category = element;
		}
	});

	let promise;
	$: {
		promise = getProductsByCategory(category, $locale);
	}
</script>

{#await promise}
	<LoadingScreen />
{:then products}
	<div class="max-width products grid">
		{#each products as product}
			<Product {product} />
		{/each}
	</div>
{:catch error}
	{JSON.parse(error.message).message}
{/await}
