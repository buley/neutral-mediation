import { c as create_ssr_component } from "../../chunks/index-645d40f0.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Contact</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1wy3jb5">`, ""}

<div class="${"content svelte-cf77e8"}"><h2>Contact</h2>
			
	<h3>Phone/Text Number</h3>
	<p>(650) 353-7653</p>
	<h3>Email Address</h3>
	<p>info@neutrals.io</p>
	<h3>Mailing Address</h3>
	<p>PO Box 73444<br>
	Davis, CA 95617-3444</p>

</div>`;
});
export { Contact as default, hydrate, prerender, router };
