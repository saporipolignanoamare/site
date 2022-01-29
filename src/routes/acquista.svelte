<script lang="ts">
	import MainCta from '$lib/components/mainCta.svelte';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import type { IAcquista } from '$lib/types';

	import { getAcquistaText } from '$lib/requestsUtils/queries';
	import { locale, t } from '$lib/translations';

	import { LoadingScreen } from '$lib/components';
	import { numbers } from '$lib/stores';

	import { rws } from '$lib/utils';

	//

	const telVito = $numbers.fields.numeri.Vito;

	let promise: Promise<IAcquista>;
	$: {
		promise = getAcquistaText($locale);
	}
</script>

<!--  -->

{#await promise}
	<LoadingScreen />
{:then text}
	<div class="max-width">
		{@html documentToHtmlString(text.fields.testo)}
		<MainCta rel="external" href="https://wa.me/{rws(telVito)}">{$t('common.textUs')}</MainCta>
	</div>
{/await}

<!--  -->
<style>
	div {
		padding: var(--spacing);
	}
</style>
