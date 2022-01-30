<script lang="ts">
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { categories, showMenu, navHeight, getCategoryBySlug } from '$lib/stores';
	import type { ICategoria } from '$lib/types';

	import { Home24, Menu24, Close24 } from '$lib/icons';

	let category: ICategoria;
	$: if ($page.params.category) {
		category = getCategoryBySlug($categories, $page.params.category);
	}

	let otherLocale;
	$: {
		otherLocale = $locale == 'it' ? 'en' : 'it';
	}

	function changeLocale() {
		$locale = otherLocale;
	}

	function toggleMenu() {
		$showMenu = !$showMenu;
	}
</script>

<!--  -->

<div class="navbar" bind:clientHeight={$navHeight}>
	<div class="navbar-content max-width">
		<!-- Left side -->
		<div class="side side-left">
			<!-- Home button if page is not home -->
			{#if $page.url.pathname != '/'}
				<a href="/" class="home btn btn-base-d">
					<Home24 style="fill: var(--c-content-0-l)" />
				</a>
			{/if}
			<!-- Page title -->
			{#if category && $page.params.category}
				<div class="category-container">
					<p class="title-small">SAPORI</p>
					<p class="category">{category.fields.nomeCategoria}</p>
				</div>
			{:else}
				<p class="title">Sapori</p>
			{/if}
			<!--  -->
		</div>

		<!-- Right side -->
		<div class="side side-right">
			<!-- Language button -->
			<button class="btn btn-base-d" on:click={changeLocale}>
				<p class="flag">
					{$t(`lang.${otherLocale}`)}
				</p>
			</button>
			<!-- menu button here -->
			<button class="btn btn-base-d" on:click={toggleMenu}>
				{#if !$showMenu}
					<Menu24 style="fill: var(--c-content-0-l)" />
				{:else}
					<Close24 style="fill: var(--c-content-0-l)" />
				{/if}
			</button>
		</div>
	</div>
</div>

<!--  -->
<style>
	/* Containers */

	.navbar {
		width: 100%;
		background-color: var(--c-main);
		border-bottom: var(--border);

		position: sticky;
		top: 0;
		z-index: 100;
	}

	.navbar-content {
		padding: calc(var(--spacing) / 2) var(--spacing);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}

	/* Sides */

	.side {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}

	.side-left {
		justify-content: flex-start;
		flex-grow: 1;
	}

	.side-right > * + * {
		margin-left: calc(var(--spacing) / 4);
	}

	.side-right {
		margin-left: var(--spacing);
	}

	/* Text */

	.title {
		font-size: 30px;
		color: var(--c-content-0-l);
	}

	.category-container {
		flex-grow: 1;
	}

	.category {
		color: var(--c-content-0-l);
	}

	.title-small {
		line-height: 1;
		color: var(--c-content-1-l);
	}

	/* Buttons */

	.flag {
		width: 24px;
		height: 24px;
		font-size: 26px;
		text-align: center;
		line-height: 110%;
	}

	.home {
		margin-right: calc(var(--spacing) / 2);
	}
</style>
