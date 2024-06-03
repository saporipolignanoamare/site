import type { ChainModifiers, ContentfulClientApi } from 'contentful';
import { PUBLIC_CONTENTFUL_ACCESS_TOKEN, PUBLIC_CONTENTFUL_SPACE_ID } from '$env/static/public';
import { type TypeDirectory, wrap, type ClassDirectory } from './types/generated';
import { createContentfulClient, loadContentful, type Contentful } from './utils';

//

export class Db {
	private static instance: Db;
	private static client: ContentfulClientApi<undefined>;

	private constructor() {
		loadContentful().then((contentful) => {
			Db.client = createContentfulClient(contentful);
		});
	}

	//

	public static async load(): Promise<Db> {
		if (!Db.client) Db.client = await Db.loadClient();
		if (!Db.instance) Db.instance = new Db();
		return Db.instance;
	}

	private static async loadClient() {
		const contentful = await loadContentful();
		return createContentfulClient(contentful);
	}

	async getEntries<T extends keyof TypeDirectory>(content_type: T) {
		const entries = await Db.client.getEntries({ content_type });
		return entries.items.map((item) => wrap(item) as ClassDirectory[T]);
	}
}
