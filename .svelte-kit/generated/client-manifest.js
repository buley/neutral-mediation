export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/availability.svelte"),
	() => import("../../src/routes/cancellation.svelte"),
	() => import("../../src/routes/coaching.svelte"),
	() => import("../../src/routes/consulting.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/cookies.svelte"),
	() => import("../../src/routes/disclaimers.svelte"),
	() => import("../../src/routes/documents.svelte"),
	() => import("../../src/routes/emotions.svelte"),
	() => import("../../src/routes/ethics.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/mediation.svelte"),
	() => import("../../src/routes/mediators.svelte"),
	() => import("../../src/routes/negotiation.svelte"),
	() => import("../../src/routes/news.svelte"),
	() => import("../../src/routes/practices.svelte"),
	() => import("../../src/routes/press.svelte"),
	() => import("../../src/routes/prices.svelte"),
	() => import("../../src/routes/privacy.svelte"),
	() => import("../../src/routes/recusal.svelte"),
	() => import("../../src/routes/refunds.svelte"),
	() => import("../../src/routes/resume.svelte"),
	() => import("../../src/routes/template.svelte"),
	() => import("../../src/routes/terms.svelte"),
	() => import("../../src/routes/thanks.svelte"),
	() => import("../../src/routes/training.svelte"),
	() => import("../../src/routes/w9.svelte")
];

export const dictionary = {
	"": [[0, 13], [1]],
	"about": [[0, 2], [1]],
	"availability": [[0, 3], [1]],
	"cancellation": [[0, 4], [1]],
	"coaching": [[0, 5], [1]],
	"consulting": [[0, 6], [1]],
	"contact": [[0, 7], [1]],
	"cookies": [[0, 8], [1]],
	"disclaimers": [[0, 9], [1]],
	"documents": [[0, 10], [1]],
	"emotions": [[0, 11], [1]],
	"ethics": [[0, 12], [1]],
	"mediation": [[0, 14], [1]],
	"mediators": [[0, 15], [1]],
	"negotiation": [[0, 16], [1]],
	"news": [[0, 17], [1]],
	"practices": [[0, 18], [1]],
	"press": [[0, 19], [1]],
	"prices": [[0, 20], [1]],
	"privacy": [[0, 21], [1]],
	"recusal": [[0, 22], [1]],
	"refunds": [[0, 23], [1]],
	"resume": [[0, 24], [1]],
	"template": [[0, 25], [1]],
	"terms": [[0, 26], [1]],
	"thanks": [[0, 27], [1]],
	"training": [[0, 28], [1]],
	"w9": [[0, 29], [1]]
};