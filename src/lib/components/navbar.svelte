<script lang="ts">
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { category, showMenu } from '$lib/stores';

	import Home24 from 'carbon-icons-svelte/lib/Home24/Home24.svelte';
	import Menu24 from 'carbon-icons-svelte/lib/Menu24/Menu24.svelte';
	import Close24 from 'carbon-icons-svelte/lib/Close24/Close24.svelte';

	let otherLocale;
	$: {
		otherLocale = $locale == 'it' ? 'en' : 'it';
	}
</script>

<!--  -->

<div class="navbar">
	<div class="navbar-content max-width">
		<!-- Left side -->
		<div class="side side-left">
			<!--  -->
			{#if $page.url.pathname != '/'}
				<a href="/" class="home nav-button">
					<Home24 style="fill: white" />
				</a>
			{/if}
			<!--  -->
			{#if $category && $page.params.category}
				<div class="category-container">
					<p class="title-small">SAPORI</p>
					<p class="category">{$category}</p>
				</div>
			{:else}
				<p class="title">Sapori</p>
			{/if}
			<!--  -->
		</div>

		<!-- Right side -->
		<div class="side side-right">
			<!-- Language button -->
			<button
				class="nav-button flag"
				on:click={() => {
					$locale = otherLocale;
				}}>{$t(`lang.${otherLocale}`)}</button
			>
			<!-- menu button here -->
			<button
				class="nav-button"
				on:click={() => {
					$showMenu = !$showMenu;
				}}
			>
				{#if !$showMenu}
					<Menu24 style="fill: white" />
				{:else}
					<Close24 style="fill: white" />
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
		background-color: var(--accent);
		border-bottom: var(--border);
	}

	.title-small {
		line-height: 1;
		color: rgba(255, 255, 255, 0.7);
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
		margin-left: 5px;
	}

	.side-right {
		margin-left: 20px;
	}

	/* Text */

	.title,
	.category {
		color: white;
		text-decoration: none;
	}

	.title {
		font-size: xx-large;
	}

	.category-container {
		flex-grow: 1;
	}

	.category {
		font-size: large;
		white-space: nowrap;
	}

	/* Buttons */

	.flag {
		font-size: 26px;
		padding-top: 5px;
	}

	.home {
		margin-right: 10px;
	}
</style>
