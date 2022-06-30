import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var practices_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Practices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Template</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1oj80vl">`, ""}

<div class="${"content svelte-cf77e8"}"><h2>Practices</h2>
	<h3>Virtual Mediation</h3>
	<h3>Dress Code</h3>
	<h3>Formality</h3>
	<h3>Eye Contact</h3>
	<h3>Emotional Vulnerability</h3>
	<h3>Good Faith</h3>

</div>`;
});
export { Practices as default, hydrate, prerender, router };
