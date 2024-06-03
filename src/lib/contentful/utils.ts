import { browser } from '$app/environment';
import { PUBLIC_CONTENTFUL_ACCESS_TOKEN, PUBLIC_CONTENTFUL_SPACE_ID } from '$env/static/public';

export type Contentful = typeof import('contentful');

export function loadContentful(): Promise<Contentful> {
	// @ts-expect-error contentful_browser
	if (browser) return import('contentful/dist/contentful.browser');
	// @ts-expect-error contentful_browser
	else return import('contentful/dist/contentful.node');
}

export function createContentfulClient(contentful: Contentful) {
	return contentful.createClient({
		accessToken: PUBLIC_CONTENTFUL_ACCESS_TOKEN,
		space: PUBLIC_CONTENTFUL_SPACE_ID
	});
}
