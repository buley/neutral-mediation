<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Neutral Mediation." />
</svelte:head>

<div class="content">
	
	<h1>About</h1>
	
	<h3>Mediator Bio</h3>

	<p>Taylor Buley leads Neutral Mediation and has been training peers in mediation since 1998. He founded his commercial alternative dispute resolution practice in 2021 to help people solve difficult, complicated and emotional problems using negotiation and mediation consultation, training, and sessions. He is passionate about proselytizing the power of peacemaking and welcomes in a group or private setting speaking opportunities to discuss decision making, conflict resolution and negotiation.</p>

	<p>Read about Taylor’s professional background as a journalist and software developer and current work as a technology and communications executive at a mid-sized, multimillion-dollar local media company. Taylor has a degree in Philosophy, Politics & Economics from the University of Pennsylvania, with a concentration on human choice and behavior. He has a master’s degree in Communications from Stanford University and is currently a study at Pepperdine University’s Caruso School of Law pursuing a master’s degree in Dispute Resolution.</p>

	<p>Taylor explains Neutral Mediation’s practice and style in the mission and culture statements below. He also wants you to know about Neutral Mediation’s approach to ethics, confidentiality and information security. He outlines his mediation process in detail.</p>

	<h3>Mission Statement</h3>

	<p>Neutral Mediation believes that adults are capable of finding mutually workable solutions to their own problems when provided the opportunity for exploring creative options in a safe and constructive environment. Neutral Mediation investigates solutions to challenging workplace, family, and neighborhood problems using informal and collaborative mediation and negotiation that harnesses the transformational power of dispute resolution to find a compromise, heal hurt and move people forward.</p>

	<h3>Culture Statement</h3>

	<p>Neutral Mediation exists to create an informal and safe environment for people to hear and be heard while pursuing creative options and solutions to relationship problems. It views each conflict as an opportunity for practicing peace and seeks resolution beyond dispute with empathy, education and empowerment.</p>

	<p>Neutral Mediation values, above all else, ethics and personal integrity. It believes that a mediator with integrity should be neutral in name, word and deed. It believes in trusting others, too, to do what they say act in accordance with their stated values. It believes that with diversity comes the blessing of multiple viewpoints and an opportunity for commonality. </p>

	<p>Neutral Mediation is relentlessly welcoming of diverse opinions and backgrounds. It believes in face-to-face meetings and taking people at face value. It believes in using first names, good faith and eye contact.</p>

	<p>Neutral Mediation encourages people to be friendly and empathetic, honest and direct, trustworthy, energetic, prepared, composed, positive and civilized. It believes in brainstorming, open-minds and the strengthening of communication through listening and storytelling. It believes in the power of emotional vulnerability to transform disputes. It believes not just that a neutral’s words matter and should be used only necessarily, but that her word matters and should be indefatigably trustworthy.</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
