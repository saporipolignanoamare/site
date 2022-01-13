<script lang="ts">
	import { client } from '$lib/client';

	//

	async function getCategories() {
		const data = await client.getEntries({
			content_type: 'categoria'
			// locale: 'en-US'
		});

		return extractCategories(data);
	}

	//

	function extractCategories(data) {
		const categories = data.items.map((item) => {
			return {
				name: item.fields.nomeCategoria,
				slug: item.fields.slug,
				immagine: item.fields.immagine.fields.file.url
			};
		});
		return categories;
	}

	//

	let promise = getCategories();
</script>

<!--  -->

{#await promise}
	awaiting
{:then categories}
	{#each categories as category}
		<div>
			<img src={category.immagine} alt={category.name} />
			<a href="/{category.slug}">{category.name}</a>
		</div>
	{/each}
{:catch error}
	{JSON.parse(error.message).message}
{/await}

<!--  -->
<style>
	img {
		max-height: 200px;
	}
</style>
