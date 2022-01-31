<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
</script>

<pre>{JSON.stringify($page.params, null, 2)}</pre>
{#if browser}
	{window.location.href}
{/if}
