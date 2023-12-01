import { client } from '$lib/requestsUtils/client';
import type { ICategoria, IProdotto, IAcquista, ITelefono } from '$lib/types';

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

//

export async function getProductsByCategory(
	category: ICategoria,
	locale: string
): Promise<Array<IProdotto>> {
	// Requesting categories
	const data = await client.getEntries({
		content_type: 'prodotto',
		'fields.categoria.sys.id': category.sys.id,
		locale
	});
	// Casting type
	return data.items as Array<IProdotto>;
}

//

export async function getAcquistaText(locale: string): Promise<IAcquista> {
	// Requesting categories
	const data = await client.getEntry('3HQI9CHzu9Ewqh7ZtaXKmv', { locale });
	// Casting type
	return data as IAcquista;
}

//

export async function getPhoneNumbers(): Promise<ITelefono> {
	const data = await client.getEntry('1Y6Guv4ycKqCCNlqMMW3rE');
	return data as ITelefono;
}
