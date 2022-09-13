import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
var quotes_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Quotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Useful Quotes</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1fhm644">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Useful Quotes</h1>
	<ul class="${"centered-list"}"><li><a href="${"/pages/quotes/coaching"}">Useful Coaching Quotes</a></li>
		<li><a href="${"/pages/quotes/mediation"}">Useful Mediation Quotes</a></li>
		<li><a href="${"/pages/quotes/negotiation"}">Useful Negotiation Quotes</a></li></ul>
</div>`;
});
export { Quotes as default, hydrate, prerender, router };
