<script lang="ts">
	import MainCta from '$lib/components/mainCta.svelte';

	const telVito: string = '+39 373 511 6489';

	// Removes whitespace
	function rws(s: string): string {
		return s.replace(/\s/g, '');
	}
</script>

<div class="max-width">
	<h1>Come acquistare</h1>

	<p>Al momento il nostro e-commerce è in fase di costruzione, chiediamo scusa :)</p>
	<ol>
		<li>Fai una lista di tutti i prodotti che desideri acquistare, indicando le quantità.</li>
		<li>
			Invia la lista e l'indirizzo di spedizione al nostro numero whatsapp <a
				rel="external"
				href="https://wa.me/{rws(telVito)}">{telVito}</a
			>
		</li>
		<li>Il nostro operatore ti confermerà il totale (applicando eventuali sconti) e l'ordine</li>
		<li>
			Effettua il bonifico con l'importo confermato al seguente IBAN: <span
				>IT00000000000000000000</span
			>
		</li>
		<li>Attendi che le bontà arrivino a casa tua! :)</li>
	</ol>

	<MainCta rel="external" href="https://wa.me/{rws(telVito)}">Inviaci un messaggio!</MainCta>
</div>

<style>
	div {
		padding: var(--spacing);
	}

	h1,
	li {
		color: olive;
	}
</style>
