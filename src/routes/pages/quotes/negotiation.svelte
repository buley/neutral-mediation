<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Useful Negotiation Quotes</title>
	<meta name="description" content=""     />
	<!--
<JsonLd
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://example.com/article'
    },
    headline: 'Article headline',
    image: [
      'https://example.com/photos/1x1/photo.jpg',
      'https://example.com/photos/4x3/photo.jpg',
      'https://example.com/photos/16x9/photo.jpg'
    ],
    datePublished: '2015-02-05T08:00:00+08:00',
    dateModified: '2015-02-05T09:20:00+08:00',
    author: {
      '@type': 'Person',
      name: 'John Doe'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Google',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.jpg'
      }
    }
  }}
/>
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
	<h1>Useful Negotiation Quotes</h1>
	<figure>
		<blockquote class="pullquote">
			<p>You train to become a warrior, not a fighter. The warrior knows the hell he can let loose, so he chooses the path of peace and respect.</p>
		</blockquote>
		<figcaption class="pullquote">
			Shi Yan You
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Genuine politics – politics worthy of the name, and the only politics I am willing to devote myself to – is simply a matter of serving those around us: serving the community, and serving those who will come after us. It's deepest roots are moral because it is a responsibility … [T]here is only one way to strive for decency, reason, responsibility, sincerity, civility, and tolerance, and that is decently, reasonably, responsibly, sincerely, civilly, and tolerantly. I'm aware that, in everyday politics, this is not seen as the most practical way of going about it.</p>
		</blockquote>
		<figcaption class="pullquote">
			Vaclav Havel
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>You negotiate with individuals, not averages.</p>
		</blockquote>
		<figcaption class="pullquote">
			James K. Sebenius, <em>Caveats for Cross-Border Negotiators</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.</p>
		</blockquote>
		<figcaption class="pullquote">
			Friedrich Nietzsche
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The society that separates its scholars from its warriors will have its thinking done by cowards and its fighting by fools.</p>
		</blockquote>
		<figcaption class="pullquote">
			Thucydides, <em>History of the Peloponnesian War</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>... like all self-fulfilling prophecies, hostile attitudes generate hostile realities.</p>
		</blockquote>
		<figcaption class="pullquote">
			 Ken Cloke and Joan Goldsmith, <em><cite>Resolving Conflicts at Work</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The most dangerous person is the one who listens, thinks and observes.</p>
		</blockquote>
		<figcaption class="pullquote">
			Bruce Lee
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>First, never use a one-size-fits-all decision-making process. Many decisions are reversible, two-way doors. Those decisions can use a light-weight process. For those, so what if you're wrong?<br>
			<br>
			…Second, most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow. Plus, either way, you need to be good at quickly recognizing and correcting bad decisions. If you're good at course correcting, being wrong may be less costly than you think, whereas being slow is going to be expensive for sure.</p>
		</blockquote>
		<figcaption class="pullquote">
			Jeff Bezos
		</figcaption>
	</figure>
	<figure>
	    <blockquote class="pullquote">
	        <p>I was never ruined but twice, once when I lost a lawsuit and once when I won one.</p>
	    </blockquote>
	    <figcaption class="pullquote">Voltaire</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Victory is reserved for those who are willing to pay its price.</p>
		</blockquote>
		<figcaption class="pullquote">
			Sun Tzu
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>It is necessary to develop a strategy that utilizes all the physical conditions and elements that are directly at hand. The best strategy relies upon an unlimited set of responses.</p>
		</blockquote>
		<figcaption class="pullquote">
			Morihei Ueshiba
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>I know they wanna see me go, I'm on a roll<br>I mean I'm back on this again, I'm here again<br>You know the truth, this not pretend, I'm not your friend<br>Not your guy, I'm not your buddy, show no lovin'</p>
		</blockquote>
		<figcaption class="pullquote">
			Drake, <em>6 Man</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Between an uncontrolled escalation and passivity, there is a demanding road of responsibility that we must follow.</p>
		</blockquote>
		<figcaption class="pullquote">
			Dominique de Villepin
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>It's almost inevitable there's going to be an escalation on both sides.</p>
		</blockquote>
		<figcaption class="pullquote">
			U.S. Representative Bill Luther
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>'You've worn me down' is an awful decision-making process. It's slow and de-energizing. Go for quick escalation instead—it's better.</p>
		</blockquote>
		<figcaption class="pullquote">
			Jeff Bezos
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Profit is a return on investment. Profit is not a reward for hard work or good ideas nor is it aimed at public prosperity or even self-satisfaction. It is a technical economic term, not a social or psychological concept.</p>
		</blockquote>
		<figcaption class="pullquote">
			Robert Solomon, <em><em>Ethics and Excellence</em></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>How did you go bankrupt?” Bill asked. “Two ways,” Mike said. “Gradually and then suddenly.</p>
		</blockquote>
		<figcaption class="pullquote">
			Ernest Hemingway, The Sun Also Rises
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>We are most likely to get angry and excited in our opposition to some idea when we ourselves are not quite certain of our own position, and are inwardly tempted to take the other side.</p>
		</blockquote>
		<figcaption class="pullquote">
			Thomas Mann, <em><cite>Buddenbrooks</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p><em>De gustibus non est disputandum, or de gustibus non disputandum est.</em></p>
			<p>In matters of taste, there can be no disputes.</p>
		</blockquote>
		<figcaption class="pullquote">
			Roman proverb
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>He'll never be frightened. He knows too damn much.</p>
		</blockquote>
		<figcaption class="pullquote">
			Ernest Hemingway, <em>The Sun Also Rises</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Just because someone tells you something with a lot of confidence and detail and emotion, it doesn't mean it actually happened. You need independent corroboration to know whether you're dealing with an authentic memory, or something that is a product of some other process.</p>
		</blockquote>
		<figcaption class="pullquote">
			Elizabeth Loftus
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Just the place for a Snark! I have said it twice: That alone should encourage the crew.</p>
			<p>Just the place for a Snark! I have said it thrice: What I tell you three times is true.</p>
		</blockquote>
		<figcaption class="pullquote">
			Lewis Carol, <em>The Hunting of the Snark</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Have a lot of ways of representing things. If one way doesn't work, switch quickly to another one.</p>
			<p>The important thing is not to persist; I think the reason most people fail is that they are too determined to make something work only because they are attached to it.</p>
		</blockquote>
		<figcaption class="pullquote">
			Richard Feynman
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
