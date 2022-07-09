<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Pillars of Coaching</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h1>Pillars of Coaching</h1>

	<p>
		A coach helps to develop the 8c’s & 5p’s of self: curiosity, compassion, clarity, connectedness, creativity, courage, confidence and calm; patience, presence, persistence, perspective and playfulness. To accomplish this, conflict coaching can help to instill mindfulness, honesty, vulnerability and accountability.
	</p>

 
	<h4>Mindfulness</h4>

	<p>
		The a growth mindset reframes negative experiences and encourages failure as an opportunity to learn and grow in areas in which you are not yet competent. Confidence increases as fear subsides amid self-honesty and incremental assessment.
	</p>

	<p>
		By changing the approach to being pushed outside our comfort zones we can be more resiliant, better at coping with failture, and thereby become more likely to challenge ourselves, developing true passions.
	</p>

	<h4>Honesty</h4>

	<p>
		Socratic questioning and utilitarian techniques help us iteratively dig into the problems that we face and how they impact us. To assess our options to move forward toward our goals, we must be honest about the meaningful positive and negative impacts of our choices. 
	</p>

	<h4>
		Vulnerability
	</h4>

	<p>
		Vulnerability creates bonding and trust in the face of the uncertainty of emotional exposure. This is a necessary step to be able to truly communicate with eachother -- to speak fully, and listen fully. It allows us to discuss the conflicts that face us freely, confidently and authentically. It encourages acceptance, confidence, respect, forgiveness, consistency and accountability
	</p>

	<h4>Acceptance</h4>

	<p>
		To fully understand what options and choices that we face, we must accept reality without precluding judgment. Acceptance of yourself, and others, and life circumstances. Anything can be changed as long once we can reflect on what it is and what it means.
	</p>

	<h4>Accountability</h4>

	<p>
		Regular coaching involves personal accountability for achieving the steps necessary to take steps toward our goals. A coach helps people remain accountable to themselves with simple tools like to-do lists, journaling and follow-up exercises.
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
