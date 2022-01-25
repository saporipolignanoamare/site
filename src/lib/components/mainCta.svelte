<script lang="ts">
	export let href: string;
	export let rel: 'external' | null = null;
	export let icon: Function | null = null;
</script>

<a {href} {rel}>
	{#if icon}
		<svelte:component this={icon} style="margin-right: 10px" />
	{/if}
	<slot />
</a>

<style>
	a {
		--cta-spacing: 10px;
		position: sticky;
		bottom: var(--spacing);
		margin-left: auto;
		margin-right: var(--cta-spacing);
		margin-bottom: var(--spacing);

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;

		padding: 15px 30px;
		border-radius: 50vmin;
		font-size: 20px;
		text-decoration: none;

		background-color: rgb(255, 217, 0);
		color: black;
		width: fit-content;

		white-space: nowrap;

		margin-top: var(--spacing);

		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	}
</style>
