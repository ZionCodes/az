import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PB_URL: { static: true },
	PUBLIC_GA_MEASUREMENT_ID: { public: true, static: true }
});
