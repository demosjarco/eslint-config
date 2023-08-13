import globals from 'globals';

export default [
	{
		files: [],
		ignores: [],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.serviceworker,
				...globals.node,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: true,
		},
		plugins: {},
		// https://ota-meshi.github.io/eslint-plugin-yml/rules/
		rules: {},
	},
];