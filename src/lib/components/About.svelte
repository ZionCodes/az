<script>
	import automationzion from '#lib/assets/images/automationzion-profile.webp';
	import { Signature } from '#lib/components/spell/signature/index.js';
</script>

<section class="mx-auto max-w-4xl px-6 py-16 md:py-24">
	<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
		<div
			class="mx-auto aspect-square w-3/4 shrink-0 overflow-hidden rounded-xl border sm:mx-0 sm:aspect-3/4 sm:w-2/5"
		>
			<img
				src={automationzion}
				alt="Zion Gonet, GTM Systems Engineer"
				width="420"
				height="560"
				sizes="(min-width: 640px) 40vw, 75vw"
				loading="eager"
				fetchpriority="high"
				class="h-full w-full object-cover"
			/>
		</div>

		<div class="flex w-full flex-col gap-4 sm:w-3/5">
			<p class="flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
				<span class="inline-block h-px w-8 bg-foreground/30"></span>
				About Me
			</p>

			<h2 class="font-heading text-2xl font-medium text-foreground md:text-3xl md:leading-tight">
				I build systems.<br />Not just workflows.
			</h2>

			<p class="text-base leading-relaxed text-muted-foreground">
				I'm Zion, a GTM Systems Engineer with experience across automation tools, APIs, CRMs, and AI
				agents. I build end-to-end revenue infrastructure that eliminates repetitive work and lets
				teams scale without adding headcount.
			</p>

			<p class="text-base leading-relaxed text-muted-foreground">
				I've worked inside agencies and directly with clients, which means I understand both the
				technical side and the business problem behind every build.
			</p>

			<p class="text-base leading-relaxed text-muted-foreground">
				Outside of work, I enjoy the outdoors and I'm an avid reader, constantly exploring new
				ideas, technologies, and the principles and laws that govern our lives.
			</p>

			<div class="mt-2 origin-left scale-75 sm:scale-100">
				<Signature
					text="Zion Gonet"
					fontSize={32}
					color="var(--foreground)"
					duration={1.8}
					inView
					once={false}
					class="h-auto max-w-full"
				/>
			</div>
		</div>
	</div>
</section>
