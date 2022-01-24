<script lang="ts">
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { client } from '$lib/requestsUtils/client';
	import { category } from '$lib/stores';

	import Product from '$lib/components/product.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';

	//

	async function getProducts() {
		// Prima prendiamo l'ID della categoria
		// E salviamo il nome nello store, perchè venga accesso dalla navbar

		const category_slug = $page.params.category;

		const search = await client.getEntries({
			content_type: 'categoria',
			'fields.slug': category_slug,
			locale: $locale
		});

		const categoria_id = search.items[0].sys.id;
		$category = (search.items[0].fields as any).nomeCategoria;

		// Quindi prendiamo le entry corrispondenti

		const data = await client.getEntries({
			content_type: 'prodotto',
			'fields.categoria.sys.id': categoria_id,
			locale: $locale
		});

		// Qui poi bisogna capire come fare un sort

		return extractProducts(data);
	}

	//

	function extractProducts(data) {
		const products = data.items.map((item) => {
			return {
				name: item.fields.nome,
				prezzo: item.fields.prezzo,
				foto: item.fields.foto.fields.file.url
			};
		});
		return products;
	}

	//

	let promise;
	$: {
		console.log($locale);
		promise = getProducts();
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
