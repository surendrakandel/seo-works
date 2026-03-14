<script lang="ts">
	import type { ResearchVendor } from '$lib/data/research-hub';

	interface Props {
		vendor: ResearchVendor;
	}

	let { vendor }: Props = $props();
</script>

<article class="card shell-panel h-full rounded-[1.8rem]">
	<div class="card-body gap-6">
		<div class="flex items-start justify-between gap-4">
			<div>
				<div class="section-kicker mb-4">Vendor template</div>
				<h3 class="text-3xl font-semibold text-base-content">{vendor.name}</h3>
				<p class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
					{vendor.region}
				</p>
			</div>
			<div class="badge badge-neutral rounded-full px-4 py-3">{vendor.priceTier}</div>
		</div>

		<p class="text-base leading-relaxed text-base-content/70">{vendor.summary}</p>

		<div class="grid gap-3">
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">Focus</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{vendor.focus}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
					Lab testing
				</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{vendor.labTesting}</div>
			</div>
			<div class="rounded-[1.2rem] border border-base-300 bg-base-100/80 p-4">
				<div class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
					Shipping
				</div>
				<div class="mt-1 text-sm font-semibold text-base-content">{vendor.shipping}</div>
			</div>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each vendor.highlights as highlight}
				<div class="badge badge-outline rounded-full px-4 py-3">{highlight}</div>
			{/each}
		</div>

		<div class="rounded-[1.2rem] bg-primary/8 p-4 text-sm leading-relaxed text-base-content/70">
			{vendor.warning}
		</div>
	</div>
</article>
