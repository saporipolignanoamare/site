<script lang="ts">
	import { locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { categories } from '$lib/stores';
	import type { ICategoria } from '$lib/types';
	import { getProductsByCategory } from '$lib/requestsUtils/queries';
	import { t } from '$lib/translations';

	import { Product, LoadingScreen, Cta, StickyBottom } from '$lib/components';

	import { Help24 } from '$lib/icons';

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
		if (category) {
			// Getting products
			promise = getProductsByCategory(category, $locale);
		}
	}
</script>

{#await promise}
	<LoadingScreen />
{:then products}
	<div class="max-width grid">
		{#each products as product}
			<Product {product} />
		{/each}
	</div>
	<StickyBottom>
		<Cta href="/acquista" icon={Help24}>{$t('common.how')}</Cta>
	</StickyBottom>
{/await}

<!--  -->
<style>
	@media screen and (min-width: 800px) {
		div {
			padding-top: calc(var(--spacing) * 2);
		}
	}
</style>
