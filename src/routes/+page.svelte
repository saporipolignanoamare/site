<script lang="ts">
	import { isAsset } from '$lib/contentful/types/index.js';

	export let data;
	let { categorie } = data;
</script>

{#each categorie as categoria}
	{@const img = categoria.fields.immagine}
	{#if isAsset(img)}
		<img src={img.fields.file.url} alt="" />
	{/if}
{/each}
<pre>{JSON.stringify(categorie, null, 2)}</pre>
