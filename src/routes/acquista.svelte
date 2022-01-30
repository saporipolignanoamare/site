<script lang="ts">
	import MainCta from '$lib/components/mainCta.svelte';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import type { IAcquista } from '$lib/types';

	import { getAcquistaText } from '$lib/requestsUtils/queries';
	import { locale, t } from '$lib/translations';

	import { LoadingScreen } from '$lib/components';
	import { numbers } from '$lib/stores';

	import { rws } from '$lib/utils';

	import { Phone24 } from '$lib/icons';

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
	<div class="steps">
		{@html documentToHtmlString(text.fields.testo)}
	</div>
	<MainCta rel="external" href="https://wa.me/{rws(telVito)}" icon={Phone24}
		>{$t('common.textUs')}</MainCta
	>
{/await}

<!--  -->
<style>
	div {
		padding: calc(var(--spacing) * 2) var(--spacing);
		max-width: 600px;
		margin: 0 auto;
	}
</style>
