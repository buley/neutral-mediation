import { c as create_ssr_component } from "../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Emotional = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Emotional Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-ras8ed">`, ""}

<div class="${"content"}"><h1>Emotional Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSc8uzawnJQMarzp0vGu-_MjpmY17asHf_vPMxcvWWM5rldVVw/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Emotional as default, hydrate, prerender, router };
