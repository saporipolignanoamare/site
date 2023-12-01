import { client } from '.';

export async function getCategories(locale: string) {
	// Requesting categories
	const data = await client.getEntries({
		content_type: 'categoria',
		locale
	});
	// Casting type
	let categories = data.items;
	// Sorting
	categories = categories.sort(sortCategories);
	//
	return categories;
}

function sortCategories(a: unknown, b: unknown) {
	return a.fields.ordine - b.fields.ordine;
}
