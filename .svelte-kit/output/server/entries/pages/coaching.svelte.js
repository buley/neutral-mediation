import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
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
  return `${$$result.head += `${$$result.title = `<title>Conflict Coaching</title>`, ""}<meta name="${"description"}" content="${"About Neutral Mediation conflict coaching services."}" data-svelte="svelte-1rdmitj">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Conflict Consulting</h1>
</div>`;
});
export { Coaching as default, hydrate, prerender, router };
