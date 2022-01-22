<script context="module">
	import { t, locale, locales, loadTranslations } from '$lib/translations';

	export const load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = 'it';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { category } from '$lib/stores';

	import Home24 from 'carbon-icons-svelte/lib/Home24/Home24.svelte';

	//

	let otherLocale;
	$: {
		otherLocale = $locale == 'it' ? 'en' : 'it';
	}
</script>

<div class="navbar">
	<div class="navbar-content max-width">
		<!-- Left side -->
		<div>
			{#if $page.url.pathname != '/'}
				<a href="/" class="home nav-button">
					<Home24 style="fill: white" />
				</a>
			{/if}
			{#if $category && $page.params.category}
				<p class="category">{$category}</p>
			{:else}
				<p class="title">Sapori</p>
			{/if}
		</div>

		<!-- Right side -->
		<div>
			<button
				class="nav-button"
				on:click={() => {
					$locale = otherLocale;
				}}>{$t(`lang.${otherLocale}`)}</button
			>
			<!-- menu button here -->
		</div>
	</div>
</div>
<slot />

<style>
	/* Containers */

	.navbar {
		width: 100%;
		background-color: var(--accent);
		position: sticky;
		top: 0;
		z-index: 99;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
	}

	.navbar-content {
		padding: calc(var(--spacing) / 2) var(--spacing);
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
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

	.category {
		font-size: x-large;
	}

	/* Buttons */

	button {
		font-size: 26px;
		padding-top: 5px;
	}

	.home {
		margin-right: 5px;
	}
</style>
