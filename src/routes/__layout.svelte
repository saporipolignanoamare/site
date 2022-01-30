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
	import { getCategories, getPhoneNumbers } from '$lib/requestsUtils/queries';
	import { showMenu, categories, numbers } from '$lib/stores';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/env';

	import { Footer, Navbar, Menu, LoadingScreen } from '$lib/components';

	//

	// Serve a far chiudere il menù quando si clicca un link
	afterNavigate(() => {
		$showMenu = false;
	});

	//

	async function setup(locale: string) {
		//
		const categoriesReq = await getCategories(locale);
		$categories = categoriesReq;
		//
		const numbersReq = await getPhoneNumbers();
		$numbers = numbersReq;
		//
		return true;
	}

	let promise;
	$: {
		promise = setup($locale);
	}

	// Locks the scroll
	let body;
	let scrollPosition;
	$: if (browser) {
		body = document.body;
		if ($showMenu) {
			scrollPosition = window.pageYOffset;
			body.style.overflow = 'hidden';
			body.style.position = 'fixed';
			body.style.top = `-${scrollPosition}px`;
			body.style.width = '100%';
		} else {
			body.style.removeProperty('overflow');
			body.style.removeProperty('position');
			body.style.removeProperty('top');
			body.style.removeProperty('width');
			window.scrollTo(0, scrollPosition);
		}
	}
</script>

<!--  -->

<Navbar />

{#if $showMenu}
	<Menu />
{/if}

{#await promise}
	<LoadingScreen />
{:then response}
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
		background-color: white;
	}
</style>
