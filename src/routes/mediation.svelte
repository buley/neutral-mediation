<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
	import logo from '$lib/assets/Icon.png';
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<sveltekit:head>
	<title>Mediation</title>
	<meta name="description" content="Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral." />
	<JsonLd
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://neutrals.io/mediation'
    },
    headline: 'Mediation',
    image: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg'
    ],
    datePublished: '2015-02-05T08:00:00+08:00',
    dateModified: '2015-02-05T09:20:00+08:00',
    author: {
      '@type': 'Person',
      name: 'Taylor Buley'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neutral Mediation',
      logo: {
        '@type': 'ImageObject',
        url: ''
      }
    }
  }}
	/>
	<MetaTags
	  title="Mediation"
		titleTemplate = '%s | Neutral Mediation'
	  description="Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral."
	  canonical="https://neutrals.io/mediation"
	  openGraph={{
	    url: 'https://neutrals.io/mediation',
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
	    site_name: 'Neutral Mediation'
	  }}
	  twitter={{
	    handle: '@NeutralCA',
	    site: '@site',
	    cardType: 'summary_large_image',
	    title: 'Mediation',
	    description: 'Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral.',
	    image: {logo},
	    imageAlt: 'Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral.'
	  }}
	  facebook={{
	    appId: '235420558425239'
	  }}
	/>
</sveltekit:head>

<div class="content">
	<h1>Mediation</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral. <a href="/background">Read about our neutral here</a>. Optionally, a neutral can lead mediation services on-site at an organization or an agreed-upon location, per the <a href="/prices">travel policy</a>. <em>Mediation sessions start at $400 per participant.</em> For more information about lunch stipends for full-day mediation sessions, see our <a href="/prices">pricing page</a>. For individual-focused coaching sessions, see our <a href="/coaching">coaching page</a>. For neutral-led negotiation sessions, see our <a href="/negotiation">negotiation page</a>. For mediation and negotiation training, see our <a href="/training">training page</a>. For mediation, negotiation and conflict consulting for organizations, see our <a href="/consulting">consulting page</a>.
	</p>

	<h2>Our Value</h2>

	<p>
		Neutral Mediation helps customers move forward beyond emotional or complex conflict through confidential mediation sessions hosted virtually. Overcome indecision and end the trauma of conflict in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	<p>

	<h2>Our Services</h2>

	<h3>Mediation Sessions</h3>

	<p>Neutral-led virtual mediation session for four or eight hours, optionally on-site at an organization. Mediation engagements typically concern engineering internal mediation processes as a form of risk management. <em> Four-hour, half-day mediation sessions cost $400 per participant. Eight-hour, full-day mediation sessions cost $750 per person.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/e22010b4-e7df-49d8-a1db-0355e57895eb">Click here to book a mediation session</a>.</p>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual mediation consulting session for one, four, or eight hours, optionally on-site at an organization. Mediation engagements typically involve community facilitation, collaborative discussion, or designing internal mediation processes for risk management. <em>Mediation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e">Click here to book a consulting session</a>. For more information, see our <a href="/consulting">consulting page</a>.</p>

	<h3>Mediation Training</h3>

	<p>
		An eight-hour virtual training session on mediation, led by a neutral. Training is course-guided education. <em>Eight-hour mediation trainings for up to eight people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/37f300fe-158e-4963-8dac-bf092187ab1a">Click here to book a mediation training session</a>. For more information on trainings, including course content, see our <a href="/training">training page</a>.
	</p>

	<h3>More Information</h3>

	<ul>
		<li><a href="/pages/quotes/mediation">Mediation Quotes</a></li>
		<li><a href="/pages/mediation/what-mediation-is">What Mediation Is</a></li>
		<li><a href="/pages/mediation/benefits-of-mediation">Benefits of Mediation</a></li>
		<li><a href="/pages/mediation/mediation-confidentiality">Mediation Confidentiality</a></li>
		<li><a href="/pages/mediation/mediation-law">Mediation Law</a></li>
		<li><a href="/pages/mediation/example-mediation-scenarios">Example Mediation Scenarios</a></li>
		<li><a href="/pages/mediation/pillars-of-mediation">Pillars of Mediation</a></li>
		<!--<li><a href="/pages/mediation/limits-of-mediation">Limits of Mediation</a></li>-->
		<!--<li><a href="/pages/mediation/mediation-process">Mediation Process</a></li>-->
		<li><a href="/pages/mediation/who-mediators-are">Who Mediators Are</a></li>
		<!--<li><a href="/pages/mediation/how-to-involve-a-neutral">How to Involve a Mediator</a></li>-->
		<li><a href="/pages/mediation/how-mediators-create-value">How Mediators Create Value</a></li>
		<!--<li><a href="/pages/mediation/what-a-mediator-does">What a Mediator Does</a></li>-->
		<!--<li><a href="/pages/mediation/how-mediators-add-value">Why a Mediator Is Worthwhile</a></li>-->
	</ul>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
