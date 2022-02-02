<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { categories, showLoading } from '$lib/stores';
	import { t } from '$lib/translations';
	import { Cta } from '$lib/components';
	import { Undo24 } from '$lib/icons';

	$showLoading = true;

	let param;
	if (browser) {
		let chunks = window.location.href.split('/');
		param = chunks[chunks.length - 1];
		if ($categories.map((c) => c.fields.slug).includes(param)) {
			goto('/' + param);
		} else {
			$showLoading = false;
		}
	}
</script>

<!--  -->

<div class="text-frame">
	{#if !$showLoading}
		<h1>404 – {$t('common.404')} :(</h1>
		<Cta href="/" icon={Undo24}>{$t('common.back')}</Cta>
	{/if}
</div>

<!--  -->
<style>
	div {
		height: 60vh;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: var(--c-main);
		margin-bottom: var(--spacing);
		text-align: center;
		display: block;
	}
</style>
