import globals from 'globals';
// https://eslint.org/docs/latest/use/configure/configuration-files-new
// https://github.com/autosec-network/eslint-config/blob/main/.eslintrc.js
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
