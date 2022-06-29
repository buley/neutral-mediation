import { c as create_ssr_component } from "../../chunks/index-b1570763.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var resume_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Resume</title>`, ""}<meta name="${"description"}" content="${"Mediator resume"}" data-svelte="svelte-1ix8blg">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Mediator Resume</h3>
	<p></p>
</div>`;
});
export { Resume as default, hydrate, prerender, router };
