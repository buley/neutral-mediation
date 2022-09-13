import { c as create_ssr_component, j as is_promise, n as noop, e as escape, a as each, b as add_attribute } from "../../chunks/index-f900b887.js";
import "querystring";
import Pinboard from "node-pinboard";
import { d as dev, b as browser } from "../../chunks/env-08feb9ca.js";
var news_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}")();
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
let postsData = [{ href: "#", description: "foo bar" }];
let P = Pinboard.default || Pinboard;
let pin = new P("tb:09609A3FC3DCC28DDEAC");
const getNews = () => {
  return pin.get({ tag: ["mediation", "negotiation"] });
};
const templatePromise = new Promise((resolve, reject) => {
  getNews().then((data, err) => {
    if (!!data && !!data.posts) {
      let posts = [];
      for (let z = 0; z < data.posts.length; z += 1) {
        posts.push({
          href: data.posts[z].href,
          description: data.posts[z].description,
          tags: data.posts[z].tags
        });
      }
      console.log("REPLACING", postsData, posts);
      postsData = posts;
    }
  }).finally((data, err) => {
    if (err !== null && err !== void 0) {
      reject(err);
    } else if (!!postsData && postsData.length >= 0) {
      resolve(postsData);
    } else {
      reject(new Error("Failure to plan"));
    }
  });
});
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>News</title>`, ""}<meta name="${"description"}" content="${""}" data-svelte="svelte-161m1wg">`, ""}

<div class="${"content svelte-cf77e8"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<h1>News</h1>
	<p><em>Loading...
		</em></p>
`;
    }
    return function(resultsData) {
      return `
${escape(resultsData[0].href)}
	<h1>News</h1>
	<p><em>This page displays recent mediation and negotiation items of interest from around the web. This content is not created by Neutral Mediation and is only provided for educational purposes. While interesting, the linked content does not reflect Neutral Mediation&#39;s views.
		</em></p>
	<ul id="${"news-links"}">${each(resultsData, (postItem) => {
        return `<li><a${add_attribute("href", postItem.href, 0)}>${escape(postItem.description)}</a>
		</li>`;
      })}</ul>
`;
    }(__value);
  }(templatePromise)}
	<p><small><a href="${"/sitemap.xml"}">Click here for our sitemap.</a></small></p>
</div>`;
});
export { News as default, hydrate, prerender, router };
