import { c as create_ssr_component } from "../../chunks/index-b1570763.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var recusal_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Recusal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Recusal</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-dahi0">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Recusal</h3>
	<p></p>
</div>`;
});
export { Recusal as default, hydrate, prerender, router };
