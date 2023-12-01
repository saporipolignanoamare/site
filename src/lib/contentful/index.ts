import { createClient } from 'contentful';

import {
	PUBLIC_CONTENTFUL_SPACE_ID,
	PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN
} from '$env/static/public';

export const client = createClient({
	space: PUBLIC_CONTENTFUL_SPACE_ID,
	accessToken: PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN
});
