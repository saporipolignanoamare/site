<script lang="ts">
	import { categories } from '$lib/stores';
	import { MenuLink } from '$lib/components';
</script>

<div class="menu">
	<div class="menu-content max-width">
		<MenuLink href="/">Home</MenuLink>
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
