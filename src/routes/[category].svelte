<script lang="ts">
	import { locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { categories } from '$lib/stores';
	import type { ICategoria } from '$lib/types';
	import { getProductsByCategory } from '$lib/requestsUtils/queries';
	import { t } from '$lib/translations';

	import Product from '$lib/components/product.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';
	import MainCta from '$lib/components/mainCta.svelte';

	//

	// A quanto pare, il menù cambia url senza aggiornare il componente
	// Per questo bisogna anche ripetere il fetch della categoria (dallo store)

	let promise;
	$: {
		// Getting the current category
		const slug = $page.params.category;
		let category: ICategoria;
		$categories.forEach((element) => {
			if (element.fields.slug == slug) {
				category = element;
			}
		});
		// Getting products
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
	<MainCta href="/acquista">{$t('common.how')}</MainCta>
{:catch error}
	{JSON.parse(error.message).message}
{/await}
