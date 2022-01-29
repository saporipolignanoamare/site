<script lang="ts">
	import { numbers } from '$lib/stores';
	import { rws } from '$lib/utils';

	const obj = $numbers.fields.numeri;
	const keys = Object.keys(obj);
</script>

<!--  -->

<div class="footer">
	<div class="footer-content max-width">
		<h2>Sapori</h2>
		<p>Polignano a Mare (BA) - IT</p>
		<hr />
		<p>Contatti:</p>
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
		background-color: lightgray;
	}

	.footer-content {
		padding: var(--spacing);
	}

	hr {
		border: none;
		border-top: 1px solid rgba(0, 0, 0, 0.3);
		margin: var(--spacing) 0;
	}

	h2,
	p,
	li,
	a {
		color: rgba(0, 0, 0, 0.3);
	}
</style>
