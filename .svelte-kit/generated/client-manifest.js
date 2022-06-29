export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/mediation.svelte"),
	() => import("../../src/routes/template.svelte"),
	() => import("../../src/routes/todos/index.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"about": [[0, 2], [1]],
	"mediation": [[0, 4], [1]],
	"template": [[0, 5], [1]],
	"todos": [[0, 6], [1], 1]
};