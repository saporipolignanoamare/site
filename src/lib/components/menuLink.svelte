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

<a {href} class:open={isOpen} class:default={!isOpen}>
	{#if icon}
		<svelte:component this={icon} style="fill: {isOpen ? 'olive' : 'white'}; margin-right: 10px" />
	{/if}
	<slot />
</a>

<style>
	a {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;
		padding: 10px;
		border-radius: 5px;
		font-size: 20px;
		text-decoration: none;
	}

	.open {
		background-color: white;
		color: olive;
	}

	.default {
		background-color: var(--button-bg);
		color: white;
	}

	.default:hover {
		background-color: var(--button-bg-hover);
	}
</style>
