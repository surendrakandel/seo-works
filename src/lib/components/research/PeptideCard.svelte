<script lang="ts">
	import type { ResearchPeptide } from '$lib/data/research-hub';

	interface Props {
		peptide: ResearchPeptide;
	}

	let { peptide }: Props = $props();
</script>

<article class="card shell-panel h-full rounded-[1.8rem]">
	<div class="card-body gap-6">
		<div class="flex items-start justify-between gap-4">
			<div>
				<div class="section-kicker mb-4">{peptide.category}</div>
				<h3 class="text-3xl font-semibold text-base-content">{peptide.name}</h3>
				<p class="mt-3 text-base leading-relaxed text-base-content/70">{peptide.summary}</p>
			</div>
			<div class="badge badge-success badge-outline rounded-full px-3 py-3">
				{peptide.evidenceLevel}
			</div>
		</div>

		<div class="grid gap-3 sm:grid-cols-2">
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">Route</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{peptide.admin}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">Dose</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{peptide.typicalDose}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">Cadence</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{peptide.cadence}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">Cycle</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{peptide.cycleLength}</div>
			</div>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each peptide.bestFor as focus}
				<div class="badge badge-neutral badge-outline rounded-full px-4 py-3">{focus}</div>
			{/each}
		</div>

		<div class="card-actions mt-auto flex-col gap-3 sm:flex-row">
			<a href={`/peptides/${peptide.slug}`} class="btn btn-primary rounded-full px-5">Open profile</a>
			<a href={`/peptides/${peptide.slug}/how-to-use`} class="btn btn-ghost rounded-full px-5">
				How to use
			</a>
		</div>
	</div>
</article>
