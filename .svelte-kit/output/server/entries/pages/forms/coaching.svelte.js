import { c as create_ssr_component } from "../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../chunks/env-08feb9ca.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Coaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Coaching Analysis Form</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-1necdh1">`, ""}

<div class="${"content"}"><h1>Coaching Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLSe7O2O-oMPwiyoZEfEILCBMt_yfRVBo-SfL5aRdU-oN8TbBDg/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Coaching as default, hydrate, prerender, router };
