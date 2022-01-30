<script lang="ts">
	import { t } from '$lib/translations';
	import { categories } from '$lib/stores';

	import { Carousel, HomeCategory } from '$lib/components';

	//

	const images: Array<string> = [];

	$categories.forEach((category) => {
		images.push(category.fields.immagine.fields.file.url + '?h=700&fm=jpg&fl=progressive');
	});
</script>

<!--  -->

<div class="heading">
	<Carousel {images} />
	<div class="intro-container">
		<h1>{$t('home.intro')}</h1>
	</div>
</div>

<div class="max-width content">
	<h1 class="cta">{$t('home.cta')}</h1>
	<div class="categories grid">
		{#each $categories as category}
			<HomeCategory {category} />
		{/each}
	</div>
</div>

<!--  -->
<style>
	h1 {
		font-weight: 400;
		text-align: center;
		color: white;
	}

	.cta {
		color: var(--c-main);
		font-weight: 400;
		text-align: center;
		margin-top: var(--spacing);
		padding: 0 var(--spacing);
	}

	.heading {
		height: 70vh;
		max-height: 700px;
		width: 100%;
		position: relative;
	}

	.intro-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;

		padding: var(--spacing);
		background-color: rgba(0, 0, 0, 0.3);
	}

	.categories {
		margin: 0 auto;
	}

	.content {
		padding: var(--spacing) 0;
	}
</style>
