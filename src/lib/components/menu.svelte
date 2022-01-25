<script lang="ts">
	import { categories } from '$lib/stores';
	import { MenuLink } from '$lib/components';
	import Home24 from 'carbon-icons-svelte/lib/Home24/Home24.svelte';
	import ShoppingCart24 from 'carbon-icons-svelte/lib/ShoppingCart24/ShoppingCart24.svelte';
</script>

<div class="menu">
	<div class="menu-content max-width">
		<div class="space-before">
			<MenuLink href="/" icon={Home24}>Home</MenuLink>
			<MenuLink href="/acquista" icon={ShoppingCart24}>Acquista</MenuLink>
		</div>
		<hr />
		<div class="space-before">
			{#each $categories as category}
				<MenuLink href="/{category.fields.slug}">{category.fields.nomeCategoria}</MenuLink>
			{/each}
		</div>
	</div>
</div>

<style>
	.menu {
		background-color: olive;
		height: 100%;
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 99;
	}

	.menu-content {
		padding: var(--spacing);

		display: flex;
		flex-flow: column nowrap;
	}

	hr {
		border: none;
		border-top: var(--border);
		margin: var(--spacing) 0;
	}
</style>
