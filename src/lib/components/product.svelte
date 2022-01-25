<script lang="ts">
	import type { IProdotto } from '$lib/types';

	export let product: IProdotto;

	import SquareDiv from './squareDiv.svelte';
</script>

<div class="product">
	<SquareDiv width="100%">
		<div class="img-container">
			<img src={product.fields.foto.fields.file.url} alt={product.fields.nome} />
		</div>
	</SquareDiv>
	<p class="name">{product.fields.nome}</p>
	<p class="price">{product.fields.prezzo}<span class="unit">€/kg</span></p>
</div>

<style>
	.img-container {
		width: 100%;
		height: 100%;
		border-radius: var(--card-radius);
		overflow: hidden;
		background-color: rgba(0, 0, 0, 0.1);
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	p {
		font-size: large;
	}

	.name {
		margin-top: 5px;
	}

	.price {
		color: olive;
		margin-top: 2px;
	}

	.unit {
		margin-left: 2px;
	}
</style>
