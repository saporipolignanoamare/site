import { client } from '$lib/requestsUtils/client';
import type { ICategoria } from '$lib/types';

//

export async function getCategories(locale: string): Promise<Array<ICategoria>> {
	// Requesting categories
	const data = await client.getEntries({
		content_type: 'categoria',
		locale
	});
	// Casting type
	let categories = data.items as Array<ICategoria>;
	// Sorting
	categories = categories.sort(sortCategories);
	//
	return categories;
}

function sortCategories(a: ICategoria, b: ICategoria) {
	return a.fields.ordine - b.fields.ordine;
}
