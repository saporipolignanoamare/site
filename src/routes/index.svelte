<script lang="ts">
	import { client } from '$lib/client';

	import HomeCategory from '$lib/components/homeCategory.svelte';
	import LoadingScreen from '$lib/components/loadingScreen.svelte';

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
				immagine: item.fields.immagine.fields.file.url,
				ordine: item.fields.ordine
			};
		});
		return categories.sort(sortCategories);
	}

	function sortCategories(a, b) {
		return a.ordine - b.ordine;
	}

	//

	let promise = getCategories();
</script>

<!--  -->

<div class="heading">
	<h1>Olive, taralli, frutta secca e altre bontà da Polignano a Mare</h1>
</div>

{#await promise}
	<LoadingScreen />
{:then categories}
	<div class="max-width">
		<h2>Scopri i nostri prodotti! 👇</h2>
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
