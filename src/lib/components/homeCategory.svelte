<script lang="ts">
	import type { ICategoria } from '$lib/types';

	export let category: ICategoria;

	//

	import SquareDiv from './squareDiv.svelte';
	import { ArrowRight24 } from '$lib/icons';

	//

	const src = category.fields.immagine.fields.file.url + '?w=300&h=300';
	const alt = category.fields.nomeCategoria;

	let size: number;
</script>

<SquareDiv side="100%">
	<a bind:clientWidth={size} href="/{category.fields.slug}" style="--size: {size}px">
		<img {src} {alt} />
		<div class="overlay">
			<p class="category">
				{category.fields.nomeCategoria}
			</p>
			<div class="arrow shadow btn btn-base-l">
				<svelte:component this={ArrowRight24} style="fill: var(--c-content-0-l)" />
			</div>
		</div>
	</a>
</SquareDiv>

<style>
	/* Container */

	a {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: calc(var(--size) / 10);
		overflow: hidden;
		text-decoration: none;
		transition: transform 0.2s, box-shadow 0.2s;
		background-color: var(--c-bg-footer);
	}

	a:hover {
		transform: translate(0, calc(var(--spacing) / -4));
		box-shadow: var(--shadow);
	}

	a:hover .arrow {
		--c-content-0-l: var(--c-content-0-d);
		background-color: var(--c-accent-hover);
	}

	/* Content */

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: calc(var(--size) / 10);

		background-color: rgba(0, 0, 0, 0.2);

		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
	}

	p {
		color: var(--c-content-0-l);
		font-size: clamp(var(--f-size-base), calc(var(--size) / 8), 24px);
	}

	.arrow {
		align-self: flex-end;
	}
</style>
