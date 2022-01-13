<script lang="ts">
	import { page } from '$app/stores';
	import { client } from '$lib/client';

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
	awaiting
{:then products}
	{#each products as product}
		<div>
			<p>{product.name}</p>
			<p>{product.prezzo} €/kg</p>
			<img src={product.foto} alt={product.name} />
		</div>
	{/each}
{:catch error}
	{JSON.parse(error.message).message}
{/await}
