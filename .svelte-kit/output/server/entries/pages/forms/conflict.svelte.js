import { c as create_ssr_component } from "../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Conflict = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Conflict Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1041v3h">`, ""}

<div class="${"content"}"><h1>Conflict Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSegjktXgOVknEC-zcgfGfB9hjidZaViAuEB-V9WByqv4Jxa3Q/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Conflict as default, hydrate, prerender, router };
