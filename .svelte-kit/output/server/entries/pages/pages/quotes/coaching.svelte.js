import { c as create_ssr_component } from "../../../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../../../chunks/env-08feb9ca.js";
var coaching_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Coaching = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Coaching Quotes</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-13l7c5w">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>Coaching Quotes</h1>
	<ul class="${"centered-list"}"><li><a href="${"/pages/quotes/attitude"}">Attitude Quotes</a></li>
		<li><a href="${"/pages/quotes/emotion"}">Emotion Quotes</a></li>
		<li><a href="${"/pages/quotes/forgiveness"}">Forgiveness Quotes</a></li>
		<li><a href="${"/pages/quotes/hope"}">Hope Quotes</a></li>
		<li><a href="${"/pages/quotes/politics"}">Politics Quotes</a></li>
		<li><a href="${"/pages/quotes/reflection"}">Reflection Quotes</a></li>
		<li><a href="${"/pages/quotes/storytelling"}">Storytelling Quotes</a></li></ul>
</div>`;
});
export { Coaching as default, hydrate, prerender, router };
