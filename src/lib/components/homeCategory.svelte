<script lang="ts">
	import type { ICategoria } from '$lib/types';

	export let category: ICategoria;

	//

	import SquareDiv from './squareDiv.svelte';
	import { ArrowRight24 } from '$lib/icons';

	//

	let size: number;
</script>

<SquareDiv side="100%">
	<a
		bind:clientWidth={size}
		href="/{category.fields.slug}"
		style="--bg: url({category.fields.immagine.fields.file
			.url}?w=300&h=300&fm=jpg&fl=progressive); --size: {size}px"
	>
		<!--  -->
		<p class="category">
			{category.fields.nomeCategoria}
		</p>
		<!--  -->
		<div class="arrow shadow btn btn-base-l">
			<svelte:component this={ArrowRight24} style="fill: var(--c-content-0-l)" />
		</div>
	</a>
</SquareDiv>

<style>
	/* Container */

	a {
		width: 100%;
		height: 100%;

		display: flex;
		flex-flow: column nowrap;

		justify-content: space-between;

		padding: calc(var(--size) / 10);
		border-radius: calc(var(--size) / 10);

		background: linear-gradient(rgba(50, 50, 0, 0.4), rgba(50, 50, 0, 0.4)), var(--bg), var(--bg);
		background-size: cover;
		background-position: center;

		text-decoration: none;

		transition: transform 0.2s, box-shadow 0.2s;
	}

	a:hover {
		transform: translate(0, calc(var(--spacing) / -4));
		box-shadow: var(--shadow);
	}

	/* a:hover > .arrow {
		--c-content-0-l: var(--c-content-0-d);
		background-color: var(--c-accent-hover);
	} */

	/* Content */

	p {
		color: var(--c-content-0-l);
		font-size: clamp(var(--f-size-base), calc(var(--size) / 8), 24px);
	}

	.arrow {
		align-self: flex-end;
	}
</style>
