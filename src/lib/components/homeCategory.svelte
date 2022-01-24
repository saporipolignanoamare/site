<script lang="ts">
	import type { ICategoria } from '$lib/types';

	export let category: ICategoria;

	//

	import SquareDiv from './squareDiv.svelte';
</script>

<SquareDiv width="100%">
	<a href="/{category.fields.slug}" style="--bg: url({category.fields.immagine.fields.file.url})">
		<p class="category">
			{category.fields.nomeCategoria}
		</p>
		<p class="arrow">→</p>
	</a>
</SquareDiv>

<style>
	a {
		width: 100%;
		height: 100%;

		display: flex;
		flex-flow: column nowrap;

		padding: 20px;
		border-radius: var(--card-radius);

		background: linear-gradient(rgba(50, 50, 0, 0.4), rgba(50, 50, 0, 0.4)), var(--bg);
		background-size: cover;
		background-position: center;

		text-decoration: none;
	}

	p {
		margin: 0;
		color: white;
		font-family: Affogato;
		font-size: 20px;
		font-weight: 500;
	}

	.category {
		flex-grow: 1;
	}

	.arrow {
		font-size: 30px;
		flex-grow: 0;
		text-align: right;
	}
</style>
