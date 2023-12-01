import { getCategories } from '$lib/contentful/queries';

export const load = async () => {
	return {
		categories: await getCategories('it')
	};
};
