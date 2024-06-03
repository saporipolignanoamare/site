import type { ContentfulClientApi } from 'contentful';
import { PUBLIC_CONTENTFUL_ACCESS_TOKEN, PUBLIC_CONTENTFUL_SPACE_ID } from '$env/static/public';
import { type TypeDirectory, wrap, type ClassDirectory } from './types/generated';

//

export class Db {
	private static instance: Db;

	private constructor() {}

	static async createClient() {
		const contentful_browser = await import(
			// @ts-expect-error contentful_browser
			'contentful/dist/contentful.browser'
		);
		const o: ContentfulClientApi<undefined> = contentful_browser.createClient({
			accessToken: PUBLIC_CONTENTFUL_ACCESS_TOKEN,
			space: PUBLIC_CONTENTFUL_SPACE_ID
		});
		return o;
	}

	//

	// public static async getInstance(): Db {
	// 	if (!Db.instance) {
	// 		Db.instance = new Db();
	// 	}
	// 	return Db.instance;
	// }

	async getEntries<T extends keyof TypeDirectory>(content_type: T) {
		const client = await Db.createClient();
		const entries = await client.getEntries({ content_type });
		// const entries = await contentfulRequest(URL, { content_type });
		// console.log(entries);
		return entries.items.map((item) => wrap(item) as ClassDirectory[T]);
	}
}
