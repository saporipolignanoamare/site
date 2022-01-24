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
	import { showMenu } from '$lib/stores';

	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Menu from '$lib/components/menu.svelte';
</script>

<!--  -->

<Navbar />
{#if $showMenu}
	<Menu />
{:else}
	<div>
		<slot />
	</div>
	<Footer />
{/if}

<!--  -->
<style>
	div {
		background-color: white;
	}
</style>
