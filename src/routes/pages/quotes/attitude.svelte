<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Attitude Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Attitude Quotes</h1>
	<figure>
		<blockquote class="pullquote">
			<p>If you understand, things are just as they are; If you do not understand, things are just as they are.</p>
		</blockquote>
		<figcaption class="pullquote">
			Zen Proverb
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>If you are pained by external things, it is not that they pain you, but your own judgment of them; and it is in your power to wipe out that judgment now.</p>
		</blockquote>
		<figcaption class="pullquote">
			Marcus Aurelius, <em><cite>Meditations: A New Translation</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Why not choose not to react?</p>
		</blockquote>
		<figcaption class="pullquote">
			Ryan Holiday and Stephen Hanselman, <em><cite>The Daily Stoic</cite></em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>If a battle cannot be won,&nbsp;do not fight it.</p>
		</blockquote>
		<figcaption class="pullquote">
			Sun Tzu, <em>Art of War</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Here is a rule to remember in future, when anything tempts you to feel bitter: not 'This is misfortune,' but 'To bear this worthily is good fortune.'</p>
		</blockquote>
		<figcaption class="pullquote">
			Marcus Aurelius, <em>Meditations</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>I have gradually come to one negative conclusion about the good life. It seems to me that the good life is not any fixed state. It is not, in my estimation, a state of virtue, or contentment, or nirvana, or happiness. It is not a condition in which the individual is adjusted or fulfilled or actualized. To use psychological terms, it is not a state of drive-reduction, or tension-reduction, or homeostasis.</p>
		</blockquote>
		<figcaption class="pullquote">
			Carl Rogers, <em>Person to person</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Attach no importance to self-seeking, rejection, arrogance, oppression and enmity. Heed them not. Deal in the contrary way. Be kind in truth, not only in appearance and outwardly. Every soul of the friends of God must concentrate his mind on this, that he may manifest the mercy of God and the bounty of the Forgiving One. He must do good to every soul whom he encounters, and render benefit to him, becoming the cause of improving the morals and correcting the thoughts so that the light of guidance may shine forth and the bounty of His Holiness the Merciful One may encompass. Love is light in whatsoever house it may shine and enmity is darkness in whatsoever abode it dwell.</p>
		</blockquote>
		<figcaption class="pullquote">
			‘Abdu’l-Bahá, <em>Bahá’í World Faith</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>It is possible to curb your arrogance, to overcome pleasure and pain, to rise above your ambition, and to not be angry with stupid and ungrateful people— yes, even to care for them.</p>
		</blockquote>
		<figcaption class="pullquote">
			Marcus Aurelius
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>The angry man will defeat himself in battle as well as in life.</p>
		</blockquote>
		<figcaption class="pullquote">
			Samurai maxim
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>A warrior does not give up what he loves, he finds the love in what he does</p>
		</blockquote>
		<figcaption class="pullquote">
			Dan Millman, <em>Way of the Peaceful Warrior</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Everybody in the world is seeking happiness—and there is one sure way to find it. That is by controlling your thoughts. Happiness doesn't depend on outward conditions. It depends on inner conditions. It isn't what you have or who you are or what you are doing that makes you happy or unhappy. It is what you think about it.</p>
		</blockquote>
		<figcaption class="pullquote">
			Dale Carnegie,&nbsp;<em>How to Win Friends and Influence People</em>
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Toxic positivity is forced, false positivity.</p>
		</blockquote>
		<figcaption class="pullquote">
			Brené Brown
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
