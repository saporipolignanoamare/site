import { writable } from 'svelte/store';
import type { ICategoria } from '$lib/types';

export const category = writable<string | null>(null);

export const showMenu = writable<boolean>(false);

export const categories = writable<Array<ICategoria>>([]);
