<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Useful Hope Coaching Quotes</title>
	<meta name="description" content=""     />
	<!--
	<MetaTags
	  title="Using More of Config"
		titleTemplate = '%s | Svelte Meta Tags'
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
	<h1>Useful Hope Coaching Quotes</h1>
	<figure>
		<blockquote class="pullquote">
			<p>Thou shalt love thy neighbor as thyself.</p>
		</blockquote>
		<figcaption class="pullquote">
			Matthew 19:19
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Each time someone stands up for an ideal, or acts to improve the lot of others, or strikes out against injustice, he sends forth a tiny ripple of hope.</p>
		</blockquote>
		<figcaption class="pullquote">
			Robert F. Kennedy
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>When little people are overwhelmed by big emotions, it's our job to share our calm, not join their chaos.</p>
		</blockquote>
		<figcaption class="pullquote">
			L.R. Knost
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>This Order is built on breath. One, therefore, must safeguard his breath in the time of his inhalation and exhalation and in between.</p>
		</blockquote>
		<figcaption class="pullquote">
			Shah Naqshband
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>I am speaking to you with words and you're listening to the words that I'm saying. What I want to convey to you, and what you want to hear from me, cannot be said in words.</p>
		</blockquote>
		<figcaption class="pullquote">
			John G. Bennett 
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>We but mirror the world. All the tendencies present in the outer world are to be found in the world of our body. If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. This is the divine mystery supreme. A wonderful thing it is and the source of our happiness. We need not wait to see what others do.</p>
		</blockquote>
		<figcaption class="pullquote">
			Mahatma Gandhi
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The last of the human freedoms: to choose one's attitude in any given set of circumstances, to choose one's own way. And there were always choices to make. Every day, every hour, offered the opportunity to make a decision, a decision which determined whether you would or would not submit to those powers which threatened to rob you of your very self, your inner freedom; which determined whether or not you become the plaything to circumstance, renouncing freedom and dignity...</p>
		</blockquote>
		<figcaption class="pullquote">
			Victor Frankl, <em><cite>Man's Search For Ultimate Meaning</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Forgiveness is the only way to heal.</p>
		</blockquote>
		<figcaption class="pullquote">
			Don Miguel Ruiz, <em><cite>The Four Agreements</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Forgiveness is man's deepest need and highest achievement.</p>
		</blockquote>
		<figcaption class="pullquote">
			Horace Bushnell
		</figcaption>
	</figure>	
	<figure>
		<blockquote class="pullquote">
			<p>Those who tell the stories rule society.</p>
		</blockquote>
		<figcaption class="pullquote">
			Plato
		</figcaption>
	</figure>
		<figure>
		<blockquote class="pullquote">
			<p>Dignity does not consist in possessing honors, but in deserving them.</p>
		</blockquote>
		<figcaption class="pullquote">
			Aristotle
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The gold old days may not return<br>The rocks might melt, and the sea may burn</p>
		</blockquote>
		<figcaption class="pullquote">
			 Tom Petty, <em><cite>Learning To Fly</cite></em>
		</figcaption>
	</figure>
</div>
<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
