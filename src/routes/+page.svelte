<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<header class="bg-white py-24 border-b border-base-200">
  <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <div class="text-primary font-bold mb-4 uppercase tracking-[0.2em] text-xs">The Discovery Journal</div>
      <h1 class="text-6xl md:text-7xl font-black leading-[0.9] mb-6 tracking-tighter">
        Independent <span class="italic text-primary">Insights.</span>
      </h1>
      <p class="text-xl text-base-content/70 mb-8 leading-relaxed max-w-lg">
        Deep-dives into the products, platforms, and services shaping the modern economy. We explore the details so you don't have to.
      </p>
      <div class="flex gap-4">
        <a href="#feed" class="btn btn-primary btn-lg rounded-none px-12">Latest Reviews</a>
        <a href="/about" class="btn btn-ghost btn-lg rounded-none underline decoration-2">Our Process</a>
      </div>
    </div>
    <div class="hidden lg:block relative">
        <div class="p-10 border-2 border-black bg-white relative z-10">
            <h3 class="text-2xl font-black mb-4">Integrity First.</h3>
            <p class="text-sm opacity-70 leading-loose">
              Every review on this platform is the result of direct interaction and data-driven analysis. We provide information discovery for an informed world.
            </p>
        </div>
        <div class="absolute inset-0 bg-primary translate-x-3 translate-y-3 z-0"></div>
    </div>
  </div>
</header>

<main id="feed" class="max-w-7xl mx-auto px-6 py-20">
  <div class="flex justify-between items-end border-b-2 border-black mb-12 pb-4">
    <h2 class="text-2xl font-black uppercase">Recent Discoveries</h2>
    <p class="text-xs font-mono uppercase opacity-50">Updated daily // {new Date().toLocaleDateString()}</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
    {#each data.posts as post}
      <article class="flex flex-col gap-6 group">
        <div class="overflow-hidden bg-base-200 aspect-[4/3] relative">
            <img src={post.meta.image} alt={post.meta.title} class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute top-0 right-0 p-4">
                <div class="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    Tested
                </div>
            </div>
        </div>
        <div class="flex flex-col flex-grow">
          <div class="text-[10px] opacity-40 uppercase font-black tracking-widest mb-2">
            Published {post.meta.date}
          </div>
          <h2 class="text-3xl font-black leading-none mb-4 tracking-tighter hover:text-primary transition-colors cursor-pointer">
            <a href={post.path}>{post.meta.title}</a>
          </h2>
          <p class="text-base-content/60 text-sm leading-relaxed mb-6 line-clamp-3 italic">
            "{post.meta.description}"
          </p>
          
          <div class="mt-auto pt-6 border-t border-base-200 flex justify-between items-center">
            <a href={post.path} class="text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
              Read the Full Review →
            </a>
            {#if post.meta.client_url}
               <span class="text-[10px] font-mono opacity-30">External Verified Source</span>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>