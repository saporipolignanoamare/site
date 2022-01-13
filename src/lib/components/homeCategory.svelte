<script lang="ts">
	export let category;
</script>

<a href="/{category.slug}" style="--bg: url({category.immagine})">
	<p>
		{category.name}
	</p>
</a>

<style>
	a {
		width: 100%;
		max-width: 500px;
		display: block;
		padding: 20px 50px;
		background: linear-gradient(rgba(50, 50, 0, 0.4), rgba(50, 50, 0, 0.4)), var(--bg);
		background-size: cover;
		background-position: center;
		border-radius: 10px;
		margin-bottom: 10px;
		text-decoration: none;
		border-radius: 50vmin;
	}

	p {
		margin: 0;
		text-align: center;
		color: white;
		font-family: Affogato;
		font-size: 20px;
		font-weight: 500;
	}
</style>
