<script lang="ts">
	import type { HeroStat } from '$lib/data/research-hub';

	type PanelRow = {
		label: string;
		value: string;
	};

	interface Props {
		eyebrow: string;
		title: string;
		description: string;
		stats?: HeroStat[];
		ctaText: string;
		ctaHref: string;
		secondaryText?: string;
		secondaryHref?: string;
		panelTitle: string;
		panelDescription: string;
		panelRows: PanelRow[];
	}

	let {
		eyebrow,
		title,
		description,
		stats = [],
		ctaText,
		ctaHref,
		secondaryText,
		secondaryHref,
		panelTitle,
		panelDescription,
		panelRows
	}: Props = $props();
</script>

<section class="hero-shell rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
	<div class="grid gap-8 lg:grid-cols-[1.32fr_0.92fr] lg:gap-10">
		<div class="relative z-10">
			<div class="section-kicker mb-6">{eyebrow}</div>
			<h1 class="max-w-5xl text-5xl font-semibold leading-[0.98] text-base-content md:text-7xl">
				{title}
			</h1>
			<p class="mt-6 max-w-3xl text-xl leading-relaxed text-base-content/70 md:text-2xl">
				{description}
			</p>

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<a href={ctaHref} class="btn btn-primary btn-lg rounded-full px-8">{ctaText}</a>
				{#if secondaryText && secondaryHref}
					<a href={secondaryHref} class="btn btn-ghost btn-lg rounded-full px-8">
						{secondaryText}
					</a>
				{/if}
			</div>

			{#if stats.length > 0}
				<div class="mt-10 grid gap-4 md:grid-cols-3">
					{#each stats as stat}
						<div class="metric-tile rounded-[1.4rem] p-4 md:p-5">
							<div class="text-3xl font-semibold text-base-content">{stat.value}</div>
							<div class="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55">
								{stat.label}
							</div>
							<p class="mt-3 text-sm leading-relaxed text-base-content/70">{stat.detail}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="shell-panel rounded-[1.8rem] p-6 md:p-8">
			<div class="section-kicker mb-4">System design</div>
			<h3 class="text-3xl font-semibold text-base-content">{panelTitle}</h3>
			<p class="mt-3 text-base leading-relaxed text-base-content/70">{panelDescription}</p>

			<div class="mt-6 space-y-3">
				{#each panelRows as row}
					<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 px-4 py-4">
						<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
							{row.label}
						</div>
						<div class="mt-1 text-lg font-semibold text-base-content">{row.value}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
