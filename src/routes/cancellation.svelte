<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
    import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<svelte:head>
	<title>Cancellation Policy</title>
	<meta name="description" content="" />
	<!--
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | Neutral Mediation'
	  description="This example uses more of the available config options."
	  canonical="https://www.canonical.ie/"
	  openGraph={{
	    url: 'https://www.url.ie/a',
	    title: 'Open Graph Title',
	    description: 'Open Graph Description',
	    images: [
	      {
	        url: 'https://www.example.ie/og-image-01.jpg',
	        width: 800,
	        height: 600,
	        alt: 'Og Image Alt'
	      },
	      {
	        url: 'https://www.example.ie/og-image-02.jpg',
	        width: 900,
	        height: 800,
	        alt: 'Og Image Alt Second'
	      },
	      { url: 'https://www.example.ie/og-image-03.jpg' },
	      { url: 'https://www.example.ie/og-image-04.jpg' }
	    ],
	    site_name: 'SiteName'
	  }}
	  twitter={{
	    handle: '@handle',
	    site: '@site',
	    cardType: 'summary_large_image',
	    title: 'Using More of Config',
	    description: 'This example uses more of the available config options.',
	    image: 'https://www.example.ie/twitter-image.jpg',
	    imageAlt: 'Twitter image alt'
	  }}
	  facebook={{
	    appId: '1234567890'
	  }}
	/>
	-->
</svelte:head>

<div class="content">
	<h3>Cancellation Policy</h3>
	<p>
		Schedules are tight and abrupt cancellations can come at the opportunity cost of solving other customers' problems. A session or training can be rescheduled for a $175 fee any time up until seven calendar days before the scheduled engagement.
	</p>
	<p>
		Neutral Mediation does not consider a mediation session to be  scheduled until all parties complete the required paperwork and pay their participation fees, after which the neutral will send out, upon request, a Mediation Engagement Letter. Clients can reschedule a partially-scheduled meditation for a fee up until seven calendar days before the engagement date.
	</p>
	<p>
		Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and, in that case, will refund all payments. There are no refunds on canceled sessions and training except in the very narrow circumstances defined in the <a href="/refunds">refund policy</a>.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
