<script lang="ts">
	import { client } from '$lib/client';

	import HomeCategory from '$lib/components/homeCategory.svelte';

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

<div class="heading">
	<h1>Sapori</h1>
	<h2>Olive, taralli, frutta secca e altre bontà da Polignano a Mare</h2>
</div>

{#await promise}
	awaiting
{:then categories}
	<div class="categories">
		{#each categories as category}
			<HomeCategory {category} />
		{/each}
	</div>
{:catch error}
	{JSON.parse(error.message).message}
{/await}

<!--  -->
<style>
	h1 {
		font-size: 70px;
		font-weight: 700;
	}

	h2 {
		font-weight: 500;
		font-size: 20px;
	}

	.heading {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		background-color: olive;
		padding: 50px;
	}

	.heading > h2 {
		text-align: center;
	}

	.heading > * {
		color: white;
	}

	.categories {
		padding: 15px 10px;
	}
</style>
