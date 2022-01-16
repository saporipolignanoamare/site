<script lang="ts">
	import { page } from '$app/stores';
	import { client } from '$lib/client';

	import Product from '$lib/components/product.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';

	//

	async function getProducts() {
		// Prima prendiamo l'ID della categoria

		const category_slug = $page.params.category;

		const search = await client.getEntries({
			content_type: 'categoria',
			'fields.slug': category_slug
			// locale: 'en-US'
		});

		const categoria_id = await search.items[0].sys.id;

		// Quindi prendiamo le entry corrispondenti

		const data = await client.getEntries({
			content_type: 'prodotto',
			'fields.categoria.sys.id': categoria_id
			// locale: 'en-US'
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

	let promise = getProducts();
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
