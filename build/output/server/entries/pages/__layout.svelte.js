import { g as getContext, c as create_ssr_component, e as escape, a as each, b as add_attribute, v as validate_component, d as subscribe, f as add_classes } from "../../chunks/index-f900b887.js";
import { p as phone } from "../../chunks/phone-f0b0e6b3.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqJJREFUeNrsmL9OG0EQxs+GnqsjITkFdYiUKg1OS0PewPgJsDs67CfAPEHsNzBNpFScGyokTE3BoUip7w3CTDSWTof3dvYPnAPfT1qdOZ/3Zr6dnZklSQAAAAAAAAAAAADA+6LV1Iu/fD0c0aUnf85urn+OmrBjqyHnz+lySiOV0f2wu5f++X3/67VtaTcUAMfKe29WgFR5780KMF1zb/6eBBjSyEp/8+f+xpYKSlopje7/UtrYVrY5ShmkiTg5ncsezWl8o5KVb6jjHbpc0ejIrT7ZOq37zbZi3rNSgupIth5FMHa/NG9Bhi4jVZdOxfZgAaqhtOMSimLQJxorh/cNz64+shCFXO/46iDOjmtl0QhwIUomYtjMsqrfaRxwc+O5iiuBuhVxOFEuuFrUCDKTKEhLtoe3wuJYV16eV75jh4/E8deq5YWUzUuyZ74mD7AtmSZyWgH7t1dRuykK2ecznzzScnScHT4x7eMNgAW4sGV+1zLIKzwQx22rnZVyRC8gD4TOW8j+n5AYhZcAspfOHA4pz2quRMyPQOdD5+Xfjk29SyuC44koPTQIOZBGyqtlpnknNUfqgeP545kQ684Ct47Oc4iNTV+KAz5NztLkvDCWd7s0SbcvcRia2/aZHH58DkxJjbBFjBPkOgE+yslMq+6l7QEyNpNzhJZcfhP87lKU9sU3dRLkjP9gy/xkqLaZcskFQ0v4l+f9q3D+sykJti0hZgvdzGFVm3p2WHd6bVtWd2oJXXVYS5eWK8PfJWnmlrmmof8Rqks0jx4NTczVt9lgTZIaARaW1tOFu0jPaG1YxBBgaUkwsYz1FbUImaut2Lt5EglNaVOWP+378hgR8K/VNexVnw5v4vld3Spnhk4RAAAAAAAAAAAAAIAKTwIMAGat8b+xyT8+AAAAAElFTkSuQmCC";
var calendar = "/_app/immutable/assets/calendar-07d24ffd.svg";
var Button_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.left.svelte-r5q87o{left:var(--buttonSideSize)}.nav-button.svelte-r5q87o{position:fixed;top:var(--buttonTopSize);right:var(--buttonSideSize);display:block;padding:0;outline:none;border:none;width:36px;height:0px;cursor:var(--zIndexSize)}.nav-button.svelte-r5q87o::before,.nav-button.svelte-r5q87o::after{content:"";display:block;height:2px;background-color:var(--openButtonColor);transform:translateY(4px);transition:var(--buttonTransitionTime) ease-in-out}.nav-button.svelte-r5q87o::before{transform:translateY(1px);box-shadow:0 10px var(--openButtonColor)}.open.svelte-r5q87o{box-shadow:none;transform:translateY(10px);z-index:var(--zIndexSize)}.open.svelte-r5q87o::before{content:"";height:1px;transform:rotate(45deg);background-color:var(--closeButtonColor);box-shadow:none}.open.svelte-r5q87o::after{content:"";height:1px;transform:rotate(-45deg);background-color:var(--closeButtonColor);box-shadow:none}.nav-text.svelte-r5q87o{position:fixed;top:var(--textTopSize);right:var(--buttonSideSize);display:block;padding:0;cursor:pointer;font-size:14px;color:var(--openButtonColor);transition:var(--naviTransitionTime) ease-in-out;z-index:var(--zIndexSize)}@media(min-width: 768px){.nav-button.svelte-r5q87o,.nav-text.svelte-r5q87o{display:none}}')();
const css$2 = {
  code: '.left.svelte-r5q87o{left:var(--buttonSideSize)}.nav-button.svelte-r5q87o{position:fixed;top:var(--buttonTopSize);right:var(--buttonSideSize);display:block;padding:0;outline:none;border:none;width:36px;height:0px;cursor:var(--zIndexSize)}.nav-button.svelte-r5q87o::before,.nav-button.svelte-r5q87o::after{content:"";display:block;height:2px;background-color:var(--openButtonColor);transform:translateY(4px);transition:var(--buttonTransitionTime) ease-in-out}.nav-button.svelte-r5q87o::before{transform:translateY(1px);box-shadow:0 10px var(--openButtonColor)}.open.svelte-r5q87o{box-shadow:none;transform:translateY(10px);z-index:var(--zIndexSize)}.open.svelte-r5q87o::before{content:"";height:1px;transform:rotate(45deg);background-color:var(--closeButtonColor);box-shadow:none}.open.svelte-r5q87o::after{content:"";height:1px;transform:rotate(-45deg);background-color:var(--closeButtonColor);box-shadow:none}.nav-text.svelte-r5q87o{position:fixed;top:var(--textTopSize);right:var(--buttonSideSize);display:block;padding:0;cursor:pointer;font-size:14px;color:var(--openButtonColor);transition:var(--naviTransitionTime) ease-in-out;z-index:var(--zIndexSize)}@media(min-width: 768px){.nav-button.svelte-r5q87o,.nav-text.svelte-r5q87o{display:none}}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { left } = $$props;
  let { openButtonColor } = $$props;
  let { closeButtonColor } = $$props;
  let { buttonTransitionTime } = $$props;
  let { zIndexSize } = $$props;
  let { buttonTopSize } = $$props;
  let { buttonSideSize } = $$props;
  let textTopSize = Number(buttonTopSize) - 5;
  buttonTransitionTime = buttonTransitionTime + "s";
  buttonTopSize = buttonTopSize + "px";
  buttonSideSize = buttonSideSize + "px";
  textTopSize = textTopSize + "px";
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.openButtonColor === void 0 && $$bindings.openButtonColor && openButtonColor !== void 0)
    $$bindings.openButtonColor(openButtonColor);
  if ($$props.closeButtonColor === void 0 && $$bindings.closeButtonColor && closeButtonColor !== void 0)
    $$bindings.closeButtonColor(closeButtonColor);
  if ($$props.buttonTransitionTime === void 0 && $$bindings.buttonTransitionTime && buttonTransitionTime !== void 0)
    $$bindings.buttonTransitionTime(buttonTransitionTime);
  if ($$props.zIndexSize === void 0 && $$bindings.zIndexSize && zIndexSize !== void 0)
    $$bindings.zIndexSize(zIndexSize);
  if ($$props.buttonTopSize === void 0 && $$bindings.buttonTopSize && buttonTopSize !== void 0)
    $$bindings.buttonTopSize(buttonTopSize);
  if ($$props.buttonSideSize === void 0 && $$bindings.buttonSideSize && buttonSideSize !== void 0)
    $$bindings.buttonSideSize(buttonSideSize);
  $$result.css.add(css$2);
  return `<div style="${"--openButtonColor:" + escape(openButtonColor) + "; --closeButtonColor:" + escape(closeButtonColor) + "; --buttonTransitionTime:" + escape(buttonTransitionTime) + "; --zIndexSize:" + escape(zIndexSize) + "; --buttonTopSize:" + escape(buttonTopSize) + "; --textTopSize:" + escape(textTopSize) + "; --buttonSideSize:" + escape(buttonSideSize)}"><button type="${"button"}" class="${["nav-button svelte-r5q87o", (open ? "open" : "") + " " + (left ? "left" : "")].join(" ").trim()}"></button>
      ${open == false ? `<p class="${["nav-text svelte-r5q87o", left ? "left" : ""].join(" ").trim()}" style>menu</p>` : ``}
  </div>`;
});
var Navi_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media(max-width: 767px){nav.svelte-1sdhhd0.svelte-1sdhhd0{position:fixed;top:0;left:0;width:100%;height:100vh;background:var(--backgroundColor);display:flex;justify-content:center;align-items:center;visibility:hidden;opacity:0;transition:var(--naviFadeTime) ease-in-out;z-index:var(--navizIndexSize)}nav.svelte-1sdhhd0 ul.svelte-1sdhhd0{list-style:none;text-align:center}nav.svelte-1sdhhd0 li.svelte-1sdhhd0:not(:last-child){margin-bottom:30px}nav.svelte-1sdhhd0 a.svelte-1sdhhd0{color:var(--smNaviColor)}.open.svelte-1sdhhd0.svelte-1sdhhd0{visibility:visible;opacity:1}}@media(min-width: 768px){nav.svelte-1sdhhd0.svelte-1sdhhd0{margin-left:auto}nav.svelte-1sdhhd0 ul.svelte-1sdhhd0{display:flex;list-style:none}nav.svelte-1sdhhd0 ul li.svelte-1sdhhd0:not(:first-child){margin-left:20px}nav.svelte-1sdhhd0 ul li a.svelte-1sdhhd0{color:var(--pcNaviColor)}}")();
const css$1 = {
  code: "@media(max-width: 767px){nav.svelte-1sdhhd0.svelte-1sdhhd0{position:fixed;top:0;left:0;width:100%;height:100vh;background:var(--backgroundColor);display:flex;justify-content:center;align-items:center;visibility:hidden;opacity:0;transition:var(--naviFadeTime) ease-in-out;z-index:var(--navizIndexSize)}nav.svelte-1sdhhd0 ul.svelte-1sdhhd0{list-style:none;text-align:center}nav.svelte-1sdhhd0 li.svelte-1sdhhd0:not(:last-child){margin-bottom:30px}nav.svelte-1sdhhd0 a.svelte-1sdhhd0{color:var(--smNaviColor)}.open.svelte-1sdhhd0.svelte-1sdhhd0{visibility:visible;opacity:1}}@media(min-width: 768px){nav.svelte-1sdhhd0.svelte-1sdhhd0{margin-left:auto}nav.svelte-1sdhhd0 ul.svelte-1sdhhd0{display:flex;list-style:none}nav.svelte-1sdhhd0 ul li.svelte-1sdhhd0:not(:first-child){margin-left:20px}nav.svelte-1sdhhd0 ul li a.svelte-1sdhhd0{color:var(--pcNaviColor)}}",
  map: null
};
const Navi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { menu_list } = $$props;
  let { pcNaviColor } = $$props;
  let { smNaviColor } = $$props;
  let { backgroundColor } = $$props;
  let { naviFadeTime } = $$props;
  let { navizIndexSize } = $$props;
  naviFadeTime = naviFadeTime + "s";
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.menu_list === void 0 && $$bindings.menu_list && menu_list !== void 0)
    $$bindings.menu_list(menu_list);
  if ($$props.pcNaviColor === void 0 && $$bindings.pcNaviColor && pcNaviColor !== void 0)
    $$bindings.pcNaviColor(pcNaviColor);
  if ($$props.smNaviColor === void 0 && $$bindings.smNaviColor && smNaviColor !== void 0)
    $$bindings.smNaviColor(smNaviColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.naviFadeTime === void 0 && $$bindings.naviFadeTime && naviFadeTime !== void 0)
    $$bindings.naviFadeTime(naviFadeTime);
  if ($$props.navizIndexSize === void 0 && $$bindings.navizIndexSize && navizIndexSize !== void 0)
    $$bindings.navizIndexSize(navizIndexSize);
  $$result.css.add(css$1);
  return `<div style="${"--pcNaviColor:" + escape(pcNaviColor) + "; --smNaviColor:" + escape(smNaviColor) + "; --backgroundColor:" + escape(backgroundColor) + "; --naviFadeTime:" + escape(naviFadeTime) + "; --navizIndexSize:" + escape(navizIndexSize)}"><nav class="${["svelte-1sdhhd0", open ? "open" : ""].join(" ").trim()}"><ul class="${"svelte-1sdhhd0"}">${each(menu_list, ({ name, url }) => {
    return `<li class="${"svelte-1sdhhd0"}"><a${add_attribute("href", url, 0)} class="${"svelte-1sdhhd0"}">${escape(name)}</a></li>`;
  })}</ul></nav>
  </div>`;
});
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { menu_list } = $$props;
  let { buttonTopSize = "15" } = $$props;
  let { buttonSideSize = "10" } = $$props;
  let { left = false } = $$props;
  let { openButtonColor = "#444444" } = $$props;
  let { closeButtonColor = "#EDEDED" } = $$props;
  let { buttonTransitionTime = "0.3" } = $$props;
  let { zIndexSize = "100" } = $$props;
  let { pcNaviColor = "#444444" } = $$props;
  let { smNaviColor = "#EDEDED" } = $$props;
  let { backgroundColor = "#171717" } = $$props;
  let { naviFadeTime = "0.5" } = $$props;
  let { navizIndexSize = Number(zIndexSize) - 1 } = $$props;
  let buttonProps = {
    left,
    buttonTopSize,
    openButtonColor,
    closeButtonColor,
    buttonTransitionTime,
    zIndexSize,
    buttonTopSize,
    buttonSideSize
  };
  let naviProps = {
    pcNaviColor,
    smNaviColor,
    backgroundColor,
    naviFadeTime,
    navizIndexSize
  };
  let open = false;
  if ($$props.menu_list === void 0 && $$bindings.menu_list && menu_list !== void 0)
    $$bindings.menu_list(menu_list);
  if ($$props.buttonTopSize === void 0 && $$bindings.buttonTopSize && buttonTopSize !== void 0)
    $$bindings.buttonTopSize(buttonTopSize);
  if ($$props.buttonSideSize === void 0 && $$bindings.buttonSideSize && buttonSideSize !== void 0)
    $$bindings.buttonSideSize(buttonSideSize);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.openButtonColor === void 0 && $$bindings.openButtonColor && openButtonColor !== void 0)
    $$bindings.openButtonColor(openButtonColor);
  if ($$props.closeButtonColor === void 0 && $$bindings.closeButtonColor && closeButtonColor !== void 0)
    $$bindings.closeButtonColor(closeButtonColor);
  if ($$props.buttonTransitionTime === void 0 && $$bindings.buttonTransitionTime && buttonTransitionTime !== void 0)
    $$bindings.buttonTransitionTime(buttonTransitionTime);
  if ($$props.zIndexSize === void 0 && $$bindings.zIndexSize && zIndexSize !== void 0)
    $$bindings.zIndexSize(zIndexSize);
  if ($$props.pcNaviColor === void 0 && $$bindings.pcNaviColor && pcNaviColor !== void 0)
    $$bindings.pcNaviColor(pcNaviColor);
  if ($$props.smNaviColor === void 0 && $$bindings.smNaviColor && smNaviColor !== void 0)
    $$bindings.smNaviColor(smNaviColor);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.naviFadeTime === void 0 && $$bindings.naviFadeTime && naviFadeTime !== void 0)
    $$bindings.naviFadeTime(naviFadeTime);
  if ($$props.navizIndexSize === void 0 && $$bindings.navizIndexSize && navizIndexSize !== void 0)
    $$bindings.navizIndexSize(navizIndexSize);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${validate_component(Button, "Button").$$render($$result, Object.assign(buttonProps, { open }), {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}
    ${validate_component(Navi, "Navi").$$render($$result, Object.assign({ menu_list }, naviProps, { open }), {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "header.svelte-1m5qnsu.svelte-1m5qnsu{display:flex;justify-content:space-between}.corner.svelte-1m5qnsu.svelte-1m5qnsu{width:3em;height:3em}nav.svelte-1m5qnsu.svelte-1m5qnsu{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7);color:#343a4a}svg.svelte-1m5qnsu.svelte-1m5qnsu{width:2em;height:3em;display:block}path.svelte-1m5qnsu.svelte-1m5qnsu{fill:var(--background)}ul.svelte-1m5qnsu.svelte-1m5qnsu{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1m5qnsu.svelte-1m5qnsu{position:relative;height:100%}li.active.svelte-1m5qnsu.svelte-1m5qnsu::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1m5qnsu a.svelte-1m5qnsu{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1m5qnsu.svelte-1m5qnsu:hover{color:var(--accent-color)}.right-corner.svelte-1m5qnsu.svelte-1m5qnsu{display:none}.book-contact.svelte-1m5qnsu.svelte-1m5qnsu{white-space:nowrap}.menu-separator.svelte-1m5qnsu.svelte-1m5qnsu{height:100%;border-left:1px solid #e6e6e6;padding-left:1rem;margin-left:.5rem}.book-contact-icon.svelte-1m5qnsu.svelte-1m5qnsu{padding-right:1rem}@media(max-width: 767px){.menu-primary.svelte-1m5qnsu.svelte-1m5qnsu{display:none}.right-corner.svelte-1m5qnsu.svelte-1m5qnsu{display:inline}}")();
const css = {
  code: "header.svelte-1m5qnsu.svelte-1m5qnsu{display:flex;justify-content:space-between}.corner.svelte-1m5qnsu.svelte-1m5qnsu{width:3em;height:3em}nav.svelte-1m5qnsu.svelte-1m5qnsu{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7);color:#343a4a}svg.svelte-1m5qnsu.svelte-1m5qnsu{width:2em;height:3em;display:block}path.svelte-1m5qnsu.svelte-1m5qnsu{fill:var(--background)}ul.svelte-1m5qnsu.svelte-1m5qnsu{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1m5qnsu.svelte-1m5qnsu{position:relative;height:100%}li.active.svelte-1m5qnsu.svelte-1m5qnsu::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1m5qnsu a.svelte-1m5qnsu{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1m5qnsu.svelte-1m5qnsu:hover{color:var(--accent-color)}.right-corner.svelte-1m5qnsu.svelte-1m5qnsu{display:none}.book-contact.svelte-1m5qnsu.svelte-1m5qnsu{white-space:nowrap}.menu-separator.svelte-1m5qnsu.svelte-1m5qnsu{height:100%;border-left:1px solid #e6e6e6;padding-left:1rem;margin-left:.5rem}.book-contact-icon.svelte-1m5qnsu.svelte-1m5qnsu{padding-right:1rem}@media(max-width: 767px){.menu-primary.svelte-1m5qnsu.svelte-1m5qnsu{display:none}.right-corner.svelte-1m5qnsu.svelte-1m5qnsu{display:inline}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menu_list = [
    { name: "Home", url: "/" },
    { name: "Mediation", url: "/mediation" },
    { name: "Negotation", url: "/negotiation" },
    { name: "Training", url: "/training" },
    { name: "Consulting", url: "/consulting" },
    { name: "Coaching", url: "/coaching" },
    {
      name: "Book Now",
      url: "https://neutral.setmore.com/"
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"primary-navigation svelte-1m5qnsu"}"><div class="${"corner svelte-1m5qnsu"}"></div>

	<nav class="${"menu-primary svelte-1m5qnsu"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1m5qnsu"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-1m5qnsu"}"></path></svg>
		<ul class="${"svelte-1m5qnsu"}"><li class="${["svelte-1m5qnsu", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" id="${"home"}" class="${"svelte-1m5qnsu"}"><img${add_attribute("src", logo$1, 0)} alt="${"Neutral Mediation Home"}" height="${"64px"}" width="${"64px"}"></a></li>
			<li class="${["svelte-1m5qnsu", $page.url.pathname === "/mediation" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/mediation"}" class="${"svelte-1m5qnsu"}">Mediation</a></li>
			<li class="${["svelte-1m5qnsu", $page.url.pathname === "/negotiation" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/negotiation"}" class="${"svelte-1m5qnsu"}">Negotiation</a></li>
			<li class="${["svelte-1m5qnsu", $page.url.pathname === "/training" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/training"}" class="${"svelte-1m5qnsu"}">Training</a></li>
			<li class="${["svelte-1m5qnsu", $page.url.pathname === "/consulting" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/consulting"}" class="${"svelte-1m5qnsu"}">Consulting</a></li>
			<li class="${["svelte-1m5qnsu", $page.url.pathname === "/coaching" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/coaching"}" class="${"svelte-1m5qnsu"}">Coaching</a></li>
			<li class="${"menu-separator svelte-1m5qnsu"}"></li>


			<li class="${"book-contact svelte-1m5qnsu"}"><span class="${"book-text"}"><a href="${"https://neutral.setmore.com"}" class="${"svelte-1m5qnsu"}"><span class="${"book-contact-icon svelte-1m5qnsu"}"><img${add_attribute("src", calendar, 0)} height="${"24px"}" width="${"24px"}" class="${"book-icon"}"></span>
						Book Now
					</a></span></li></ul>

		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-1m5qnsu"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-1m5qnsu"}"></path></svg></nav>

	<div class="${"corner svelte-1m5qnsu"}"><div class="${"right-corner svelte-1m5qnsu"}">${validate_component(HamburgerMenu, "Hamburger").$$render($$result, {
    menu_list,
    openButtonColor: "#343a4a",
    backgroundColor: "#343a4a",
    pcNaviColor: "#e6dfda"
  }, {}, {})}</div></div>
</header>`;
});
var logo = "data:image/png;base64,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";
var email = "/_app/immutable/assets/email-icon-7dd35e0b.svg";
var app = /* @__PURE__ */ (() => `/* open-sans-cyrillic-ext-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-cyrillic-ext-400-normal-df8fd002.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* open-sans-cyrillic-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-cyrillic-400-normal-7f96afbe.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* open-sans-greek-ext-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('data:font/woff2;base64,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') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+1F00-1FFF;
}
/* open-sans-greek-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-greek-400-normal-716e9e0f.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0370-03FF;
}
/* open-sans-hebrew-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-hebrew-400-normal-aaa9af21.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* open-sans-vietnamese-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-vietnamese-400-normal-4029d256.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* open-sans-latin-ext-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-latin-ext-400-normal-e3d26484.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* open-sans-latin-400-normal*/
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/open-sans-latin-400-normal-9434dddc.woff2') format('woff2'), url('/_app/immutable/assets/open-sans-all-400-normal-82a8e0e7.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* pt-serif-cyrillic-ext-400-normal*/
@font-face {
  font-family: 'PT Serif';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/pt-serif-cyrillic-ext-400-normal-12a16387.woff2') format('woff2'), url('/_app/immutable/assets/pt-serif-all-400-normal-239731a9.woff') format('woff');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* pt-serif-cyrillic-400-normal*/
@font-face {
  font-family: 'PT Serif';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/pt-serif-cyrillic-400-normal-f069fd3e.woff2') format('woff2'), url('/_app/immutable/assets/pt-serif-all-400-normal-239731a9.woff') format('woff');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* pt-serif-latin-ext-400-normal*/
@font-face {
  font-family: 'PT Serif';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/pt-serif-latin-ext-400-normal-4a9337bf.woff2') format('woff2'), url('/_app/immutable/assets/pt-serif-all-400-normal-239731a9.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* pt-serif-latin-400-normal*/
@font-face {
  font-family: 'PT Serif';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/pt-serif-latin-400-normal-d355afb9.woff2') format('woff2'), url('/_app/immutable/assets/pt-serif-all-400-normal-239731a9.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* bebas-neue-latin-ext-400-normal*/
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/bebas-neue-latin-ext-400-normal-fc4a091c.woff2') format('woff2'), url('/_app/immutable/assets/bebas-neue-all-400-normal-55bda2f6.woff') format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* bebas-neue-latin-400-normal*/
@font-face {
  font-family: 'Bebas Neue';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/_app/immutable/assets/bebas-neue-latin-400-normal-5b4101d4.woff2') format('woff2'), url('/_app/immutable/assets/bebas-neue-all-400-normal-55bda2f6.woff') format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
:root {
	font-family: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
	--serif-font: 'PT Serif', 'Tahoma', serif;
	--sans-serif-font: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
	--font-mono: 'Fira Mono', monospace;
	--pure-white: #ffffff;
	--primary-color: #e6dfda;
	--secondary-color: #f2ebe6;
	--tertiary-color: #f5eee8;
	--accent-color: #343a4a;
	--heading-color: #343a4a;
	--text-color: #343a4a;
	--alt-heading-color: #e3e3e3;
	--background-without-opacity: rgba(255, 255, 255, 0.7);
	--column-width: 42rem;
	--column-margin-top: 2rem;
}
body {
	min-height: 100vh;
	margin: 0;
	font-family: var(--serif-font);
	background-color: var(--primary-color);
	background: linear-gradient(180deg,var(--primary-color) 0%,var(--secondary-color) 10.45%,var(--tertiary-color) 41.35%);
}
body::before {
	content: '';
	width: 80vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 10vw;
	z-index: -1;
	background: radial-gradient(50% 50% at 50% 50%,var(--pure-white) 0%,rgba(255, 255, 255, 0) 100%);
}
#svelte {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
.content {
	width: 100%;
	max-width: var(--column-width);
	margin: var(--column-margin-top) auto 0 auto;
}
h1,h2,p {
	font-weight: 400;
	color: var(--heading-color);
}
p {
	line-height: 1.8rem;
	font-family: var(--serif-font);
	color: var(--text-color);
}
ul li {
	line-height: 1.8rem;
	font-family: var(--serif-font);
	color: var(--text-color);
}
a {
	color: var(--accent-color);
	text-decoration: none;
	padding-bottom: 1px;
	border-bottom: 1px dotted var(--accent-color);
}
h1 {
	font-size: 2rem;
	text-align: center;
}
h2 {
	font-size: 1rem;
}
pre {
	font-size: 16px;
	font-family: var(--font-mono);
	background-color: rgba(255, 255, 255, 0.45);
	border-radius: 3px;
	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
	padding: 0.5em;
	overflow-x: auto;
	color: var(--text-color);
}
input,button {
	font-size: inherit;
	font-family: inherit;
}
button:focus:not(:focus-visible) {
	outline: none;
}
a:hover {
	border-bottom: 1px solid;
}
nav a, .corner-logo, .corner-menu, footer a, nav a:hover {
	color: var(--heading-color);
	font-family: var(--sans-serif-font);
	text-decoration: none;
	border-bottom: 0;
}
a.corner-logo:hover, a.corner-menu:hover {
	text-decoration: none;
	border-bottom: 0;
}
a.footer-icon:hover {
	border-bottom: 0;
	color: var(--heading-color);
	text-decoration: none;
}
h1 {
	font-size: 2.4rem;
	font-family: var(--sans-serif-font);
	font-weight: 700;
}
h2 {
	font-size: 1.8rem;
	font-family: var(--serif-font);
	font-weight: 700;
}
h3 {
	font-size: 1.4rem;
	font-family: var(--serif-font);
	font-weight: 700;
}
h4 {
	font-size: 1.2rem;
	font-family: var(--serif-font);
	font-weight: 700;
}
h5 {
	font-size: 1.1rem;
	font-family: var(--serif-font);
	font-weight: 700;
}
blockquote.pullquote {
	content: '';
	width: 100%;
	float: right;
	font-size: 1rem;
	font-family: 'PT Serif', serif;
	color: #444;
	vertical-align: middle;
	border-right: 4px solid #444;
	line-height: 1rem;
	clear: both;
	padding-top: 20px;
	float: right;
	min-height: 100%;
	padding-right: 20px;
	text-align: right;
	font-family: var(--serif-font);
}
figure figcaption.pullquote {
	text-align: right;
	float: right;
	width: 100%;
	font-family: var(--sans-serif-font);
	padding: 0 0 1rem 0;
}
#menu-social {
	flex-wrap: wrap;
	font-size: .65rem;
	color: var(--accent-color);
}
#menu-social li {
	float: left;
	list-style-type: none;
	margin-right: 10px;
}
#menu-social li span {
	float: right;
}
#menu-social li svg {
	float: left;
	margin-right: 5px;
	margin-top: 5px;
}
footer ul li {
	float: left;
	list-style-type: none;
	margin-right: 10px;
}
.footer-icon img {
	width: 64px;
	height: 64px;
}
.has-text-align-center {
	text-align: center;
}
.corner-logo {
	text-decoration: none;
}
.corner-menu {
	text-decoration: none;
}
::selection {
	background: #343a4a;
	color: #f5eee8;
}
.nav-text {
	font-family: var(--sans-serif-font) !important;
	text-transform: uppercase;
	font-size: .75rem !important;
}
#home img {
	max-height: 48px;
}
.primary-navigation {
	position: fixed;
	z-index: 2;
	width: 100%;
}
.numbered-list {
	list-style-type: decimal;
}
.full-width {
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;
}
@media (max-width: 766px) {
	#cta > button {
	    margin: 0 auto 20px auto;
	    width: 100%;
	}
}
@media (min-width: 767px) {
	.content {
		margin: 60px auto 0 auto;
	}
}
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
}
h1 {
	width: 100%;
}
.welcome {
	display: block;
	position: relative;
	width: 100%;
	min-height: 400px;
	padding: 0 0 calc(100% * 495 / 2048) 0;
}
.welcome img {
	position: absolute;
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	display: block;
}
.welcome-mobile {
	object-fit:cover;
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;
}
.welcome-mobile img {
	width: 100%;
}
.welcome-book-text {
	margin: 0 auto 40px auto;
	padding: 10px 10px 5px 10px;
	vertical-align: middle;
	font-family: var(--sans-serif-font);
	background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--tertiary-color));
	border: 1px solid;
}
.welcome-book-text a, .welcome-book-text a:hover {
	border: none;
	text-decoration: none;
	font-size: 1.5rem;
	color: var(--accent-color);
	font-size: 2em;
	padding: 0 10px;
}
.welcome-book-contact-icon {
	text-align: vertical;
}
.welcome-call-text {
	margin: 0 auto 40px auto;
	padding: 10px 10px 5px 10px;
	vertical-align: middle;
	font-family: var(--sans-serif-font);
	background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--tertiary-color));
	border: 1px solid;
}
.welcome-call-text a, .welcome-call-text a:hover {
	border: none;
	text-decoration: none;
	font-size: 1.5rem;
	color: var(--accent-color);
	font-size: 2em;
	padding: 0 10px;
}
.welcome-call-contact-icon {
	text-align: vertical;
}
#cta > button:nth-child(1) {
    margin-right: 20px;
}
@media (min-width: 767px) {
	.homepage-icon {
		padding-top: 55px;
	}

}
button {
	background-color: #fff;
	border: 1px solid #d5d9d9;
	border-radius: 8px;
	box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
	box-sizing: border-box;
	color: #0f1111;
	cursor: pointer;
	display: inline-block;
	font-family: "Amazon Ember",sans-serif;
	font-size: 13px;
	line-height: 29px;
	padding: 20px 10px 0 11px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: middle;
}
button:hover {
	background-color: #f7fafa;
}
button:focus {
	border-color: #008296;
	box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
	outline: 0;
}
.tagline {
	font-family: var(--serif-font);
	padding: 1rem 0 1rem 0;
	margin: 0;
}
.tagline-description {
	text-align: center;
	max-width: 600px;
	padding-bottom: 1rem;
}
main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	box-sizing: border-box;
}
footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 20px 0 20px;
}
footer a {
	font-weight: bold;
}
ul.menu-navigation {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
@media (min-width: 480px) {
	footer {
		padding: 0;
	}
}
.centered-header {
	text-align: center;
}
.centered-list {
	text-align: center;
	list-style-type: none;
}
#menu-contact {
	padding: 0 0 0 0;
	margin: 0;
	clear: both;
	float: right;
}
.content {
	width: 100%;
	max-width: var(--column-width);
	margin: var(--column-margin-top) auto 0 auto;
}
.headshot {
	display: flex;
	flex-direction: column;
	max-width: 40%;
	float: right;
	clear: both;
	padding: 0 0 1rem 1rem;
	text-align: center;
	margin: 0;
}
.headshot img {
	float: right;
	clear: both;
	max-width: 100%;
}
.headshot p {
	clear: left;
	text-align: cneter;
	float: right;
	font-family: var(--sans-serif-font);
}
.menu-primary a, .menu-primary a: hover {
	border-bottom: 0;
	color: var(--heading-color);
	text-decoration: none;
}
.menu-policy,.menu-policy a {
	font-size: .75rem;
	color: #666666;
}
strong {
    font-family: var(--sans-serif-font);
    color: var(--text-color);
    font-weight: 800;
}`)();
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"body"}">${slots.default ? slots.default({}) : ``}</main>

<footer><a sveltekit:prefetch href="${"/"}" class="${"footer-icon"}"><img${add_attribute("src", logo, 0)} alt="${"Neutral Mediation Home"}" height="${"64px"}" width="${"64px"}"></a>

	<ul class="${"menu-navigation"}"><li${add_classes(($page.url.pathname === "/about" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/about"}">About</a></li>
	    <li${add_classes(($page.url.pathname === "/neutral" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/background"}">Background</a></li>
	    <li${add_classes(($page.url.pathname === "/contact" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/contact"}">Contact</a></li>
	    <li${add_classes(($page.url.pathname === "/ethics" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/ethics"}">Ethics</a></li>
	    <li${add_classes(($page.url.pathname === "/prices" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/prices"}">Prices</a></li>
	    <li${add_classes(($page.url.pathname === "/disclaimer" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/disclaimer"}">Disclaimer</a></li>
	    <li${add_classes(($page.url.pathname === "/documents" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/documents"}">Forms &amp; Documents</a></li></ul>

	<div class="${"social-navigation"}" role="${"navigation"}" aria-label="${"Social Links Menu"}"><div class="${"menu-social-container"}"><ul id="${"menu-social"}" class="${"social-links-menu"}"><li class="${"menu-item"}"><a href="${"https://twitter.com/taylorbuley"}"><span class="${"screen-reader-text"}">Twitter</span><svg class="${"svg-icon"}" width="${"16"}" height="${"16"}" aria-hidden="${"true"}" role="${"img"}" focusable="${"false"}" viewBox="${"0 0 24 24"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><path d="${"M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"}"></path></svg></a></li>
			<li class="${"menu-item"}"><a href="${"https://instagram.com/taylorbuley"}"><span class="${"screen-reader-text"}">Instagram</span><svg class="${"svg-icon"}" width="${"16"}" height="${"16"}" aria-hidden="${"true"}" role="${"img"}" focusable="${"false"}" viewBox="${"0 0 24 24"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><path d="${"M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"}"></path></svg></a></li>
			<li class="${"menu-item"}"><a href="${"https://facebook.com/TaylorBuley"}"><span class="${"screen-reader-text"}">Facebook</span><svg class="${"svg-icon"}" width="${"16"}" height="${"16"}" aria-hidden="${"true"}" role="${"img"}" focusable="${"false"}" viewBox="${"0 0 24 24"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><path d="${"M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h8.621v-6.971h-2.346v-2.717h2.346V9.31 c0-2.325,1.42-3.591,3.494-3.591c0.993,0,1.847,0.074,2.096,0.107v2.43l-1.438,0.001c-1.128,0-1.346,0.536-1.346,1.323v1.734h2.69 l-0.35,2.717h-2.34V21h4.587C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z"}"></path></svg></a></li>
			<li class="${"menu-item"}"><a href="${"https://www.youtube.com/taylorbuley"}"><span class="${"screen-reader-text"}">YouTube</span><svg class="${"svg-icon"}" width="${"16"}" height="${"16"}" aria-hidden="${"true"}" role="${"img"}" focusable="${"false"}" viewBox="${"0 0 24 24"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><path d="${"M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"}"></path></svg></a></li>
			<li class="${"menu-item"}"><a href="${"https://linkedin.com/in/buley"}"><span class="${"screen-reader-text"}">LinkedIn</span><svg class="${"svg-icon"}" width="${"16"}" height="${"16"}" aria-hidden="${"true"}" role="${"img"}" focusable="${"false"}" viewBox="${"0 0 24 24"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><path d="${"M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"}"></path></svg></a></li></ul></div></div>

	<ul id="${"menu-contact"}"><li class="${"phone-contact"}"><span class="${"phone-number-text"}"><a href="${"tel:16503537653"}"><span class="${"phone-contact-icon"}"><img${add_attribute("src", phone, 0)} height="${"16px"}" width="${"16px"}" class="${"phone-number-icon"}"></span>
					+1-650-353-7653
				</a></span></li>

		 <li class="${"email-contact"}"><span class="${"email-text"}"><a href="${"mailto:info@neutrals.io"}"><span class="${"email-contact-icon"}"><img${add_attribute("src", email, 0)} height="${"16px"}" width="${"16px"}" class="${"email-icon"}"></span>
					info@neutrals.io
				</a></span></li></ul>

	<p><small><em>California peacemaking, virtually anywhere.</em></small></p>

	<ul class="${"menu-policy"}"><li${add_classes(($page.url.pathname === "/cancellation" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/cancellation"}">Cancellation</a></li>
	    <li${add_classes(($page.url.pathname === "/cookies" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/cookies"}">Cookies</a></li>
	    <li${add_classes(($page.url.pathname === "/privacy" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/privacy"}">Privacy</a></li>
	    <li${add_classes(($page.url.pathname === "/refunds" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/refunds"}">Refunds</a></li>
	    <li${add_classes(($page.url.pathname === "/terms" ? "active" : "").trim())}><a sveltekit:prefetch href="${"/terms"}">Terms of Service</a></li></ul></footer>`;
});
export { _layout as default };
