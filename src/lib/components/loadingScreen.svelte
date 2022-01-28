<script lang="ts">
	import { t } from '$lib/translations';

	import { FillingDiv } from '$lib/components';
	import { SyncLoader } from 'svelte-loading-spinners';
</script>

<!--  -->

<FillingDiv>
	<div>
		<SyncLoader color="var(--accent)" />
		<p>{$t('common.loading')}</p>
	</div>
</FillingDiv>

<!--  -->
<style>
	div {
		width: 100%;
		height: 100%;

		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		padding: var(--spacing);
		padding-top: 0;

		background-color: white;
	}

	p {
		color: var(--accent);
	}
</style>
