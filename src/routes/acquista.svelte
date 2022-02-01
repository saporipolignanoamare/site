<script lang="ts">
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import { getAcquistaText } from '$lib/requestsUtils/queries';
	import type { IAcquista } from '$lib/types';

	import { locale, t } from '$lib/translations';
	import { rws } from '$lib/utils';
	import { numbers } from '$lib/stores';

	import { LoadingScreen, Cta, StickyBottom } from '$lib/components';
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
	<div class="steps text-frame">
		{@html documentToHtmlString(text.fields.testo)}
	</div>
	<StickyBottom>
		<Cta rel="external" href="https://wa.me/{rws(telVito)}" icon={Phone24}
			>{$t('common.textUs')}</Cta
		>
	</StickyBottom>
{/await}
