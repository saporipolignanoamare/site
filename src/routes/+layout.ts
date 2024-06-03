import { Db } from '$lib/contentful';

export const ssr = false;
export const prerender = true;

export const load = async () => {
	const db = await Db.load();
	const categorie = await db.getEntries('categoria');
	return { categorie };
};
