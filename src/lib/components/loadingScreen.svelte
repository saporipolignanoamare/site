<script lang="ts">
	import { t } from '$lib/translations';

	import { SyncLoader } from 'svelte-loading-spinners';
</script>

<!--  -->

<div>
	<SyncLoader color="var(--accent)" />
	<p>{$t('common.loading')}</p>
</div>

<!--  -->
<style>
	div {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		padding: var(--spacing);
		width: 100%;
	}

	p {
		color: var(--accent);
	}
</style>
