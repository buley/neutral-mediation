import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Goals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Goal Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-gf3ms">`, ""}

<div class="${"content"}"><h1>Goal Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSdeRm9vg250M0qh7HohEryMR3ChC1SFsM8HMYGCznNewrQ35w/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Goals as default, hydrate, prerender, router };
