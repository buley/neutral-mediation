import { c as create_ssr_component } from "../../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../../chunks/env-08feb9ca.js";
var breathwork_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Breathwork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Breathwork</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-94w2b8">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Breathwork</h1>
</div>`;
});
export { Breathwork as default, hydrate, prerender, router };
