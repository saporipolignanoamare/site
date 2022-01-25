<script context="module">
	import { locale, loadTranslations } from '$lib/translations';

	export const load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = 'it';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<script lang="ts">
	import { getCategories } from '$lib/requestsUtils/queries';
	import type { ICategoria } from '$lib/types';
	import { showMenu, categories } from '$lib/stores';
	import { beforeNavigate } from '$app/navigation';

	import { Footer, Navbar, Menu, LoadingScreen } from '$lib/components';

	//

	// Serve a far chiudere il menù quando si clicca un link
	beforeNavigate(() => {
		$showMenu = false;
	});

	//

	async function setupCategories(locale: string) {
		const categoriesReq = await getCategories(locale);
		$categories = categoriesReq;
		return categoriesReq;
	}

	let promise: Promise<Array<ICategoria>>;
	$: {
		promise = setupCategories($locale);
	}
</script>

<!--  -->

{#await promise}
	<div>
		<LoadingScreen />
	</div>
{:then categories}
	<Navbar />
	<div class:lock-scroll={$showMenu}>
		<!--  -->
		{#if $showMenu}
			<Menu />
		{/if}
		<!--  -->
		<slot />
		<Footer />
	</div>
{:catch error}
	{JSON.parse(error.message).message}
{/await}

<!--  -->
<style>
	div {
		background-color: white;
		overflow-y: auto;
		flex-grow: 1;
	}

	.lock-scroll {
		overflow: hidden;
	}
</style>
