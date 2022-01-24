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

	import { Footer, Navbar, Menu, LoadingScreen } from '$lib/components';

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
	<LoadingScreen />
{:then categories}
	<Navbar />
	{#if $showMenu}
		<Menu />
	{:else}
		<div>
			<slot />
		</div>
		<Footer />
	{/if}
{:catch error}
	{JSON.parse(error.message).message}
{/await}

<!--  -->
<style>
	div {
		background-color: white;
	}
</style>
