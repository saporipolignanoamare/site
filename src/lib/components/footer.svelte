<script lang="ts">
	import { numbers } from '$lib/stores';
	import { rws } from '$lib/utils';
	import { t } from '$lib/translations';

	const obj = $numbers.fields.numeri;
	const keys = Object.keys(obj).sort();
</script>

<!--  -->

<div class="footer">
	<div class="footer-content max-width">
		<h2>Sapori</h2>
		<p>Polignano a Mare (BA) - IT</p>
		<hr />
		<p>{$t('common.contacts')} (WhatsApp):</p>
		<ul>
			{#each keys as key}
				<li>{key}: <a rel="external" href="https://wa.me/{rws(obj[key])}">{obj[key]}</a></li>
			{/each}
		</ul>
	</div>
</div>

<!--  -->
<style>
	.footer {
		background-color: var(--c-bg-footer);
	}

	.footer-content {
		padding: var(--spacing);
	}

	hr {
		border: none;
		border-top: 1px solid var(--c-content-footer);
		margin: var(--spacing) 0;
	}

	h2,
	p,
	li,
	a {
		color: var(--c-content-footer);
	}

	a:hover {
		color: var(--c-content-0-d);
	}

	li {
		margin-top: calc(var(--spacing) / 4);
	}
</style>
