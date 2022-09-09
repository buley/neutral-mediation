import { c as create_ssr_component } from "../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var availability_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Availability = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Availability</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1470t3g">`, ""}

<div class="${"content svelte-cf77e8"}"><h2>Availability</h2>
	<p>Here&#39;s a list of what services are available when. Neutral Mediation&#39;s <a href="${"https://neutral.setmore.com/"}">booking schedule</a> is based around netural availability and the necessary length of the session.</p>
	<h3>Mediation</h3>
	<ul><li>Half-Day Mediations \u2013 Saturdays &amp; Sundays</li>
	    <li>Full-Day Mediations \u2013 Saturdays &amp; Sundays</li></ul>
	<h3>Negotiation</h3>
	<ul><li>Half-Day Negotiations \u2013 Saturdays &amp; Sundays</li>
    	<li>Full-Day Negotiations \u2013 Saturdays &amp; Sundays</li></ul>
	<h3>Training</h3>
	<ul><li>Meditation Trainings \u2013 Saturdays &amp; Sundays</li>
	    <li>Negotiation Trainings \u2013 Saturdays &amp; Sundays</li></ul>
	<h3>Consulting</h3>
	<ul><li>Mediation Consultations \u2013 Monday through Friday</li>
    	<li>Negotiation Consultations \u2013 Monday through Friday</li></ul>
	<h3>Coaching</h3>
	<ul><li>Conflict Coaching \u2013 Monday through Friday</li></ul>
</div>`;
});
export { Availability as default, hydrate, prerender, router };
