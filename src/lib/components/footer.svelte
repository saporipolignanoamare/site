<script lang="ts">
	const telVito: string = '+39 373 511 6489';
	const telAndrea: string = '+39 347 371 4781';

	// Removes whitespace
	function rws(s: string): string {
		return s.replace(/\s/g, '');
	}
</script>

<!--  -->

<div class="footer">
	<div class="footer-content max-width">
		<h2>Sapori</h2>
		<p>Polignano a Mare (BA) - IT</p>
		<hr />
		<p>Contatti:</p>
		<ul>
			<li>Vito: <a rel="external" href="https://wa.me/{rws(telVito)}">{telVito}</a></li>
			<li>Andrea: <a rel="external" href="https://wa.me/{rws(telAndrea)}">{telAndrea}</a></li>
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
