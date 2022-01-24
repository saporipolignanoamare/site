<script lang="ts">
	import { SyncLoader } from 'svelte-loading-spinners';
</script>

<div>
	<SyncLoader color="var(--accent)" />
	<p>Caricamento bontà</p>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		padding: 20px;
		height: 50vh;
	}

	p {
		color: var(--accent);
	}
</style>
