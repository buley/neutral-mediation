import { c as create_ssr_component } from "../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var refunds_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Refunds = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Refund Policy</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-erds7p">`, ""}

<div class="${"content svelte-cf77e8"}"><h3>Refund Policy</h3>
	<p>Neutral Mediation reserves the right to withdraw from an engagement at any time, for any reason, and, in that case, will refund all payments. It offers pro-rated refunds under certain conditions for recusal. Otherwise, there are no refunds for cancellation.
	</p>
</div>`;
});
export { Refunds as default, hydrate, prerender, router };
