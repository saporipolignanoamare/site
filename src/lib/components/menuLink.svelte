<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	let isOpen: boolean = false;

	$: if ($page.url.pathname == href) {
		isOpen = true;
	} else {
		isOpen = false;
	}
</script>

<a {href} class:open={isOpen} class:default={!isOpen}>
	<slot />
</a>

<style>
	a {
		display: block;
		padding: 10px;
		border-radius: 5px;
		font-size: 20px;
		text-decoration: none;
	}

	.open {
		background-color: white;
		color: olive;
	}

	.default {
		background-color: var(--button-bg);
		color: white;
	}

	.default:hover {
		background-color: var(--button-bg-hover);
	}
</style>
