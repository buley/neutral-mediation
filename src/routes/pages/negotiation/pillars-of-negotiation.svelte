<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Pillars of Negotiation</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">
	<h3>Pillars of Negotiation</h3>
	
	<p>
		The pillars of mediation are that it's voluntary and neutral.
	</p>

	<h4>Self-Determination</h4>

	<p>
		Too often, convening the participants is the hardest phase of the mediation process. Not only is there paperwork necessary for a mediator to prepare, and legal documentation to sign helping to shore up its legal legitimacy, but it also takes courage by the parties on top of procedural determination to choose to mediate.
	</p>

	<p>
		That mutual self-determination &emdash; each party choosing on their own terms to begin the end of a conflict by seeking a mediator's help &emdash; is critical to the rampant success of mediation as a participant-controlled alternative to the courtroom. American participants report that &emdash; simply by using age-old mediative techniques to communicate and negotiate plainly &emdash; they are, overall, happier with outcomes compared to similar results obtained through the emotionally, financially and time-consuming modern legal system.
	</p>

	<p>
		<a href="https://neutrals.io/ethics">Read about how ethics shape our approach to negotiation.</a>
	</p>

	<h4>Neutrality</h4>

	<p>A mediator involves themself in a dispute but has no skin in the game, as far as how it plays out, beyond being an enthusiastic, energetic and optimistic advocate of reaching a beneficial outcome for all concerned. A mediator's role is as a neutral third party. At the most fundamental level, a mediator simply connects with people to build the necessary trust that helps them lean into the emotional and often vulnerable discussions that are productive to move forward..</p>

	<p>A mediator states her goals clearly, aids participants in structuring the discussion space and timeline, asks difficult questions, says what needs to be said, doesn't say what needs to be held in confidence, and helps participants surmount the cognitive barriers to agreement.</p>

	<p>Through mediation, a neutral builds trust and rapport with clients by explaining and enforcing rules and order, communicating honestly and tactfully between parties while acting friendly and empathetic, validating but not acquiescent, to the viewpoints shared by participants. Likewise, and more importantly, a mediator helps participants to honor and understand the content and validity of <em>each other's</em> viewpoints, even and especially if they don't share them. She draws on experience and guile to come up with out-of-the-box solutions and aid in extracting appropriate concessions that, though perhaps hard to come by for participants on their own, benefit all involved.</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
