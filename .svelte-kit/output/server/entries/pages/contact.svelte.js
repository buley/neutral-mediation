import { c as create_ssr_component } from "../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var contact_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-b138pl{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.contact-us.svelte-b138pl{display:flex;flex-direction:row}.contact-form.svelte-b138pl{flex-basis:66.66%}.contact-information.svelte-b138pl{flex-basis:33.33%;padding:0 0 0 20px}@media(max-width: 767px){.contact-us.svelte-b138pl{flex-direction:column}.contact-form.svelte-b138pl{flex-basis:100%}.contact-information.svelte-b138pl{flex-basis:100%;padding:0 20px 0 20px}}")();
const css = {
  code: ".content.svelte-b138pl{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.contact-us.svelte-b138pl{display:flex;flex-direction:row}.contact-form.svelte-b138pl{flex-basis:66.66%}.contact-information.svelte-b138pl{flex-basis:33.33%;padding:0 0 0 20px}@media(max-width: 767px){.contact-us.svelte-b138pl{flex-direction:column}.contact-form.svelte-b138pl{flex-basis:100%}.contact-information.svelte-b138pl{flex-basis:100%;padding:0 20px 0 20px}}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Contact</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1wy3jb5">`, ""}

<div class="${"content svelte-b138pl"}"><h2>Contact</h2>
			
	<div class="${"contact-us svelte-b138pl"}"><div class="${"contact-form svelte-b138pl"}"><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLScFrBbM91WzZlL_9zUzinFJnLl62bl-Fe2bMMGCCzObtUWrqw/viewform"}" border="${"0"}" frame="${"0"}" height="${"600px"}" width="${"100%"}"></iframe></div>

		<div class="${"contact-information svelte-b138pl"}"><h3>Phone/Text Number</h3>
			<p><a href="${"tel:16503537653"}">650-353-7653</a></p>
			<h3>Email Address</h3>
			<p><a href="${"mailto:info@neutrals.io"}">info@neutrals.io</a></p>
			<h3>Mailing Address</h3>
			<p>PO Box 73444<br>
			Davis, CA 95617-3444</p>
			<small><em>Contact options ordered by neutral preference.</em></small></div></div>

</div>`;
});
export { Contact as default, hydrate, prerender, router };
