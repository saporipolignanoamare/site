<script lang="ts">
	export let size: string;
	export let href: string;
</script>

<a {href} style="--size: {size}">
	<slot />
</a>

<style>
	a {
		width: var(--size);
		height: var(--size);
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		text-decoration: none;
	}
</style>
