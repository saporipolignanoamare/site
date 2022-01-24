import { writable } from 'svelte/store';

export const category = writable<string | null>(null);

export const showMenu = writable<boolean>(false);
