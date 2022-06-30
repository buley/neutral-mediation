import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
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
  return `${$$result.head += `${$$result.title = `<title>Conflict Consulting</title>`, ""}<meta name="${"description"}" content="${"About Neutral Mediation conflict consulting services."}" data-svelte="svelte-1adxap7">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Conflict Consulting</h1>
	
</div>`;
});
export { Consulting as default, hydrate, prerender, router };
