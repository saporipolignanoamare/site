<script lang="ts">
	export let href: string;
	export let rel: 'external' | null = null;
	export let icon: Function | null = null;
</script>

<a {href} {rel} class="shadow">
	{#if icon}
		<svelte:component this={icon} style="margin-right: 10px" />
	{/if}
	<slot />
</a>

<style>
	a {
		/* Serve perchè il contenitore per lo sticky avrà pointer-events: none */
		pointer-events: auto;

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;

		padding: 15px 30px;
		border-radius: 50vmin;
		text-decoration: none;

		background-color: var(--c-accent);
		color: var(--c-content-0-d);
		width: fit-content;

		white-space: nowrap;
	}

	a:hover {
		background-color: var(--c-accent-hover);
	}
</style>
