<script lang="ts">
	import { page } from '$app/stores';

	import NavLink from '$lib/components/navLink.svelte';
	import Home24 from 'carbon-icons-svelte/lib/Home24/Home24.svelte';
	import Menu24 from 'carbon-icons-svelte/lib/Menu24/Menu24.svelte';
</script>

<div class="navbar">
	<!-- Left side -->
	<div class="side side-right">
		{#if $page.url.pathname != '/'}
			<NavLink href="/" size="38px">
				<Home24 style="fill: white" />
			</NavLink>
		{/if}
		<a href="/" class="title">Sapori</a>
	</div>

	<!-- Right side -->
	<!-- <div class="side-right">
		<NavLink href="/" size="38px">
			<p class="flag">🇬🇧</p>
		</NavLink>
		<NavLink href="/" size="38px">
			<Menu24 style="fill: white" />
		</NavLink>
	</div> -->
</div>
<slot />

<style>
	.navbar {
		width: 100%;
		background-color: var(--accent);
		display: flex;
		flex-flow: row nowrap;
		position: sticky;
		top: 0;
		z-index: 99;
		padding: 10px 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
	}

	.title {
		color: white;
		font-size: xx-large;
		text-decoration: none;
	}

	.side {
		display: flex;
		flex-flow: row nowrap;
	}

	.side-right {
		gap: 10px;
	}
</style>
