import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var template_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Template = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Template</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1oj80vl">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Title</h3>
	<p>Body
	</p>
</div>`;
});
export { Template as default, hydrate, prerender, router };
