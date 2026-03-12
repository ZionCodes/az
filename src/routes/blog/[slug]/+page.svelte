<script>
  import SvelteSeo from "svelte-seo";
  import automationzion from '$lib/images/automationzion profile.webp';
  let { data } = $props();
  const { post } = data;
</script>

<SvelteSeo
  title={post.title}
  description={post.introduction}
  canonical="https://www.automationzion.com/blog/{post.slug}"
  openGraph={{
    title: `${post.title}`,
    description: `${post.introduction}`,
    image: `https://call-until.pockethost.io/api/files/posts/${post.id}/${post.thumbnail}`,
    type: "article",
    site_name: "Automation Zion",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@AutomationZion",
    title: `${post.title}`,
    description: `${post.introduction}`,
    image: `https://call-until.pockethost.io/api/files/posts/${post.id}/${post.thumbnail}`,
  }}
/>

<div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div class="max-w-2xl">

    <!-- Back link -->
    <div class="mb-6">
      <a
        class="inline-flex items-center gap-x-1.5 text-sm font-mono text-neutral-400 hover:text-[#ff0] transition-colors focus:outline-none"
        href="/blog"
      >
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Back to Blog
      </a>
    </div>

    <!-- Author row -->
    <div class="flex items-center gap-x-4 mb-8">
      <img
        class="size-10 rounded-full object-cover"
        src={automationzion}
        alt="Zion Gonet"
      />
      <div>
        <p class="text-sm font-semibold text-white">Zion Gonet</p>
        <ul class="text-xs text-neutral-500 flex gap-x-3 mt-0.5">
          {#if post.created}
            <li>{new Date(post.created).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</li>
          {/if}
          <li>8 min read</li>
        </ul>
      </div>
    </div>

    <!-- Article -->
    <div class="space-y-5 md:space-y-8">
      <h1 class="text-2xl font-bold md:text-3xl text-white">{post.title}</h1>

      <div class="text-base prose dark:prose-invert leading-relaxed max-w-none">
        {@html post.article}
      </div>
    </div>

    <!-- CTA at bottom -->
    <div class="mt-12 pt-8 border-t border-white/10">
      <p class="text-xs font-mono text-[#ff0] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
        <span class="inline-block w-8 h-px bg-[#ff0]"></span>
        Work with me
      </p>
      <p class="text-neutral-400 text-sm mb-4">
        Want to build something like this for your business? Let's talk.
      </p>
      <a
        href="https://cal.com/automationzion/intro-call"
        target="_blank"
        class="inline-flex items-center gap-x-2 py-3 px-6 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full hover:opacity-90 transition-opacity"
      >
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Book a Free Call
      </a>
    </div>

  </div>
</div>