import { c as create_ssr_component } from "../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var coaching_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Coaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Conflict Coaching</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1kiockd">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Conflict Coaching</h1>
	<h2>Our Practice</h2>
	<p>Neutral Mediation offers flexibly-scheduled virtual conflict coaching sessions led by a trained professional neutral. <em>Conflict coaching sessions cost $175 per hour per participant.</em> For neutral-led mediation sessions, see our <a href="${"/mediation"}">mediation page</a>. For neutral-led negotiation sessions, see our <a href="${"/mediation"}">mediation page</a>. For mediation and negotiation training, see our <a href="${"/training"}">training page</a>. For mediation, negotiation and conflict consulting, see our <a href="${"/consulting"}">consulting page</a>.
	</p>
	<h2>Our Value</h2>
	<p>Coaching can help you be more positive and reduce negative emotions. It empowers you to feel more confident and make hard more decisions more rationally. With the help of a third-party, you can learn to minimize anxiety and worrying, stop self-sabotaging behaviors, and end procrastination. Manage anger and cope with stressful emotions better under the help and accountability of a trained coaching professional dedicated to your progress.
	</p>

	<h2>Our Services</h2>

	<h3>Coaching Sessions</h3>

	<p>Neutral-led virtual coaching session. <em>One hour sessions cost $175 per participant.</em> <a href="${"https://booking.setmore.com/scheduleappointment/825a522f-34f5-4a37-98e1-668e1788cb07/class/e22010b4-e7df-49d8-a1db-0355e57895eb"}">Click here to book a mediation session</a>.</p>
	<h3>More Information</h3>

	<ul><li><a href="${"/pages/coaching/what-is-conflict-coaching"}">What Conflict Coaching Is</a></li>
		<li><a href="${"/pages/coaching/benefits-of-conflict-coaching"}">Benefits of Conflict Coaching</a></li>
		<li><a href="${"/pages/coaching/example-conflict-coaching-scenarios"}">Example Conflict Coaching Scenarios</a></li>
		<li><a href="${"/pages/coaching/limitations-of-conflict-coaching"}">Limitations of Conflict Coaching</a></li>
		<li><a href="${"/pages/coaching/pillars-of-conflict-coaching"}">Pillars of Conflict Coaching</a></li>
		<li><a href="${"/pages/coaching/conflict-coaching-process"}">Conflict Coaching Process</a></li></ul>

</div>`;
});
export { Coaching as default, hydrate, prerender, router };
