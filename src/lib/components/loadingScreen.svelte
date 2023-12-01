<script lang="ts">
	import { t } from '$lib/translations';

	import { FillingDiv } from '$lib/components';
	import { SyncLoader } from 'svelte-loading-spinners';
</script>

<!--  -->

<FillingDiv zIndex={98}>
	<div>
		<SyncLoader color="var(--c-main)" />
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

		background-color: var(--c-content-0-l);
	}

	p {
		color: var(--c-main);
	}
</style>
