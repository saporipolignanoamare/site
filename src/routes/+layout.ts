import { Db } from '$lib/contentful';

export const ssr = false;

export const load = async () => {
	const db = await Db.createClient();
	// console.log(db);
	const categorie = await db.getEntries('prodotto');
	return { categorie: {} };
};
