import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Layered = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Layered Conflict Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1qbkd9t">`, ""}

<div class="${"content"}"><h1>Layered Conflict Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSeRN1ZXoSwJWaq9Q677UDBhwpvNIehfVdrWp0G2-8gkIY9LCg/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Layered as default, hydrate, prerender, router };
