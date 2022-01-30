import { writable } from 'svelte/store';
import type { ICategoria, ITelefono } from '$lib/types';

export const category = writable<string | null>(null);

export const showMenu = writable<boolean>(false);

export const navHeight = writable<number | null>(null);

export const numbers = writable<ITelefono | null>(null);

export const el = writable<HTMLElement | null>(null);

export const categories = writable<Array<ICategoria>>([]);

export function getCategoryBySlug(categories: Array<ICategoria>, slug: string) {
	return categories.filter((c) => c.fields.slug == slug)[0];
}
