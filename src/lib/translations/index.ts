import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = {
	translations: {
		it: { lang },
		en: { lang }
	},
	loaders: [
		{
			locale: 'it',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./it/home.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'], // you can use regexes as well!
			loader: async () => (await import('./en/home.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
