<script lang="ts">
	import { page } from '$app/stores';

	//

	export let href: string;
	export let icon: Function | null = null;

	//
	let isOpen: boolean = false;

	$: if ($page.url.pathname == href) {
		isOpen = true;
	} else {
		isOpen = false;
	}
</script>

<a class="btn" {href} class:open={isOpen} class:btn-base-d={!isOpen}>
	{#if icon}
		<svelte:component
			this={icon}
			style="fill: {isOpen ? 'var(--c-main)' : 'var(--c-content-0-l)'}; margin-right: var(--p-btn)"
		/>
	{/if}
	<slot />
</a>

<style>
	a {
		justify-content: flex-start;
		text-decoration: none;
		font-size: var(--f-size-base);
	}

	a:visited {
		color: var(--c-content-0-l);
	}

	.open {
		background-color: var(--c-content-0-l) !important;
		color: var(--c-main) !important;
	}
</style>
