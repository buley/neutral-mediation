<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Forgiveness Quotes</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Forgiveness Quotes</h1>
	<figure>
		<blockquote class="pullquote">
			<p>Today, Creator, grant me the courage and the will to forgive the people I love the most. Help me to forgive	every injustice I feel in my mind, and to love other people unconditionally. I know the only way to heal all the pain in my heart is through forgiveness.</p>
			<p>Today, Creator, strengthen my will to forgive everyone who has hurt me, even if I believe the offense is unforgivable. I know that forgiveness is an act of self-love. Help me to love myself so much that I forgive every offense. Let me choose forgiveness because I don't want to suffer every time I remember the offense.</p>
			<p>Today, Creator, help me to heal all the guilt in my heart by accepting the forgiveness of everyone I have hurt in my life. Help me to sincerely recognize the mistakes I have made out of ignorance, and give me the wisdom	and determination to refrain from making the same mistakes. I know that love and forgiveness will transform every relationship in the most positive way.</p>
			<p>Thank you, Creator, for giving me the capacity to love and forgive. Today I open my heart to love and forgiveness, so that I can share my love without fear. Today I will enjoy a reunion with the people I love the most. Amen.</p>
		</blockquote>
		<figcaption class="pullquote">
			Don Miguel Ruiz, <em><cite>Prayers, A Communion with our Creator</cite></em>
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
