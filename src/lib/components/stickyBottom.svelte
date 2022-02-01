<div class="max-width">
	<slot />
</div>

<style>
	div {
		pointer-events: none;
		position: sticky;
		bottom: 0;
		padding-right: calc(var(--spacing) * 0.75);
		padding-bottom: calc(var(--spacing) * 2);
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		align-items: flex-end;
	}
</style>
