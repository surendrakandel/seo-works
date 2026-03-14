<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen">
	<main class="px-4 pb-4 pt-8 md:px-6 md:pb-6 md:pt-10">
		<div class="page-container section-stack">
			{@render children()}
		</div>
	</main>
</div>
