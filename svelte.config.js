import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		prerender: {
			crawl: true,
			enabled: true,
			onError: 'fail'
		}
	}
};

export default config;
