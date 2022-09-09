import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Collaboration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Self-Assessment Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-i88jc">`, ""}

<div class="${"content"}"><h1>Self-Assessment</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLScg8plrEczQJrD4fp_FZOEZszQoDNnZfeHidN5DTavAVLqrUw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Collaboration as default, hydrate, prerender, router };
