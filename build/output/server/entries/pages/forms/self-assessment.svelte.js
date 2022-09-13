import { c as create_ssr_component } from "../../../chunks/index-f900b887.js";
import { d as dev, b as browser } from "../../../chunks/env-6061fae6.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Self_assessment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<sveltekit:head><title>Root Emotional Analysis Form</title>
	<meta name="${"description"}" content="${""}">
	</sveltekit:head>

<div class="${"content"}"><h1>Root Emotional Analysis</h1>
	<p><iframe src="${"https://docs.google.com/forms/d/e/1FAIpQLScrvy6Q_V7OX4jpGjjzIZmjSqw6xjFsdtOTBHSfkmK7WxPNrg/viewform"}" border="${"0"}" style="${"width:100%;min-height:800px;"}"></iframe></p></div>`;
});
export { Self_assessment as default, hydrate, prerender, router };
