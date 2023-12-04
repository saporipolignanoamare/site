const dotenv = require('dotenv');
const contentfulManagement = require('contentful-management');

dotenv.config();

module.exports = function () {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
	});

	return (
		contentfulClient
			.getSpace(process.env.CONTENTFUL_SPACE_ID)
			// @ts-ignore
			.then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
	);
};
