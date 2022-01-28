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
	import { showMenu, categories } from '$lib/stores';
	import { afterNavigate } from '$app/navigation';

	import { Footer, Navbar, Menu, LoadingScreen } from '$lib/components';

	//

	// Serve a far chiudere il menù quando si clicca un link
	afterNavigate(() => {
		$showMenu = false;
	});

	//

	async function setupCategories(locale: string) {
		const categoriesReq = await getCategories(locale);
		$categories = categoriesReq;
		return true;
	}

	let promise;
	$: {
		promise = setupCategories($locale);
	}
</script>

<!--  -->

<Navbar />

{#if $showMenu}
	<Menu />
{/if}

{#await promise}
	<LoadingScreen />
{:then categories}
	<div>
		<slot />
	</div>
	<Footer />
{:catch error}
	{JSON.parse(error.message).message}
{/await}

<!--  -->
<style>
	div {
		padding-bottom: var(--spacing);
		background-color: white;
	}
</style>
