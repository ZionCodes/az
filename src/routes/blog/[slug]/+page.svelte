<script>
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import PostDetail from '#lib/components/PostDetail.svelte';

	let { data } = $props();
	let post = $derived(data.post);
	let canonicalUrl = $derived(`https://www.automationzion.com${page.url.pathname}`);
	let ogImage = $derived(post.thumbnailUrl || 'https://www.automationzion.com/og/og-blog.png');

	// Every FAQ section in the CMS follows the same hand-written shape:
	// <p><strong>Question?</strong><br>Answer</p>, one per Q&A, right after an
	// <h2>FAQ</h2> heading. Parsing it out of the already-fetched article HTML
	// means FAQPage schema stays in sync with the visible content automatically,
	// no separate structured-data field to keep updated by hand.
	function extractFaqItems(articleHtml) {
		if (!articleHtml || !articleHtml.includes('<h2>FAQ</h2>')) return [];
		const stripTags = (html) => html.replace(/<[^>]+>/g, '').trim();
		const pattern = /<p><strong>([^<]+?\?)<\/strong><br\s*\/?>\s*([\s\S]*?)<\/p>/g;
		const items = [];
		let match;
		while ((match = pattern.exec(articleHtml)) !== null) {
			items.push({ question: stripTags(match[1]), answer: stripTags(match[2]) });
		}
		return items;
	}

	let faqItems = $derived(extractFaqItems(post.article));

	let jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'BlogPosting',
					headline: post.title,
					description: post.introduction,
					image: ogImage,
					datePublished: new Date(post.created).toISOString(),
					author: {
						'@type': 'Person',
						name: 'Zion Gonet',
						url: 'https://www.automationzion.com/about'
					},
					publisher: {
						'@type': 'Organization',
						name: 'AutomationZion',
						logo: { '@type': 'ImageObject', url: 'https://www.automationzion.com/og/og-home.png' }
					},
					mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }
				},
				...(faqItems.length
					? [
							{
								'@type': 'FAQPage',
								mainEntity: faqItems.map((item) => ({
									'@type': 'Question',
									name: item.question,
									acceptedAnswer: { '@type': 'Answer', text: item.answer }
								}))
							}
						]
					: [])
			]
		})
	);
	let jsonLdScriptTag = $derived(
		'<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>'
	);
</script>

<svelte:head>
	<title>{post.title} — AutomationZion</title>
	<meta name="description" content={post.introduction} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={post.title} />
	<meta property="og:site_name" content="AutomationZion" />
	<meta property="og:description" content={post.introduction} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={new Date(post.created).toISOString()} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.introduction} />
	<meta name="twitter:image" content={ogImage} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- server-built JSON.stringify output, not user input -->
	{@html jsonLdScriptTag}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="grow">
		<PostDetail {post} backHref="/blog" backLabel="Back to Blog" />
	</main>
	<Footer />
</div>
