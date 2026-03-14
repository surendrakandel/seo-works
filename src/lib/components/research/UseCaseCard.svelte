<script lang="ts">
	import type { ResearchUseCase } from '$lib/data/research-hub';

	interface Props {
		useCase: ResearchUseCase;
		peptideNames: string[];
	}

	let { useCase, peptideNames }: Props = $props();
</script>

<article class="card shell-panel h-full rounded-[1.8rem]">
	<div class="card-body gap-6">
		<div class="flex items-start justify-between gap-4">
			<div>
				<div class="section-kicker mb-4">Use-case template</div>
				<h3 class="text-3xl font-semibold text-base-content">{useCase.title}</h3>
				<p class="mt-3 text-base leading-relaxed text-base-content/70">{useCase.summary}</p>
			</div>
			<div class="badge badge-success badge-outline rounded-full px-3 py-3">
				{useCase.evidenceLevel}
			</div>
		</div>

		<div class="grid gap-3 sm:grid-cols-2">
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
					Typical protocol
				</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{useCase.typicalProtocol}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
					Review window
				</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{useCase.reviewWindow}</div>
			</div>
		</div>

		<div>
			<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
				Related peptides
			</div>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each peptideNames as name}
					<div class="badge badge-neutral badge-outline rounded-full px-4 py-3">{name}</div>
				{/each}
			</div>
		</div>

		<p class="text-base leading-relaxed text-base-content/70">{useCase.quickAnswer}</p>

		<div class="card-actions mt-auto">
			<a href={`/use-cases/${useCase.slug}`} class="btn btn-primary rounded-full px-5">
				Open use case
			</a>
		</div>
	</div>
</article>
