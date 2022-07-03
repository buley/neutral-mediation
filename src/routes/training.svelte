<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Training</title>
	<meta name="description" content="" />
</svelte:head>

<div class="content">

	<h1>Training</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual training and practice for people and organizations, optionally on-site at an customer facility. <em>Training sessions start at $1250 per day per participant.</em> For more information about lunch stipends for full-day negotiation sessions, see our <a href="/pricing">pricing page</a>.
	</p>

	<h2>Our Value</h2>

	<p>
		A trained conflict resolution professional helps minimize the trauma, time and expense associated with dealing with the conflict that pervades daily life. By training to recognize how to effectively manage conflict, either informally in negotiation or more formally in mediation processes, trainees are empowered to take the most efficient path to problem solving in their own lives. With confidence in peacemaking skills comes improved wellbeing for themselves and those with whom they interact.
	</p>

	<h2>Our Services</h2>

	<h3>Mediation Training</h3>

	<p>
		Neutral-led eight-hour virtual mediation training session. Training is course-guided education. <em>Eight-hour mediation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://neutral.setmore.com/">Click here to book a mediation training session</a>.
	</p>

	<p>
		Mediation training covers theory and practice with mediation protocol, openings, information exchanges and dealmaking. It trains individuals to become confident third-party neutrals capable of leading peer mediation.
	</p>

	<h3>
		Negotiation Training
	</h3>

	<p>
		Neutral-led negotiation virtual training session for one, four or eight hours. Training can be course-guided education or specifically-focused training around a specific negotiation. <em>Eight-hour negotiation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/076b423b-4479-480d-8af1-09e3c7cfcdad">Click here to book a negotiation training session</a>.
	</p>

	<p>
		Negotiation training covers negotiation theory and practice. It covers common negotiation styles, positional and interest-based bargaining, negotiation leverage and principles, cognitive factors in negotiation, emotions, ethics and group bargaining. It trains invididuals to become negotiators who maximize value for all concerned.
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
