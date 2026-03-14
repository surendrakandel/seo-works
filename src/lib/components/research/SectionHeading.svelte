<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
	}

	let { eyebrow, title, description, align = 'left' }: Props = $props();
</script>

<div class="max-w-3xl" class:mx-auto={align === 'center'} class:text-center={align === 'center'}>
	{#if eyebrow}
		<div class="section-kicker mb-4">{eyebrow}</div>
	{/if}
	<h2 class="text-4xl font-semibold text-base-content md:text-5xl">{title}</h2>
	{#if description}
		<p class="mt-4 text-lg leading-relaxed text-base-content/70 md:text-xl">{description}</p>
	{/if}
</div>
