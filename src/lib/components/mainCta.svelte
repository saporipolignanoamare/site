<script lang="ts">
	export let href: string;
	export let rel: 'external' | null = null;
	export let icon: Function | null = null;
</script>

<div class="max-width">
	<a {href} {rel} class="shadow">
		{#if icon}
			<svelte:component this={icon} style="margin-right: 10px" />
		{/if}
		<slot />
	</a>
</div>

<style>
	div {
		pointer-events: none;
		position: sticky;
		bottom: var(--spacing);
		padding-right: calc(var(--spacing) * 0.75);
		padding-bottom: var(--spacing);
	}

	a {
		pointer-events: auto;
		margin-left: auto;

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

		margin-top: var(--spacing);
	}

	a:hover {
		background-color: var(--c-accent-hover);
	}
</style>
