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
			<p>It doesn't hurt me unless I interpret it's happening as harmful to me. I can choose not to.</p>
		</blockquote>
		<figcaption class="pullquote">
			Marcus Aurelius
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Another person will not hurt you without your cooperation. You are hurt the moment you believe yourself to be.</p>
		</blockquote>
		<figcaption class="pullquote">
			Epictetus
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>Keep in mind that it isn't the one who has it in for you and takes a swipe that harms you, but rather the harm comes from your own belief about the abuse. So when someone arouses your anger, know that it's really your own opinion fueling it. Instead, make it your first response not to be carried away by such impressions, for with time and distance self-mastery is more easily achieved.</p>
		</blockquote>
		<figcaption class="pullquote">
			Epictetus
		</figcaption>
	</figure>
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
	<figure>
		<blockquote class="pullquote">
			<p>Show respect to people who don't even deserve it; not as a reflection of their character, but as a reflection of yours.</p>
		</blockquote>
		<figcaption class="pullquote">
			Dave Willis
		</figcaption>
	</figure>
	<figure>
		<blockquote class="pullquote">
			<p>So other people hurt me? That's their problem. Their character and actions are not mine.</p>
		</blockquote>
		<figcaption class="pullquote">
			Marcus Aurelius
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
