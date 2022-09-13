import { c as create_ssr_component } from "../../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../../chunks/env-6061fae6.js";
var emotions_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Emotions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<sveltekit:head><title>Emotions</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>
<div class="${"content svelte-cf77e8"}"><h1>Emotions</h1>

</div>`;
});
export { Emotions as default, hydrate, prerender, router };