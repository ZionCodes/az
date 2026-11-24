<script>
	import automationzion from '#lib/assets/images/automationzion-profile.webp';
	import { Signature } from '#lib/components/spell/signature/index.js';
	import { playOnView } from '#lib/actions/playOnView.js';
</script>

<section class="mx-auto max-w-4xl px-6 py-16 md:py-24">
	<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
		<div
			class="mx-auto aspect-square w-3/4 shrink-0 overflow-hidden rounded-xl border sm:mx-0 sm:aspect-3/4 sm:w-2/5"
		>
			<img
				src={automationzion}
				alt="Zion Gonet, Automation Engineer and GTM Engineer"
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

			<h1 class="font-heading text-2xl font-medium text-foreground md:text-3xl md:leading-tight">
				I build the systems<br />your work runs on.
			</h1>

			<p class="text-base leading-relaxed text-muted-foreground">
				I'm Zion, an Automation Engineer and GTM Engineer. The copy-paste work and status chasing
				that used to eat hours of your team's week runs on its own, the same way every time. What's
				left is process and revenue infrastructure where
				<span class="hl-sweep" use:playOnView={{ class: 'hl-play', replayOnHover: false }}
					>nothing slips through the cracks</span
				>
				and the numbers read the same no matter who pulls the report.
			</p>

			<p class="text-base leading-relaxed text-muted-foreground">
				I've worked inside agencies and directly with clients, so I'm used to owning a project from
				the first scoping call to building the thing itself.
			</p>

			<p class="text-base leading-relaxed text-muted-foreground">
				Outside work I'm outdoors when I can be and reading when I can't.
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
