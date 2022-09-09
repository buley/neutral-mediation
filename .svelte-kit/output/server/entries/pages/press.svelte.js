import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var press_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Press = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Template</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1oj80vl">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>In The Press</h3>
	<p><em>Neutrals are available for comment on the topics of communication, negotiation, mediation and arbitration. For press inquiries, please contact <a href="${"mailto:info@neutrals.io"}">info@neturals.io</a>.</em></p>
</div>`;
});
export { Press as default, hydrate, prerender, router };
