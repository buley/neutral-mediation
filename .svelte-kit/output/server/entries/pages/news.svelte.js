import { c as create_ssr_component, i as is_promise, n as noop, a as each, b as add_attribute, e as escape } from "../../chunks/index-75d4f4f2.js";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var news_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
let htmlContent = "";
let dataPromise = new Promise(async (resolve, reject) => {
  import("node-pinboard").then((PinboardMod) => {
    let Pinboard = !!PinboardMod.default && !!PinboardMod.default.default ? PinboardMod.default.default : PinboardMod.default;
    const apiKey = process.env.PINBOARD_API_KEY || "tb:09609A3FC3DCC28DDEAC";
    const pinboard = new Pinboard(apiKey);
    if (!!apiKey) {
      pinboard.get({ tag: ["negotiation", "mediation"] }, (err, res) => {
        console.log("Finished Pinboard API request", res);
        let linksStack = [];
        if (err === null) {
          const posts = res.posts;
          new Date(res.date);
          for (let x = 0; x < posts.length; x += 1) {
            let d = posts[x];
            console.log("ITEM", d);
            if (d.shared == "yes") {
              linksStack.push(d);
              htmlContent += d.href;
            }
          }
          resolve(linksStack);
        }
      });
    }
  });
});
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>News</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-13qto6k">`, ""}

<div class="${"content svelte-cf77e8"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<h1>News</h1>
	<p><em>This page lists recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect Neutral Mediation&#39;s views.</em></p>
	<!-- HTML_TAG_START -->${htmlContent}<!-- HTML_TAG_END -->
	`;
    }
    return function(data) {
      return `
	<ul id="${"news-links"}">${each(data, (link) => {
        return `<li><a${add_attribute("href", link.href, 0)}>${escape(link.description)}</a>
		</li>`;
      })}</ul>
	`;
    }(__value);
  }(dataPromise)}

</div>`;
});
export { News as default, hydrate, prerender, router };
