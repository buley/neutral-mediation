import adapter from '@sveltejs/adapter-auto';

// https://www.npmjs.com/package/@sveltejs/adapter-static/v/next
//import staticadapter from '@sveltejs/adapter-static';
import staticadapter from '@sveltejs/adapter-cloudflare';

// https://github.com/sveltejs/svelte-preprocess
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: preprocess(),

	kit: {
		adapter: staticadapter({
	      pages: 'build',
	      assets: 'build',
	      fallback: null,
	      precompress: false,
	      prerender: {
	        default: true
	      }
	    }),

	    prerender: {
	      default: true
	    },

	    routes: filepath => {
	      return ![
	        /\.off$/,
	        // original default config
	        /(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/,
	      ].some(regex => regex.test(filepath))
	    }

	},
	
	vitePlugin: {
	    experimental: {
	      useVitePreprocess: true
	    }
	  }

};

export default config;
