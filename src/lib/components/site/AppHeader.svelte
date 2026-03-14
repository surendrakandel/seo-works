<script lang="ts">
	import { page } from '$app/state';
	import { researchSectionLinks } from '$lib/data/research-hub';

	function isActive(href: string) {
		const pathname = page.url.pathname;

		if (href === '/') {
			return pathname === href;
		}

		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="sticky top-0 z-50 px-4 pt-4 md:px-6">
	<div class="page-container">
		<div class="navbar shell-panel rounded-[1.6rem] px-4 md:px-6">
			<div class="navbar-start">
				<a href="/" class="group flex items-center gap-3 no-underline">
					<div
						class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary"
					>
						⬡
					</div>
					<div>
						<div class="font-heading text-xl font-bold tracking-[-0.04em] text-base-content">
							GENVLAB
						</div>
						<div class="text-xs uppercase tracking-[0.24em] text-base-content/50">Test lab</div>
					</div>
				</a>
			</div>

			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal gap-2 rounded-full bg-base-100/70 p-2">
					{#each researchSectionLinks as item}
						<li>
							<a
								href={item.href}
								class={`rounded-full px-4 py-2 text-sm font-semibold ${
									isActive(item.href) ? 'bg-primary text-primary-content' : ''
								}`}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="navbar-end gap-3">
				<a href="/vendors" class="btn btn-ghost hidden rounded-full px-5 md:inline-flex">
					Compare vendors
				</a>
				<a href="/peptides" class="btn btn-primary rounded-full px-5">Browse peptides</a>
			</div>
		</div>
	</div>

	<div class="page-container mt-3 lg:hidden">
		<div class="shell-panel rounded-[1.4rem] p-2">
			<div class="flex flex-wrap gap-2">
				{#each researchSectionLinks as item}
					<a
						href={item.href}
						class={`btn btn-sm rounded-full ${
							isActive(item.href) ? 'btn-primary' : 'btn-ghost'
						}`}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</header>
