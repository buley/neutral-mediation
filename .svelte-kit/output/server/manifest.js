export const manifest = {
	appDir: "_app",
	assets: new Set(["FavIcon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-285648a8.js","js":["start-285648a8.js","chunks/index-293886de.js","chunks/preload-helper-60cab3ee.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/57.js'),
			() => import('./nodes/58.js'),
			() => import('./nodes/59.js'),
			() => import('./nodes/60.js'),
			() => import('./nodes/61.js'),
			() => import('./nodes/62.js'),
			() => import('./nodes/63.js'),
			() => import('./nodes/64.js'),
			() => import('./nodes/65.js'),
			() => import('./nodes/66.js'),
			() => import('./nodes/67.js'),
			() => import('./nodes/56.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js'),
			() => import('./nodes/47.js'),
			() => import('./nodes/48.js'),
			() => import('./nodes/49.js'),
			() => import('./nodes/50.js'),
			() => import('./nodes/51.js'),
			() => import('./nodes/52.js'),
			() => import('./nodes/53.js'),
			() => import('./nodes/54.js'),
			() => import('./nodes/55.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "random",
				pattern: /^\/random\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/random.js')
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "availability",
				pattern: /^\/availability\/?$/,
				names: [],
				types: [],
				path: "/availability",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "cancellation",
				pattern: /^\/cancellation\/?$/,
				names: [],
				types: [],
				path: "/cancellation",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "coaching",
				pattern: /^\/coaching\/?$/,
				names: [],
				types: [],
				path: "/coaching",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "consulting",
				pattern: /^\/consulting\/?$/,
				names: [],
				types: [],
				path: "/consulting",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "cookies",
				pattern: /^\/cookies\/?$/,
				names: [],
				types: [],
				path: "/cookies",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "disclaimers",
				pattern: /^\/disclaimers\/?$/,
				names: [],
				types: [],
				path: "/disclaimers",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "documents",
				pattern: /^\/documents\/?$/,
				names: [],
				types: [],
				path: "/documents",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "ethics",
				pattern: /^\/ethics\/?$/,
				names: [],
				types: [],
				path: "/ethics",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "key",
				pattern: /^\/key\/?$/,
				names: [],
				types: [],
				path: "/key",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "mediation",
				pattern: /^\/mediation\/?$/,
				names: [],
				types: [],
				path: "/mediation",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "negotiation",
				pattern: /^\/negotiation\/?$/,
				names: [],
				types: [],
				path: "/negotiation",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "neutrals",
				pattern: /^\/neutrals\/?$/,
				names: [],
				types: [],
				path: "/neutrals",
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				path: "/news",
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				id: "press",
				pattern: /^\/press\/?$/,
				names: [],
				types: [],
				path: "/press",
				shadow: null,
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				id: "prices",
				pattern: /^\/prices\/?$/,
				names: [],
				types: [],
				path: "/prices",
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "privacy",
				pattern: /^\/privacy\/?$/,
				names: [],
				types: [],
				path: "/privacy",
				shadow: null,
				a: [0,20],
				b: [1]
			},
			{
				type: 'page',
				id: "recusal",
				pattern: /^\/recusal\/?$/,
				names: [],
				types: [],
				path: "/recusal",
				shadow: null,
				a: [0,21],
				b: [1]
			},
			{
				type: 'page',
				id: "refunds",
				pattern: /^\/refunds\/?$/,
				names: [],
				types: [],
				path: "/refunds",
				shadow: null,
				a: [0,22],
				b: [1]
			},
			{
				type: 'page',
				id: "resume",
				pattern: /^\/resume\/?$/,
				names: [],
				types: [],
				path: "/resume",
				shadow: null,
				a: [0,23],
				b: [1]
			},
			{
				type: 'page',
				id: "security",
				pattern: /^\/security\/?$/,
				names: [],
				types: [],
				path: "/security",
				shadow: null,
				a: [0,24],
				b: [1]
			},
			{
				type: 'page',
				id: "terms",
				pattern: /^\/terms\/?$/,
				names: [],
				types: [],
				path: "/terms",
				shadow: null,
				a: [0,25],
				b: [1]
			},
			{
				type: 'page',
				id: "thanks",
				pattern: /^\/thanks\/?$/,
				names: [],
				types: [],
				path: "/thanks",
				shadow: null,
				a: [0,26],
				b: [1]
			},
			{
				type: 'page',
				id: "training",
				pattern: /^\/training\/?$/,
				names: [],
				types: [],
				path: "/training",
				shadow: null,
				a: [0,27],
				b: [1]
			},
			{
				type: 'page',
				id: "w9",
				pattern: /^\/w9\/?$/,
				names: [],
				types: [],
				path: "/w9",
				shadow: null,
				a: [0,28],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/quotes",
				pattern: /^\/pages\/quotes\/?$/,
				names: [],
				types: [],
				path: "/pages/quotes",
				shadow: null,
				a: [0,29],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/acceptance",
				pattern: /^\/pages\/coaching\/acceptance\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/acceptance",
				shadow: null,
				a: [0,30],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/apology",
				pattern: /^\/pages\/coaching\/apology\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/apology",
				shadow: null,
				a: [0,31],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/benefits-of-conflict-coaching",
				pattern: /^\/pages\/coaching\/benefits-of-conflict-coaching\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/benefits-of-conflict-coaching",
				shadow: null,
				a: [0,32],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/breathwork",
				pattern: /^\/pages\/coaching\/breathwork\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/breathwork",
				shadow: null,
				a: [0,33],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/cbt",
				pattern: /^\/pages\/coaching\/cbt\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/cbt",
				shadow: null,
				a: [0,34],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/conflict-coaching-process",
				pattern: /^\/pages\/coaching\/conflict-coaching-process\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/conflict-coaching-process",
				shadow: null,
				a: [0,35],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/emotions",
				pattern: /^\/pages\/coaching\/emotions\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/emotions",
				shadow: null,
				a: [0,36],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/example-conflict-coaching-scenarios",
				pattern: /^\/pages\/coaching\/example-conflict-coaching-scenarios\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/example-conflict-coaching-scenarios",
				shadow: null,
				a: [0,37],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/forgiveness",
				pattern: /^\/pages\/coaching\/forgiveness\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/forgiveness",
				shadow: null,
				a: [0,38],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/gratitude",
				pattern: /^\/pages\/coaching\/gratitude\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/gratitude",
				shadow: null,
				a: [0,39],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/humility",
				pattern: /^\/pages\/coaching\/humility\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/humility",
				shadow: null,
				a: [0,40],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/limitations-of-conflict-coaching",
				pattern: /^\/pages\/coaching\/limitations-of-conflict-coaching\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/limitations-of-conflict-coaching",
				shadow: null,
				a: [0,41],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/meditation",
				pattern: /^\/pages\/coaching\/meditation\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/meditation",
				shadow: null,
				a: [0,42],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/mindset-assessment",
				pattern: /^\/pages\/coaching\/mindset-assessment\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/mindset-assessment",
				shadow: null,
				a: [0,43],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/pillars-of-conflict-coaching",
				pattern: /^\/pages\/coaching\/pillars-of-conflict-coaching\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/pillars-of-conflict-coaching",
				shadow: null,
				a: [0,44],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/rebt",
				pattern: /^\/pages\/coaching\/rebt\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/rebt",
				shadow: null,
				a: [0,45],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/relationships",
				pattern: /^\/pages\/coaching\/relationships\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/relationships",
				shadow: null,
				a: [0,46],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/coaching/what-is-conflict-coaching",
				pattern: /^\/pages\/coaching\/what-is-conflict-coaching\/?$/,
				names: [],
				types: [],
				path: "/pages/coaching/what-is-conflict-coaching",
				shadow: null,
				a: [0,47],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/benefits-of-mediation",
				pattern: /^\/pages\/mediation\/benefits-of-mediation\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/benefits-of-mediation",
				shadow: null,
				a: [0,48],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/example-mediation-provisions",
				pattern: /^\/pages\/mediation\/example-mediation-provisions\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/example-mediation-provisions",
				shadow: null,
				a: [0,49],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/example-mediation-scenarios",
				pattern: /^\/pages\/mediation\/example-mediation-scenarios\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/example-mediation-scenarios",
				shadow: null,
				a: [0,50],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/how-mediators-add-value",
				pattern: /^\/pages\/mediation\/how-mediators-add-value\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/how-mediators-add-value",
				shadow: null,
				a: [0,51],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/how-to-involve-a-neutral",
				pattern: /^\/pages\/mediation\/how-to-involve-a-neutral\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/how-to-involve-a-neutral",
				shadow: null,
				a: [0,52],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/limits-of-mediation",
				pattern: /^\/pages\/mediation\/limits-of-mediation\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/limits-of-mediation",
				shadow: null,
				a: [0,53],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/mediation-best-practices",
				pattern: /^\/pages\/mediation\/mediation-best-practices\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/mediation-best-practices",
				shadow: null,
				a: [0,54],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/mediation-confidentiality",
				pattern: /^\/pages\/mediation\/mediation-confidentiality\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/mediation-confidentiality",
				shadow: null,
				a: [0,55],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/mediation-law",
				pattern: /^\/pages\/mediation\/mediation-law\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/mediation-law",
				shadow: null,
				a: [0,56],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/mediation-process",
				pattern: /^\/pages\/mediation\/mediation-process\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/mediation-process",
				shadow: null,
				a: [0,57],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/pillars-of-mediation",
				pattern: /^\/pages\/mediation\/pillars-of-mediation\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/pillars-of-mediation",
				shadow: null,
				a: [0,58],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/what-a-mediator-does",
				pattern: /^\/pages\/mediation\/what-a-mediator-does\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/what-a-mediator-does",
				shadow: null,
				a: [0,59],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/what-mediation-is",
				pattern: /^\/pages\/mediation\/what-mediation-is\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/what-mediation-is",
				shadow: null,
				a: [0,60],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/who-mediators-are",
				pattern: /^\/pages\/mediation\/who-mediators-are\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/who-mediators-are",
				shadow: null,
				a: [0,61],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/mediation/why-a-medator-is-worthwhile",
				pattern: /^\/pages\/mediation\/why-a-medator-is-worthwhile\/?$/,
				names: [],
				types: [],
				path: "/pages/mediation/why-a-medator-is-worthwhile",
				shadow: null,
				a: [0,62],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/negotiation/benefits-of-negotiation",
				pattern: /^\/pages\/negotiation\/benefits-of-negotiation\/?$/,
				names: [],
				types: [],
				path: "/pages/negotiation/benefits-of-negotiation",
				shadow: null,
				a: [0,63],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/negotiation/example-negotiation-scenarios",
				pattern: /^\/pages\/negotiation\/example-negotiation-scenarios\/?$/,
				names: [],
				types: [],
				path: "/pages/negotiation/example-negotiation-scenarios",
				shadow: null,
				a: [0,64],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/negotiation/limitations-of-negotiation",
				pattern: /^\/pages\/negotiation\/limitations-of-negotiation\/?$/,
				names: [],
				types: [],
				path: "/pages/negotiation/limitations-of-negotiation",
				shadow: null,
				a: [0,65],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/negotiation/pillars-of-negotiation",
				pattern: /^\/pages\/negotiation\/pillars-of-negotiation\/?$/,
				names: [],
				types: [],
				path: "/pages/negotiation/pillars-of-negotiation",
				shadow: null,
				a: [0,66],
				b: [1]
			},
			{
				type: 'page',
				id: "pages/negotiation/what-is-negotiation",
				pattern: /^\/pages\/negotiation\/what-is-negotiation\/?$/,
				names: [],
				types: [],
				path: "/pages/negotiation/what-is-negotiation",
				shadow: null,
				a: [0,67],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
