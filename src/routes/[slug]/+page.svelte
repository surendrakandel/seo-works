<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<article class="max-w-4xl mx-auto px-6 py-20">
  <div class="mb-12">
    <a href="/" class="text-xs font-bold uppercase tracking-widest text-primary">← Back to Feed</a>
    <h1 class="text-4xl font-black tracking-tighter mt-6 mb-4">{data.meta.title}</h1>
    <p class="text-xl opacity-60 italic">{data.meta.description}</p>
  </div>

  <div class="prose prose-lg max-w-none prose-img:rounded-xl prose-headings:font-black prose-a:text-primary">
    <svelte:component this={data.content} />
  </div>

  {#if data.meta.client_url}
    <div class="mt-20 p-10 bg-base-200 border-l-8 border-primary">
        <h3 class="text-2xl font-black mb-2 uppercase italic">Authority Referral</h3>
        <p class="mb-6 opacity-70 text-lg">Our editorial team has verified the compliance and service standards of this partner.</p>
        <a href={data.meta.client_url} target="_blank" class="btn btn-primary rounded-none px-10">Visit {data.meta.title} Official Site</a>
    </div>
  {/if}
</article>