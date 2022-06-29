import { c as create_ssr_component } from "../../chunks/index-b1570763.js";
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
	<h3>Mediation</h3>
	<ul><li>Meditation Training \u2013 Wednesdays</li>
	    <li>One-Hour Mediation Consultation \u2013 Thursdays</li>
	    <li>Two-Person Half-Day Mediation \u2013 Sundays</li>
	    <li>Four-Person Half-Day Mediation \u2013 Sundays</li>
	    <li>Two-Person Full-Day Mediation \u2013 Sundays</li>
	    <li>Four-Person Full-Day Mediation \u2013 Sundays</li></ul>
	<h3>Negotiation</h3>
	<ul><li>Negotiation Training \u2013 Wednesdays</li>
    	<li>One-Hour Negotiation Consultation \u2013 Fridays</li>
    	<li>Half-Day Negotiation \u2013 Sundays</li></ul>
</div>`;
});
export { Availability as default, hydrate, prerender, router };
