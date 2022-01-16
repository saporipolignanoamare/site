<script lang="ts">
	export let product;

	import SquareDiv from './squareDiv.svelte';
</script>

<div class="product">
	<SquareDiv width="100%">
		<div class="img-container">
			<img src={product.foto} alt={product.name} />
		</div>
	</SquareDiv>
	<p class="name">{product.name}</p>
	<p class="price">{product.prezzo}<span class="unit">€/kg</span></p>
</div>

<style>
	.img-container {
		width: 100%;
		height: 100%;
		border-radius: var(--card-radius);
		overflow: hidden;
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
