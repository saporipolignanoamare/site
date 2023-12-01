<script lang="ts">
	import { categories } from '$lib/stores';
	import { t } from '$lib/translations';
	import { MenuLink, FillingDiv } from '$lib/components';
	import { Home24, ShoppingCart24 } from '$lib/icons';
</script>

<FillingDiv zIndex={99}>
	<div class="menu">
		<div class="max-width">
			<div class="col">
				<div class="space-before">
					<MenuLink href="/" icon={Home24}>Home</MenuLink>
					<MenuLink href="/acquista" icon={ShoppingCart24}>{$t('common.buy')}</MenuLink>
				</div>
				<hr />
				<div class="space-before">
					{#each $categories as category}
						<MenuLink href="/{category.fields.slug}">{category.fields.nomeCategoria}</MenuLink>
					{/each}
				</div>
			</div>
		</div>
	</div>
</FillingDiv>

<style>
	.menu {
		width: 100%;
		height: 100%;

		background-color: var(--c-main);
	}

	.col {
		padding: var(--spacing);
		display: flex;
		flex-flow: column nowrap;
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
	}

	hr {
		border: none;
		border-top: var(--border);
		margin: var(--spacing) 0;
	}
</style>
