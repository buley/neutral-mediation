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
	<title>Mediation</title>
	<meta name="description" content="What is mediation?" />
</svelte:head>

<div class="content">
	<h1>Mediation</h1>

	<h2>Our Practice</h2>

	<p>
		Neutral Mediation offers flexibly-scheduled virtual mediation sessions led by a trained professional neutral. <em>Mediation sessions start at $400 per participant.</em> For mediation consulting, see our <a href="/consulting">consulting page</a>. For more information about lunch stipends for full-day sessions, see our <a href="/pricing">pricing page</a>.
	</p>

	<h2>Our Value</h2>

	<p>
		Neutral Mediation helps customers move forward beyond emotional or complex conflict through confidential mediation sessions hosted virtually. Overcome indecision and end the trauma of conflict in as little as one session. Feel relieved and trust a professionally-trained neutral to create a safe environment to hear and be heard.
	<p>

	<h2>Our Services</h2>

	<h3>Mediation Sessions</h3>

	<p>Neutral-led virtual mediation session for four or eight hours, optionally on-site at an organization. Mediation engagements are typically in regard to engineering internal mediation processes as a form of risk management. <em>Four hour, half-day mediation sessions cost $400 per participant. Eight hour, full-day mediation sessions cost $750 per person.</em> <a href="hhttps://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/s532af24b61f10954cbaa5758ec8211ac41e0767d">Click here to book a mediation session</a>.</p>

	<h3>Mediation Consulting</h3>

	<p>Neutral-led virtual mediation consulting session for one, four or eight hours, optionally on-site at an organization. Mediation engagements are typically in regard to community facilitation, collaborative discussion, or designing internal mediation processes for risk management. <em>Mediation consulting costs $175 per hour per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e">Click here to book a consulting session</a>. For more information, see our <a href="/consulting">consulting page</a>.</p>

	<h3>Mediation Training</h3>

	<p>
		Neutral-led eight-hour virtual mediation training session. Training is course-guided education. <em>Eight-hour mediation trainings for up to 8 people cost $1,250 per participant.</em> <a href="https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/37f300fe-158e-4963-8dac-bf092187ab1a">Click here to book a mediation training session</a>. For more information on trainings, including course content, see our <a href="/training">training page</a>.
	</p>

	<h2>More Information</h2>

	<h3>What Is Mediation?</h3>
	<p>
		Mediation is the art of problem-solving: a structured dispute resolution process that creates a safe setting for adults to brainstorm creative and mutually workable solutions to the problems that keep them from otherwise moving forward in life. Using collaborative conflict, a mediator facilitates a mediation to help participants find peaceful resolutions, fast. Mediation is less formal than alternative methods of dispute resolution, such as arbitration and litigation, and usually takes one day or less to find an agreeable solution.
	</p>
	<p>
		Mediation is not legally binding. Agreements resulting from mediation can be written to be enforceable, but otherwise the process is, by default, private and confidential, unlike the public courts. Click here to read more about mediation confidentiality. In short, almost always, no information sourced from a mediation is admissible in court and a mediator is, almost always, ineligible to become a witness.
	</p>
	<p>
		Unlike litigation and arbitration, resolution during mediation is completely within the control of the participants, rather than up to the whims of third-party judges or juries. Also unlike arbitration and ligation, mediation helps to address the emotional issues that so often underpin discord, bringing much-needed healing and closure and, overall, more satisfaction — in no small part due to the participatory nature of mediated resolution. Like litigation, but often with more expedience, mediation allows for legally binding, monetary solutions; however, mediation is also a place for parties to explore, with the help of a mediator, creative and non-monetary options to negotiated situations.
	</p>
	<p>
		Read our ethics for Neutral Mediation’s views on the importance of neutrality, self-determination in mediation.
	</p>
	<h3>Benefits of Mediation</h3>
	<p>
		Mediation is helpful in solving problems with minimal damage to relationships. A resolution can be more difficult, but still achievable, when the parties are not likely to share a future. Mediation is a good choice for complex, emotionally charged disputes and a mediator can assist counsel by framing the options in a way that doesn’t compromise an advocate’s strong advocacy.
	</p>
	<p>
		While good mediation is often not cheap, and cheap mediation is often not good, the amount participants can expect to save overwhelmingly surpasses the expected costs to be otherwise endured. Those involved in the legal process will spend not just time and money, but also emotions. The opportunity cost of not pursuing other endeavors, rather than investing time, energy and money into legal remediation, can also be considerable.
	</p>
	<figure>
	    <blockquote class="pullquote">
	        <p>I was never ruined but twice, once when I lost a lawsuit and once when I won one.</p>
	    </blockquote>
	    <figcaption class="pullquote">Voltaire, <em>1694-1778</em></figcaption>
	</figure>
	<p>
		One way mediation helps reduce the costs of conflict is that it helps participants reach closure faster in time-sensitive matters, saving emotionally and financially-expensive, time-consuming litigation. By putting the process in the hands of participants, it also reduces uncertainty by eliminating the risk of, for example, summary judgment on one hand, lengthy proceedings on the other, or that a good case could go unheard, or that a mutually beneficial resolution option go unexplored, everywhere in between.
	</p>
	<p>
		Since most cases settle out of court, refusal to mediate doesn’t look good. In the case of so-called “998 offers” and other reasonable settlements, it’s possible for a party to recoup attempted mediation costs. The courts recognize that mediation is often faster, less expensive and more satisfactory than litigation and in many cases ends up requiring parties to mediate, anyways. In those cases, a mediated resolution will often result but parties lose control over choosing the mediator that works best for them.
	</p>
	<p>
		Read about booking options and familiarize yourself with the costs of mediation.
	</p>

	<h3>Example Mediation Scenarios</h3>

	<p>The usefulness of mediation grows with a problems distance from money. Difficult, complex and emotional issues are well within the erudite mediator’s wheelhouse. For example, meditation may be a good choice in these difficult situations:</p>
	    <ul>
	        <li>Commercial disputes</li>
	        <li>Divorce cases</li>
	        <li>Contract negotiations</li>
	        <li>Parent planning</li>
	        <li>Business dissolution</li>
	        <li>Property disputes</li>
	        <li>Landlord and tenant disputes</li>
	        <li>Neighborhood conflicts</li>
	        <li>Workplace conflicts </li>
	        <li>Condominium association disputes</li>
	        <li>Contract issues</li>
	        <li>Employment disputes</li>
	        <li>Government public outreach</li>
	        <li>Insurance disputes</li>
	        <li>Nursing home concerns</li>
	        <li>Personal injury</li>
	        <li>Trusts and estates</li>
	        <li>Communication conflicts</li>
	    </ul>
	<p>
	    Read about the mediation process and learn what to expect.
	</p>

	<h3>Pillars of Mediation</h3>

	<p>The pillars of mediation are that it's voluntary, neutral and confidential.</p>

	<h4>Self-Determination</h4>

	<p>Too often, convening the participants is the hardest phase of the mediation process. Not only is there paperwork necessary for a mediator to prepare, and legal documentation to sign helping to shore up its legal legitimacy, but it also takes courage by the parties on top of procedural determination to choose to mediate.</p>

	<p>That mutual self-determination -- each party choosing on their own terms to begin the end of a conflict by seeking a mediator's help -- is critical to the rampant success of mediation as a participant-controlled alternative to the courtroom. American participants report that -- simply by using age-old mediative techniques to communicate and negotiate plainly -- they are, overall, happier with outcomes compared to similar results obtained through the emotionally, financially and time-consuming modern legal system.</p>

	<p><a href="https://neutrals.io/ethics">Read about how ethics shape our approach to mediation. </a></p>

	<h4>Neutrality</h4>

	<p>A mediator involves themself in a dispute but has no skin in the game, as far as how it plays out, beyond being an enthusiastic, energetic and optimistic advocate of reaching a beneficial outcome for all concerned. A mediator's role is as a neutral third party. At the most fundamental level, a mediator simply connects with people to build the necessary trust that helps them lean into the emotional and often vulnerable discussions that are productive to move forward..</p>

	<p>A mediator states her goals clearly, aids participants in structuring the discussion space and timeline, asks difficult questions, says what needs to be said, doesn't say what needs to be held in confidence, and helps participants surmount the cognitive barriers to agreement.</p>

	<p>Through mediation, a neutral builds trust and rapport with clients by explaining and enforcing rules and order, communicating honestly and tactfully between parties while acting friendly and empathetic, validating but not acquiescent, to the viewpoints shared by participants. Likewise, and more importantly, a mediator helps participants to honor and understand the content and validity of <em>each other's</em> viewpoints, even and especially if they don't share them. She draws on experience and guile to come up with out-of-the-box solutions and aid in extracting appropriate concessions that, though perhaps hard to come by for participants on their own, benefit all involved.</p>

	<p><a href="http://neutrals.io/mediators">Read about mediators, what they do and how they add value to dispute resolution.</a></p>

	<h4>Confidentiality</h4>

	<p>Mediation is so valuable and confidentiality is such an important pillar of the process that mediation confidentiality is codified in state law in more than a dozen states -- including California, the state from which Neutral Mediation operates.</p>

	<p>The public benefit that results from a mediator's ability to create a safe environment to explore resolution options -- helping disputants "cut to the chase" in the roughly 19 out of 20 cases that settle before reaching the courtroom -- is so obvious that even those who profit from litigation swear by the power of <a href="https://neutrals.io/process">the mediation process</a> to benefit all concerned.</p>

	<p>Once a mediator is engaged after each party signs a <a href="https://neutrals.io/example-mediation-engagement-letter/">Mediation Engagement Letter</a>, <a href="https://neutrals.io/forms/mediation-disclosure-notification/">Mediation Disclosure Notification</a> and <a href="https://neutrals.io/confidentiality-agreement/">Confidentiality Agreement</a>, participants shore up their mutual assurance of legally-protected confidentiality and embark on a path to resolution that lets them move forward with the peace of mind that nothing from the process is admissible in court. After all, the parties have freely agreed in writing to mutual confidence through the well-known and well-specified private mediation process: it's hard to argue with mediation's proven ability to produce resolution beyond dispute.</p>

	<p><a href="https://neutrals.io/confidentiality">Read about mediation confidentiality -- and understand its limitations in and out of the courtroom.</a></p>


</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
