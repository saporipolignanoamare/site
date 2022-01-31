<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { categories } from '$lib/stores';

	let param;
	if (browser) {
		let chunks = window.location.href.split('/');
		param = chunks[chunks.length - 1];
		if (param in $categories.map((c) => c.fields.slug)) {
			goto('/' + param);
		}
	}
</script>

<pre>{JSON.stringify($page.params, null, 2)}</pre>
<pre>{JSON.stringify(
		$categories.map((c) => c.fields.slug),
		null,
		2
	)}</pre>
{#if browser}
	{param}
{/if}
