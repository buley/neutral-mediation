import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-6061fae6.js";
var consulting_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Consulting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Consulting</title>
	<meta name="${"description"}" content="${"About Neutral Mediation conflict consulting services."}">
	</sveltekit:head>

<div class="${"content svelte-cf77e8"}"><h1>Consulting</h1>
	
	<h2>Our Practice</h2>
	<p>Neutral Mediation offers organizations flexible virtual options for   dispute resolution consulting services \u2014 such as public and private meeting facilitation, conflict audits and reporting, and dispute resolution systems design \u2014 tailored to meet specific business and nonprofit goals. <a href="${"/background"}">Read about our neutral here</a>. Optionally, consulting services can take place on-site at an organization or an agreed-upon location, per the <a href="${"/prices"}">travel policy</a>. <em>Consulting sessions cost $175 per hour per participant.</em> For individual-focused coaching sessions, see our <a href="${"/coaching"}">coaching page</a>. For neutral-led mediation sessions, see our <a href="${"/mediation"}">mediation page</a>. For neutral-led negotiation sessions, see our <a href="${"/negotiation"}">negotiation page</a>. For mediation and negotiation training, see our <a href="${"/training"}">training page</a>.
	</p>
	<h2>Our Value</h2>
	<p>A consultant spares emotional trauma, time, and expense associated with organizational systems that generate chronic conflict.
	</p>
	<p>A neutral creates a safe environment in which participants can develop rapport and explore the emotional vulnerability necessary to move beyond conflict. A neutral teaches and uses tools like active listening, empathy, and creativity to inspire team building, challenge limiting and false beliefs, and generate ideas that move people forward.
	</p>

	<h2>Our Services</h2>

	<h3>Conflict Consulting</h3>

	<p>A neutral-led conflict virtual training session for one, four, or eight hours. Conflict consulting engagements typically focus on addressing organizational systems that generate chronic conflict. <em>Conflict consulting costs $175 per hour per participant.</em> <a href="${"https://neutral.setmore.com/"}">Click here to book a conflict consultation</a></p>

	<h3>Mediation Consulting</h3>

	<p>A neutral-led virtual mediation consulting session for one, four, or eight hours, optionally on-site at an organization. Mediation engagements  typically concern community facilitation, collaborative discussion, or designing internal mediation processes for risk management.  <em>Mediation consulting costs $175 per hour per participant.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/sbcc6e0750eb25cc175571dd6570a5adc80e1aa1e"}">Click here to book a consulting session</a>. For neutral-led mediation sessions, see our <a href="${"/mediation"}">mediation page</a>.</p>

	<h3>Negotiation Consulting</h3>
	
	<p>A neutral-led virtual negotiation consulting session for one, four, or eight hours, optionally on-site at an organization. Consulting engagements typically concern analyzing or planning for a specific negotiation or similar set of negotiations. <em>Negotiation consulting costs $175 per hour per participant.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/services/5eb4c115-1efc-478d-b908-69875ef1303d"}">Click here to book a negotiation consulting session</a>.</p>

</div>`;
});
export { Consulting as default, hydrate, prerender, router };
